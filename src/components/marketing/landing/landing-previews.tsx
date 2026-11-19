import Image from 'next/image';

const FUNNEL = [
  {
    name: 'Novo',
    cards: ['Lisboa · 5 dias', 'Gramado · inverno'],
  },
  {
    name: 'Proposta',
    cards: ['Santorini · lua de mel'],
  },
  {
    name: 'Fechado',
    cards: ['Kyoto · 8 dias'],
  },
] as const;

const BUDGET = [
  { name: 'Voo LIS → OPO', meta: '2 adultos', value: 'R$ 2.840' },
  { name: 'Hotel Chiado', meta: '3 noites', value: 'R$ 4.260' },
  { name: 'Transfer', meta: 'Aeroporto', value: 'R$ 180' },
] as const;

function WindowChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-2 border-b border-black/[0.06] px-4 py-2.5">
      <span className="size-2 rounded-full bg-brand-solid" />
      <span className="size-2 rounded-full bg-[#864DF7]" />
      <span className="size-2 rounded-full bg-brand-400" />
      <span className="ml-1 truncate text-xs text-quaternary">{label}</span>
    </div>
  );
}

export function ItineraryPreview() {
  return (
    <div className="overflow-hidden rounded-2xl bg-primary shadow-[0_30px_80px_-36px_rgba(16,24,40,0.45)] ring-1 ring-black/[0.06]">
      <WindowChrome label="Proposta · Liverpool" />
      <div className="grid md:grid-cols-[1.15fr_0.85fr]">
        <div className="relative min-h-64 md:min-h-80">
          <Image
            src="/images/landing/destino-liverpool.jpg"
            alt="Capa do roteiro, Albert Dock em Liverpool"
            fill
            className="object-cover"
            sizes="(min-width: 768px) 560px, 100vw"
            priority
          />
        </div>
        <div className="flex flex-col gap-4 p-5 md:p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-secondary">O cliente abre este link</p>
          <p className="font-display text-xl font-semibold text-primary">Quatro dias em Liverpool</p>
          <ul className="flex flex-col gap-2">
            {['Dia 1 · Albert Dock', 'Dia 2 · The Beatles', 'Dia 3 · Anfield', 'Dia 4 · Baltic Triangle'].map((day) => (
              <li
                key={day}
                className="rounded-xl bg-secondary px-3 py-2 text-sm font-medium text-secondary ring-1 ring-black/[0.04]"
              >
                {day}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function FunnelPreview() {
  return (
    <div className="overflow-hidden rounded-2xl bg-primary shadow-lg ring-1 ring-black/[0.06]">
      <WindowChrome label="Atendimentos" />
      <div className="grid grid-cols-3 gap-2 p-3 sm:gap-3 sm:p-4">
        {FUNNEL.map((column) => (
          <div key={column.name} className="flex flex-col gap-2 rounded-xl bg-secondary p-2">
            <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-quaternary">{column.name}</p>
            {column.cards.map((card) => (
              <p key={card} className="rounded-lg bg-primary px-2 py-2 text-xs font-medium text-primary shadow-xs ring-1 ring-black/[0.05]">
                {card}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export function BudgetPreview() {
  return (
    <div className="overflow-hidden rounded-2xl bg-primary shadow-lg ring-1 ring-black/[0.06]">
      <WindowChrome label="Orçamento · Lisboa" />
      <ul className="divide-y divide-black/[0.06] px-4">
        {BUDGET.map((row) => (
          <li key={row.name} className="flex items-center justify-between gap-3 py-3">
            <span>
              <span className="block text-sm font-medium text-primary">{row.name}</span>
              <span className="block text-xs text-tertiary">{row.meta}</span>
            </span>
            <span className="text-sm font-semibold text-primary">{row.value}</span>
          </li>
        ))}
      </ul>
      <div className="flex items-center justify-between bg-secondary px-4 py-3">
        <span className="text-xs font-semibold uppercase tracking-[0.06em] text-quaternary">Proposta</span>
        <span className="font-display text-lg font-semibold text-primary">R$ 7.280</span>
      </div>
    </div>
  );
}
