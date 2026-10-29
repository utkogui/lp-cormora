'use client';

import { useEffect } from 'react';
import {
  CheckDone01,
  Columns03,
  File06,
  Folder,
  Table,
  Users01,
} from '@untitledui/icons';
import { FeaturedIcon } from '@/components/foundations/featured-icon/featured-icon';
import { LandingArt } from './landing-art';
import { LandingCta } from './landing-cta';
import { LandingDestinations } from './landing-destinations';
import { LandingFooter } from './landing-footer';
import { LandingHeader } from './landing-header';
import { LandingHero } from './landing-hero';
import { LandingPricing } from './landing-pricing';

const FEATURES = [
  {
    icon: Columns03,
    title: 'Funil de atendimentos',
    text: 'Venda a um relance. Status do atendimento atualiza no mesmo lugar.',
  },
  {
    icon: Folder,
    title: 'Informação centralizada',
    text: 'Cliente, proposta e histórico no atendimento. Sem planilha paralela.',
  },
  {
    icon: Users01,
    title: 'CRM',
    text: 'Perfil do cliente e histórico das vendas para a próxima proposta.',
  },
  {
    icon: CheckDone01,
    title: 'Tarefas e lembretes',
    text: 'Atividades do atendimento, sugeridas ou da agência.',
  },
  {
    icon: File06,
    title: 'Vouchers e contratos',
    text: 'Documento de cada orçamento organizado. No Completo, a assinatura entra no fluxo.',
  },
  {
    icon: Table,
    title: 'Sem planilha',
    text: 'Voo, hotel, transfer e seguro na mesma proposta.',
  },
] as const;

const STEPS = [
  {
    n: '01',
    title: '14 dias no Completo',
    text: 'A agência usa o produto inteiro, sem cartão. O valor aparece no ciclo real.',
  },
  {
    n: '02',
    title: 'No dia 15, escolhe',
    text: 'Básico, Médio ou Completo. Ou para. Não existe plano grátis permanente.',
  },
  {
    n: '03',
    title: 'Segue o trabalho',
    text: 'Atendimento, orçamento e proposta continuam no mesmo sistema.',
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

        <section className="bg-secondary">
          <div className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20">
            <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-secondary">O produto</p>
              <h2 className="font-display text-display-xs font-semibold text-primary md:text-display-sm">
                Feito para o consultor
              </h2>
              <p className="text-md text-tertiary">Cormora é pensado por consultores e para consultores.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {FEATURES.map((item) => (
                <article key={item.title} className="rounded-2xl bg-primary p-5 shadow-xs ring-1 ring-black/[0.06]">
                  <FeaturedIcon color="brand" theme="light" size="md" icon={item.icon} />
                  <h3 className="mt-4 font-display text-md font-semibold text-primary">{item.title}</h3>
                  <p className="mt-1 text-sm text-tertiary">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#252b37]">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-16 md:px-8 md:py-24">
            <div className="mx-auto flex max-w-2xl flex-col items-center gap-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-secondary">
                Encanto no primeiro clique
              </p>
              <h2 className="font-display text-display-xs font-semibold text-white md:text-display-sm">
                O roteiro que o cliente abre
              </h2>
              <p className="text-md text-white/75">
                Fotos, dias e descrição na página da viagem. O consultor envia o link. Não monta PDF à mão.
              </p>
            </div>
            <LandingDestinations />
          </div>
        </section>

        <section id="como-funciona" className="relative scroll-mt-24 overflow-hidden">
          <LandingArt />
          <div className="absolute inset-0 bg-[#864DF7]/35" />
          <div className="relative mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20">
            <div className="mx-auto mb-10 flex max-w-2xl flex-col items-center gap-3 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/80">Como funciona</p>
              <h2 className="font-display text-display-xs font-semibold text-white md:text-display-sm">
                Trial de 14 dias e corta
              </h2>
            </div>
            <ol className="grid gap-4 md:grid-cols-3">
              {STEPS.map((step) => (
                <li key={step.n} className="rounded-2xl bg-primary/95 p-6 shadow-lg ring-1 ring-white/40">
                  <p className="font-display text-display-xs font-semibold text-brand-secondary">{step.n}</p>
                  <h3 className="mt-3 font-display text-lg font-semibold text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm text-tertiary">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div className="bg-brand-50 py-16 md:py-20">
          <LandingPricing />
        </div>

        <LandingCta />
      </main>

      <LandingFooter />
    </div>
  );
}
