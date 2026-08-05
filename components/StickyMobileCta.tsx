import { Button } from "./ui/Button";
import { IconPhone } from "./ui/Icons";
import { ctaLabel, site } from "@/lib/content";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/95 px-4 py-3 backdrop-blur-md lg:hidden [padding-bottom:calc(0.75rem+env(safe-area-inset-bottom))]">
      <div className="flex items-center gap-2.5">
        <a
          href={site.phoneHref}
          aria-label="Позвонить"
          className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink"
        >
          <IconPhone className="h-5 w-5" />
        </a>
        <Button href="/contact" size="md" className="w-full">
          {ctaLabel}
        </Button>
      </div>
    </div>
  );
}
