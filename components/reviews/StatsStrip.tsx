import { Container } from "../ui/Container";

const stats = [
  { value: "5.0", label: "средняя оценка" },
  { value: "[X]00+", label: "довольных клиентов" },
  { value: "0", label: "случаев ожогов" },
  { value: "[X]+", label: "лет практики" },
];

export function StatsStrip() {
  return (
    <section className="pb-14 sm:pb-20">
      <Container>
        <div className="grid grid-cols-2 gap-4 rounded-[1.8rem] border border-line bg-surface-raised p-8 sm:grid-cols-4 sm:p-10">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-1 text-center sm:text-left">
              <span className="font-display text-[2rem] text-sage-deep">{s.value}</span>
              <span className="text-[0.85rem] text-ink-faint">{s.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
