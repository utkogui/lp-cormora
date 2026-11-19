import { Button } from '@/components/base/buttons/button';
import { PLAN } from '@/components/application/pricing/trial-cut-pricing-data';
import { appUrl } from '@/utils/app-url';

export function LandingPricing() {
  return (
    <section id="plano" className="scroll-mt-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 md:px-8">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
          <p className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-secondary">
            <span className="flex items-center gap-1" aria-hidden>
              <span className="size-1.5 rounded-full bg-brand-800" />
              <span className="size-1.5 rounded-full bg-[#864DF7]" />
              <span className="size-1.5 rounded-full bg-brand-500" />
            </span>
            Depois do teste
          </p>
          <h2 className="font-display text-display-xs font-semibold text-primary md:text-display-sm">
            Plus, {PLAN.price} por usuário
          </h2>
          <p className="text-md text-tertiary">
            Quem se cadastra entra no Plus. Os 14 dias são sem cartão. No dia 15 você informa o cartão e continua, ou o acesso para.
          </p>
        </div>

        <article className="mx-auto flex w-full max-w-md flex-col rounded-2xl bg-brand-50 p-6 text-center shadow-xs ring-2 ring-brand-solid">
          <p className="mx-auto mb-3 w-fit rounded-full bg-brand-solid px-2.5 py-0.5 text-xs font-semibold text-white">
            14 dias de teste, sem cartão
          </p>
          <p className="text-sm font-semibold text-tertiary">{PLAN.name}</p>
          <p className="mt-1 text-md font-semibold text-primary">{PLAN.sense}</p>
          <p className="mt-3 font-display text-display-sm font-semibold tracking-tight text-primary">
            {PLAN.price}
            <span className="ml-1 text-sm font-semibold text-tertiary">/ usuário / mês</span>
          </p>
          <p className="mt-2 text-sm text-tertiary">{PLAN.users}</p>
          <p className="mt-1 text-sm text-tertiary">{PLAN.annual}</p>
          <Button className="mt-6 w-full" color="primary" size="lg" href={appUrl('/login?tab=signup')}>
            {PLAN.cta}
          </Button>
        </article>
      </div>
    </section>
  );
}
