#!/usr/bin/env bash
#
# Сборка сайта и ручная выкладка на GitHub Pages (ветка gh-pages).
# Использование:
#   bash scripts/deploy.sh
# или:
#   npm run deploy
#
# Требования: репозиторий уже создан на GitHub и подключён как remote "origin".
#
set -euo pipefail

BRANCH="gh-pages"
OUT_DIR="out"

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "❌ Не найден git remote 'origin'. Сначала подключите репозиторий:"
  echo "   git remote add origin https://github.com/USERNAME/REPO.git"
  exit 1
fi

REMOTE_URL=$(git config --get remote.origin.url)

echo "==> Устанавливаю зависимости (если нужно)"
npm install --no-audit --no-fund

echo "==> Собираю статическую версию сайта"
npm run build

if [ ! -d "$OUT_DIR" ]; then
  echo "❌ Папка $OUT_DIR не появилась после сборки. Проверьте next.config.ts (output: \"export\")."
  exit 1
fi

echo "==> Публикую содержимое $OUT_DIR в ветку $BRANCH репозитория $REMOTE_URL"
pushd "$OUT_DIR" >/dev/null

rm -rf .git
git init -q
git checkout -q -b "$BRANCH"
touch .nojekyll
git add -A
git -c user.name="Deploy Script" -c user.email="deploy@local" commit -q -m "Deploy $(date -u +'%Y-%m-%d %H:%M:%S UTC')"
git push -f "$REMOTE_URL" "$BRANCH:$BRANCH"
rm -rf .git

popd >/dev/null

echo ""
echo "✅ Готово! Через 1–2 минуты сайт будет доступен на GitHub Pages."
echo "   Если это первый деплой — зайдите в Settings → Pages репозитория"
echo "   и укажите Source: Deploy from a branch → $BRANCH / (root)."
