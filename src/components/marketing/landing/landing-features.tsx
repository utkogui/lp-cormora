import { Check, ChevronDown } from '@untitledui/icons';
import { cx } from '@/utils/cx';
import { LANDING_FEATURE_GROUPS, type LandingFeature } from './landing-features-data';

function FeatureMark({ feature }: { feature: LandingFeature }) {
  if (feature.status === 'soon') {
    return (
      <span className="shrink-0 rounded-full bg-purple-100 px-2 py-0.5 text-xs font-semibold text-[#5b2ec4]">
        Em breve
      </span>
    );
  }

  if (feature.status === 'module') {
    return (
      <span className="shrink-0 rounded-full bg-brand-200 px-2 py-0.5 text-xs font-semibold text-brand-800">
        Módulo à parte
      </span>
    );
  }

  return (
    <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-success-100 text-success-700">
      <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
      <span className="sr-only">Incluso</span>
    </span>
  );
}

function FeatureList({ items }: { items: LandingFeature[] }) {
  return (
    <ul>
      {items.map((feature) => (
        <li key={feature.name} className="flex items-start gap-3 border-t border-secondary py-4 first:border-t-0 first:pt-0">
          <FeatureMark feature={feature} />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-primary">{feature.name}</p>
            <p className="mt-1 text-sm text-tertiary">{feature.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

function MoreMark({ feature }: { feature: LandingFeature }) {
  if (feature.status === 'soon') {
    return <span className="text-[11px] font-medium tracking-wide text-[#864DF7]">Em breve</span>;
  }

  if (feature.status === 'module') {
    return <span className="text-[11px] font-medium tracking-wide text-brand-700">À parte</span>;
  }

  return <span className="size-1 shrink-0 rounded-full bg-gray-400" aria-hidden />;
}

function MoreTable({ items }: { items: LandingFeature[] }) {
  return (
    <div className="mt-3 overflow-hidden rounded-xl bg-primary/80">
      <table className="w-full border-collapse text-left">
        <tbody>
          {items.map((feature) => (
            <tr key={feature.name} className="border-t border-black/[0.05] first:border-t-0">
              <td className="px-4 py-2.5 align-top">
                <p className="flex items-center gap-2 text-[13px] font-medium leading-5 text-tertiary">
                  {feature.status === 'included' ? <MoreMark feature={feature} /> : null}
                  {feature.name}
                  {feature.status !== 'included' ? <MoreMark feature={feature} /> : null}
                </p>
                <p className="mt-0.5 text-xs leading-5 text-quaternary sm:hidden">{feature.text}</p>
              </td>
              <td className="hidden w-[46%] px-4 py-2.5 align-top text-xs leading-5 text-quaternary sm:table-cell">
                {feature.text}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function LandingFeatures() {
  return (
    <section id="o-que-entra" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-8 px-4 py-16 md:px-8 md:py-24">
        <div className="max-w-xl">
          <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-secondary">
            <span className="flex items-center gap-1" aria-hidden>
              <span className="size-1.5 rounded-full bg-brand-800" />
              <span className="size-1.5 rounded-full bg-[#864DF7]" />
              <span className="size-1.5 rounded-full bg-brand-500" />
            </span>
            O que entra
          </p>
          <h2 className="mt-3 font-display text-display-xs font-semibold text-primary md:text-display-sm">
            Tudo no Plus, sem degrau
          </h2>
          <p className="mt-3 text-md text-tertiary">
            Quem entra usa o Cormora inteiro. O que ainda não existe aparece como em breve, ou fica de fora.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {LANDING_FEATURE_GROUPS.map((group, index) => (
            <article
              key={group.title}
              className={cx('rounded-2xl p-6', index % 2 === 0 ? 'bg-brand-100' : 'bg-purple-50')}
            >
              <div className="flex items-center gap-3">
                <span
                  className={cx(
                    'font-display text-sm font-semibold tabular-nums',
                    index % 2 === 0 ? 'text-brand-secondary' : 'text-[#864DF7]',
                  )}
                >
                  {index + 1}
                </span>
                <h3 className="font-display text-lg font-semibold text-primary">{group.title}</h3>
              </div>
              <div className="mt-4">
                <FeatureList items={group.visible} />
              </div>
              {group.more.length > 0 ? (
                <details className="group mt-1">
                  <summary
                    className={cx(
                      'inline-flex cursor-pointer list-none items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium text-quaternary',
                      'ring-1 ring-transparent hover:bg-secondary hover:text-tertiary hover:ring-secondary',
                      '[&::-webkit-details-marker]:hidden',
                    )}
                  >
                    <span className="group-open:hidden">Ver todas as features (+{group.more.length})</span>
                    <span className="hidden group-open:inline">Ocultar</span>
                    <ChevronDown className="size-3.5 transition-transform group-open:rotate-180" aria-hidden />
                  </summary>
                  <MoreTable items={group.more} />
                </details>
              ) : null}
            </article>
          ))}

          <article className="flex flex-wrap items-center gap-3 rounded-2xl bg-purple-50 p-6">
            <span className="font-display text-sm font-semibold tabular-nums text-[#864DF7]">6</span>
            <h3 className="font-display text-lg font-semibold text-primary">Financeiro</h3>
            <span className="rounded-full bg-purple-100 px-2 py-0.5 text-xs font-semibold text-[#5b2ec4]">Em breve</span>
            <p className="w-full text-sm text-tertiary">Módulo em construção. As features do Financeiro chegam em breve.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
