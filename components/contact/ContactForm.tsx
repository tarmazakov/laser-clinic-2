"use client";

import { FormEvent, useState } from "react";
import { Button } from "../ui/Button";
import { IconCheck } from "../ui/Icons";

type Errors = Partial<Record<"name" | "phone" | "message", string>>;

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (name.trim().length < 2) {
      next.name = "Укажите, как к вам обращаться";
    }
    const digits = phone.replace(/\D/g, "");
    if (digits.length < 10) {
      next.phone = "Проверьте номер телефона";
    }
    if (message.trim().length < 5) {
      next.message = "Кратко опишите ваш вопрос";
    }
    return next;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
    }
  }

  function handleReset() {
    setSubmitted(false);
    setName("");
    setPhone("");
    setMessage("");
    setErrors({});
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-[1.8rem] border border-sage/40 bg-sage-pale/50 px-8 py-14 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage text-canvas">
          <IconCheck className="h-6 w-6" />
        </span>
        <h3 className="font-display text-[1.4rem]">Спасибо, заявка принята</h3>
        <p className="max-w-[380px] text-[0.95rem] leading-relaxed text-ink-soft">
          Мы свяжемся с вами по указанному телефону в течение рабочего дня, чтобы подобрать
          удобное время консультации.
        </p>
        <Button variant="secondary" onClick={handleReset} className="mt-2">
          Отправить ещё одну заявку
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="text-[0.9rem] font-medium text-ink">
          Имя
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Как к вам обращаться"
          className="rounded-xl border border-ink/15 bg-canvas px-4 py-3 text-[0.98rem] text-ink outline-none transition-colors focus:border-sage"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <span className="text-[0.82rem] text-accent-warn">{errors.name}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="phone" className="text-[0.9rem] font-medium text-ink">
          Телефон
        </label>
        <input
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+7 (___) ___-__-__"
          className="rounded-xl border border-ink/15 bg-canvas px-4 py-3 text-[0.98rem] text-ink outline-none transition-colors focus:border-sage"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone && <span className="text-[0.82rem] text-accent-warn">{errors.phone}</span>}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-[0.9rem] font-medium text-ink">
          Ваш вопрос
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Например: свожу тату на предплечье, сколько сеансов может понадобиться?"
          rows={4}
          className="resize-none rounded-xl border border-ink/15 bg-canvas px-4 py-3 text-[0.98rem] text-ink outline-none transition-colors focus:border-sage"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <span className="text-[0.82rem] text-accent-warn">{errors.message}</span>}
      </div>

      <Button type="submit" size="lg" className="mt-2">
        Отправить заявку
      </Button>
      <p className="text-[0.8rem] text-ink-faint">
        Отправляя форму, вы соглашаетесь на обработку данных для связи с вами.
      </p>
    </form>
  );
}
