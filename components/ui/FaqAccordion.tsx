"use client";

import { useState } from "react";
import clsx from "clsx";
import { IconArrow } from "./Icons";
import type { FaqItem } from "@/lib/content";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={item.question}
            className={clsx(
              "overflow-hidden rounded-[1.3rem] border transition-colors duration-300",
              isOpen ? "border-sage/50 bg-sage-pale/40" : "border-line bg-surface-raised"
            )}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="text-[1rem] font-semibold text-ink">{item.question}</span>
              <IconArrow
                className={clsx(
                  "h-4 w-4 shrink-0 text-sage-deep transition-transform duration-300",
                  isOpen ? "rotate-90" : "rotate-0"
                )}
              />
            </button>
            <div
              className={clsx(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-5 text-[0.95rem] leading-relaxed text-ink-soft">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
