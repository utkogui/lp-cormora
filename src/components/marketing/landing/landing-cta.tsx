'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/base/buttons/button';
import { appUrl } from '@/utils/app-url';
import { LandingFade } from './landing-fade';

export function LandingCta() {
  const ref = useRef<HTMLElement>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 0;
      if (rect.top < vh * 0.75 && rect.bottom > vh * 0.15) {
        setOn(true);
        return true;
      }
      return false;
    };

    if (reveal()) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setOn(true);
      },
      { threshold: 0.18 },
    );
    io.observe(el);
    window.addEventListener('scroll', reveal, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', reveal);
    };
  }, []);

  return (
    <section
      ref={ref}
      data-in={on ? '1' : '0'}
      className="landing-cta relative isolate min-h-[72svh] overflow-hidden"
    >
      <LandingFade
        src="/images/landing/destino-lisboa.jpg"
        className="bottom-0 h-full"
        imageClassName="object-[center_30%]"
        mask="linear-gradient(to bottom, transparent 0%, #000 16%, #000 58%, transparent 100%)"
        wash="linear-gradient(to bottom, rgb(247,248,255) 0%, rgba(247,248,255,0.78) 18%, rgba(247,248,255,0.62) 48%, rgb(247,248,255) 100%)"
      />

      <div className="relative z-[3] mx-auto flex min-h-[72svh] w-full max-w-3xl flex-col items-center justify-center gap-5 px-4 py-24 text-center md:px-8">
        <p className="landing-cta-kicker text-sm font-semibold uppercase tracking-[0.14em] text-brand-primary">
          Para quem monta a viagem
        </p>
        <h2 className="landing-cta-title max-w-3xl font-display text-display-md font-semibold tracking-tight text-primary md:text-display-lg">
          Teste por 14 dias.
          <br />
          Sem cartão de crédito.
        </h2>
        <p className="landing-cta-copy max-w-lg text-md text-tertiary md:text-lg">
          Envie a proposta de verdade. No dia 15 você informa o cartão e continua no Plus, ou o acesso para.
        </p>
        <div className="landing-cta-action">
          <Button color="primary" size="xl" href={appUrl('/login?tab=signup')}>
            Começar 14 dias
          </Button>
        </div>
      </div>
    </section>
  );
}
