"use client";

import { useState } from "react";
import clsx from "clsx";
import { PhotoPlaceholder } from "../ui/PhotoPlaceholder";

const categories = ["Все", "Татуировки", "Татуаж"] as const;

type Item = {
  id: string;
  label: string;
  category: (typeof categories)[number];
  sessions: string;
};

const items: Item[] = [
  { id: "g1", label: "Рука, предплечье", category: "Татуировки", sessions: "4 сеанса" },
  { id: "g2", label: "Брови, татуаж", category: "Татуаж", sessions: "3 сеанса" },
  { id: "g3", label: "Щиколотка", category: "Татуировки", sessions: "6 сеансов" },
  { id: "g4", label: "Губы, татуаж", category: "Татуаж", sessions: "2 сеанса" },
  { id: "g5", label: "Спина, крупная работа", category: "Татуировки", sessions: "8 сеансов" },
  { id: "g6", label: "Веки, татуаж", category: "Татуаж", sessions: "3 сеанса" },
  { id: "g7", label: "Кавер-ап, плечо", category: "Татуировки", sessions: "7 сеансов" },
  { id: "g8", label: "Запястье, надпись", category: "Татуировки", sessions: "5 сеансов" },
];

export function GalleryGrid() {
  const [active, setActive] = useState<(typeof categories)[number]>("Все");
  const filtered = items.filter((item) => active === "Все" || item.category === active);

  return (
    <section className="pb-20 sm:pb-28">
      <div className="mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        <div className="mb-10 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={clsx(
                "rounded-full border px-5 py-2.5 text-[0.9rem] font-medium transition-colors duration-200",
                active === cat
                  ? "border-sage bg-sage text-canvas"
                  : "border-ink/15 text-ink-soft hover:border-sage hover:text-sage-deep"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <PhotoPlaceholder label={`До / после — ${item.label}`} />
              <span className="text-[0.85rem] text-ink-faint">{item.sessions}</span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[0.9rem] text-ink-faint">
          Все фотографии публикуются только с письменного согласия клиентов. Каждая карточка выше —
          слот под реальное фото до / после, которое можно загрузить из вашей студии.
        </p>
      </div>
    </section>
  );
}
