import { Button } from '@/components/base/buttons/button';
import { appUrl } from '@/utils/app-url';
import { cx } from '@/utils/cx';
import { PricingMark } from '@/components/application/pricing/pricing-mark';
import { TRIAL_CUT_COPY, TRIAL_CUT_ROWS } from '@/components/application/pricing/trial-cut-pricing-data';

const PLANS = [
  {
    name: 'Básico',
    price: 'R$ 39',
    detail: '1 usuário · 10 propostas / mês',
    cta: 'Começar',
    featured: false,
  },
  {
    name: 'Médio',
    price: 'R$ 199',
    detail: 'Até 15 usuários · 100 propostas / mês',
    cta: 'Começar',
    featured: false,
  },
  {
    name: 'Completo',
    price: 'R$ 349',
    detail: 'Ilimitado · Amadeus, OCR e contrato',
    cta: 'Começar no Completo',
    featured: true,
  },
] as const;

export function LandingPricing() {
  const featuredIndex = TRIAL_CUT_COPY.featuredPlanIndex;

  return (
    <section id="planos" className="scroll-mt-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-secondary">Planos</p>
          <h2 className="font-display text-display-xs font-semibold text-primary md:text-display-sm">
            14 dias no Completo. Depois, você escolhe.
          </h2>
          <p className="text-md text-tertiary">
            Sem cartão no trial. No dia 15 a agência segue no Básico, no Médio ou no Completo, ou para.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {PLANS.map((plan) => (
            <article
              key={plan.name}
              className={cx(
                'flex flex-col rounded-2xl p-6 shadow-xs ring-1',
                plan.featured
                  ? 'bg-brand-50 ring-2 ring-brand-solid'
                  : 'bg-primary ring-secondary',
              )}
            >
              {plan.featured ? (
                <p className="mb-3 w-fit rounded-full bg-brand-solid px-2.5 py-0.5 text-xs font-semibold text-white">
                  Trial de 14 dias
                </p>
              ) : null}
              <p className="text-sm font-semibold text-tertiary">{plan.name}</p>
              <p className="mt-3 font-display text-display-sm font-semibold tracking-tight text-primary">
                {plan.price}
                <span className="ml-1 text-sm font-semibold text-tertiary">/ mês</span>
              </p>
              <p className="mt-2 text-sm text-tertiary">{plan.detail}</p>
              <Button
                className="mt-6 w-full"
                color={plan.featured ? 'primary' : 'secondary'}
                size="lg"
                href={appUrl('/login?tab=signup')}
              >
                {plan.cta}
              </Button>
            </article>
          ))}
        </div>

        <div className="overflow-x-auto rounded-xl bg-primary shadow-xs ring-1 ring-secondary">
          <table className="w-full min-w-[640px] table-fixed border-collapse text-left">
            <colgroup>
              <col className="w-[34%]" />
              <col className="w-[22%]" />
              <col className="w-[22%]" />
              <col className="w-[22%]" />
            </colgroup>
            <thead>
              <tr>
                <th className="px-4 py-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-quaternary">
                  O que entra
                </th>
                {TRIAL_CUT_COPY.plans.map((plan, index) => (
                  <th
                    key={plan}
                    className={cx(
                      'px-4 py-3.5 font-display text-md font-semibold',
                      index === featuredIndex ? 'bg-brand-solid text-white' : 'text-primary',
                    )}
                  >
                    {plan}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TRIAL_CUT_ROWS.map((row) => {
                if (row.type === 'group') {
                  return (
                    <tr key={row.label}>
                      <td
                        colSpan={4}
                        className="bg-secondary px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-tertiary"
                      >
                        {row.label}
                      </td>
                    </tr>
                  );
                }

                return (
                  <tr key={row.label} className="border-t border-secondary">
                    <td className="px-4 py-3 text-sm font-medium text-primary">{row.label}</td>
                    {row.cells.map((cell, index) => (
                      <td
                        key={`${row.label}-${index}`}
                        className={cx('px-4 py-3', index === featuredIndex && 'bg-brand-25')}
                      >
                        <PricingMark cell={cell} featured={index === featuredIndex} />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
