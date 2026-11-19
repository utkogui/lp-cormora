'use client';

import { useEffect } from 'react';
import { LandingCta } from './landing-cta';
import { LandingFeatures } from './landing-features';
import { LandingFooter } from './landing-footer';
import { LandingHeader } from './landing-header';
import { LandingHero } from './landing-hero';
import { LandingPricing } from './landing-pricing';
import { BudgetPreview, FunnelPreview } from './landing-previews';

const STEPS = [
  {
    n: '01',
    title: '14 dias de teste',
    text: 'Sem cartão de crédito. Você entra, monta a proposta e envia o link para o cliente.',
  },
  {
    n: '02',
    title: 'No dia 15, decide se fica',
    text: 'Informa o cartão e continua no Plus. Sem cartão, o acesso para. Não fica um plano grátis.',
  },
  {
    n: '03',
    title: 'O que você fez continua',
    text: 'Atendimento, orçamento e o link da proposta seguem no plano.',
  },
] as const;

export function LandingPage() {
  useEffect(() => {
    document.documentElement.classList.add('landing-document-scroll');
    return () => document.documentElement.classList.remove('landing-document-scroll');
  }, []);

  return (
    <div className="min-h-dvh bg-secondary">
      <LandingHeader />

      <main>
        <LandingHero />

        <section className="relative overflow-hidden bg-brand-300">
          <img
            alt=""
            aria-hidden
            src="/logos/logomark.svg"
            className="pointer-events-none absolute -right-16 -top-16 w-72 opacity-70 sm:w-80 md:-right-10 md:-top-20 md:w-[32rem] md:opacity-80"
          />
          <div className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
            <div className="relative max-w-xl md:pr-16 lg:pr-0">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-secondary">
                <span className="flex items-center gap-1" aria-hidden>
                  <span className="size-1.5 rounded-full bg-brand-800" />
                  <span className="size-1.5 rounded-full bg-[#864DF7]" />
                  <span className="size-1.5 rounded-full bg-brand-500" />
                </span>
                O caminho
              </p>
              <h2 className="mt-3 font-display text-display-xs font-semibold text-primary md:text-display-sm">
                Do atendimento ao link
              </h2>
              <p className="mt-3 text-md text-tertiary">
                Você atende, monta o orçamento e a proposta sai dali. O cliente abre o link. O roteiro vai junto, na mesma página.
              </p>
            </div>

            <div className="mt-12 grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-primary">Atendimento</p>
                <FunnelPreview />
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-sm font-semibold text-primary">Orçamento</p>
                <BudgetPreview />
              </div>
            </div>
          </div>
        </section>

        <section id="como-funciona" className="relative scroll-mt-24 overflow-hidden bg-purple-200">
          <img
            alt=""
            aria-hidden
            src="/images/itinerary/intersect-cover.svg"
            className="pointer-events-none absolute -right-8 -top-10 h-[28rem] w-auto max-w-none opacity-80 md:-right-4 md:h-[36rem]"
            style={{ filter: 'brightness(0) invert(1)' }}
          />
          <div className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-24">
            <div className="mb-10 max-w-xl">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-brand-secondary">
                <span className="flex items-center gap-1" aria-hidden>
                  <span className="size-1.5 rounded-full bg-brand-800" />
                  <span className="size-1.5 rounded-full bg-[#864DF7]" />
                  <span className="size-1.5 rounded-full bg-brand-500" />
                </span>
                Como funciona
              </p>
              <h2 className="mt-3 font-display text-display-xs font-semibold text-primary md:text-display-sm">
                14 dias de teste, sem cartão
              </h2>
              <p className="mt-3 text-md text-tertiary">
                Você usa de verdade e só decide pagar no dia 15.
              </p>
            </div>
            <ol className="grid gap-4 md:grid-cols-3">
              {STEPS.map((step) => (
                <li key={step.n} className="rounded-2xl bg-primary p-6 shadow-xs ring-1 ring-black/[0.06]">
                  <p className="font-display text-display-xs font-semibold text-brand-secondary">{step.n}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm text-tertiary">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div className="relative overflow-hidden bg-brand-400 py-16 md:py-24">
          <img
            alt=""
            aria-hidden
            src="/images/itinerary/intersect-cover-right.svg"
            className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-auto max-w-none opacity-80 md:-bottom-32 md:-right-8 md:h-[28rem]"
          />
          <div className="relative">
            <LandingPricing />
          </div>
        </div>

        <LandingFeatures />

        <LandingCta />
      </main>

      <LandingFooter />
    </div>
  );
}
