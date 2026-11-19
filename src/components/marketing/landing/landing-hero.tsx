'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/base/buttons/button';
import { appUrl } from '@/utils/app-url';
import { ItineraryPreview } from './landing-previews';

const HERO_WARM = 'rgb(255 221 198)';
const HERO_MASK = 'linear-gradient(to bottom, #000 0%, #000 58%, transparent 92%)';
const HERO_WASH = `linear-gradient(
  to bottom,
  rgba(48, 22, 12, 0.42) 0%,
  rgba(72, 30, 14, 0.28) 28%,
  rgba(255, 180, 120, 0.18) 56%,
  rgba(255, 221, 198, 0.82) 82%,
  ${HERO_WARM} 100%
)`;
const HERO_GLOW = `radial-gradient(
  ellipse 58% 48% at 70% 48%,
  rgba(255, 140, 70, 0.42) 0%,
  rgba(241, 93, 54, 0.18) 42%,
  transparent 72%
)`;

export function LandingHero() {
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const photo = photoRef.current;
    if (!photo) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const y = Math.min(window.scrollY, 520);
        photo.style.transform = `translate3d(0, ${y * 0.18}px, 0)`;
      });
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section className="relative -mt-16 overflow-hidden bg-[#FFDDC6] md:-mt-[72px]">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[980px] overflow-hidden">
        <div ref={photoRef} className="landing-hero-parallax absolute inset-x-0 -top-12 h-[108%] will-change-transform">
          <img
            src="/images/landing/destino-kyoto.jpg"
            alt=""
            className="landing-hero-drift size-full object-cover object-[center_72%] [filter:saturate(1.28)_contrast(1.12)_brightness(0.92)]"
            style={{
              WebkitMaskImage: HERO_MASK,
              maskImage: HERO_MASK,
            }}
          />
        </div>
        <div className="absolute inset-0" style={{ background: HERO_GLOW }} />
        <div className="absolute inset-0" style={{ background: HERO_WASH }} />
      </div>

      <div className="relative z-[2] mx-auto flex w-full max-w-3xl flex-col items-center px-4 pt-36 text-center md:px-8 md:pt-44">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-300">Para quem monta a viagem</p>
        <h1 className="mt-4 max-w-3xl font-display text-display-sm font-semibold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(48,22,12,0.45)] md:text-display-lg">
          Menos rotina, mais roteiros!
        </h1>
        <p className="mt-4 max-w-xl text-md text-white/85 drop-shadow-[0_1px_16px_rgba(48,22,12,0.4)] md:text-lg">
          A proposta sai do atendimento e o cliente abre o link. Quatorze dias para enviar de verdade, sem cartão.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button color="primary" size="xl" href={appUrl('/login?tab=signup')}>
            Começar 14 dias
          </Button>
          <Button
            color="secondary"
            size="xl"
            href="#plano"
            className="!border-white/35 !bg-white/15 !text-white hover:!bg-white/25"
          >
            Ver o plano
          </Button>
        </div>
      </div>

      <div
        className="relative z-[1] mx-auto mt-14 w-full max-w-5xl px-4 pb-4 md:mt-16 md:px-8"
        style={{
          WebkitMaskImage: 'linear-gradient(to bottom, #000 0%, #000 86%, transparent 100%)',
          maskImage: 'linear-gradient(to bottom, #000 0%, #000 86%, transparent 100%)',
        }}
      >
        <ItineraryPreview />
      </div>
    </section>
  );
}
