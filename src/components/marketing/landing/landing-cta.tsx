'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/base/buttons/button';
import { appUrl } from '@/utils/app-url';
import { cx } from '@/utils/cx';
import { LandingArt } from './landing-art';
import { LANDING_DESTINATIONS } from './landing-destinations';
import { LandingPin } from './landing-pin';

const POLAROIDS = [
  {
    src: '/images/landing/destino-lisboa.jpg',
    place: 'Lisboa',
    region: 'Portugal',
    show: 'hidden md:block',
    className:
      'left-[3%] top-[10%] w-40 rotate-[-9deg] md:left-[4%] md:w-44 lg:left-[5%] lg:w-48 2xl:left-[6%] 2xl:w-52',
  },
  {
    src: '/images/landing/destino-gramado.jpg',
    place: 'Gramado',
    region: 'Serra Gaúcha',
    show: 'hidden md:block',
    className:
      'right-[3%] top-[12%] w-36 rotate-[8deg] md:right-[4%] md:w-40 lg:right-[5%] lg:w-44 2xl:right-[6%] 2xl:w-48',
  },
  {
    src: '/images/landing/destino-liverpool.jpg',
    place: 'Liverpool',
    region: 'Inglaterra',
    show: 'hidden md:block',
    className:
      'bottom-0 left-[5%] w-36 rotate-[5deg] md:left-[7%] md:w-40 lg:left-[6%] lg:w-44 2xl:left-[7%]',
  },
  {
    src: '/images/landing/destino-rio.jpg',
    place: 'Rio',
    region: 'Brasil',
    show: 'hidden lg:block',
    className: 'bottom-0 right-[5%] w-40 rotate-[-6deg] lg:right-[6%] lg:w-44 2xl:right-[7%] 2xl:w-48',
  },
  {
    src: '/images/landing/destino-kyoto.jpg',
    place: 'Kyoto',
    region: 'Japão',
    show: 'hidden lg:block',
    className: 'left-[2%] top-[42%] w-36 rotate-[-5deg] lg:w-40 2xl:left-[3%] 2xl:top-[40%] 2xl:w-44',
  },
  {
    src: '/images/landing/destino-paris.jpg',
    place: 'Paris',
    region: 'França',
    show: 'hidden xl:block',
    className: 'right-[2%] top-[40%] w-36 rotate-[6deg] xl:w-40 2xl:right-[3%] 2xl:w-44',
  },
  {
    src: '/images/landing/destino-santorini.jpg',
    place: 'Santorini',
    region: 'Grécia',
    show: 'hidden xl:block',
    className: 'left-[14%] top-[4%] w-36 rotate-[4deg] xl:w-40 2xl:left-[16%] 2xl:top-[5%]',
  },
  {
    src: '/images/landing/destino-bariloche.jpg',
    place: 'Bariloche',
    region: 'Argentina',
    show: 'hidden 2xl:block',
    className: 'right-[14%] top-[5%] w-40 rotate-[-4deg] 2xl:right-[16%] 2xl:w-44',
  },
] as const;

const PINS = [
  { pos: 'left-[22%] top-[12%]', show: 'hidden md:flex' },
  { pos: 'right-[20%] top-[10%]', show: 'hidden md:flex' },
  { pos: 'left-[8%] top-[46%]', show: 'hidden lg:flex' },
  { pos: 'right-[10%] top-[48%]', show: 'hidden lg:flex' },
  { pos: 'right-[18%] bottom-0', show: 'hidden md:flex' },
  { pos: 'left-[22%] bottom-[8%]', show: 'hidden xl:flex' },
  { pos: 'right-[24%] top-[38%]', show: 'hidden 2xl:flex' },
] as const;

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
      className="landing-cta relative isolate min-h-[88svh] overflow-hidden"
    >
      <LandingArt className="inset-x-0 bottom-0 top-auto h-[130%] object-cover object-bottom" />
      <div className="absolute inset-0 bg-[#3b1578]/40" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2]"
        style={{
          background:
            'radial-gradient(ellipse 58% 62% at 50% 48%, rgba(32, 12, 78, 0.88) 0%, rgba(32, 12, 78, 0.5) 42%, rgba(32, 12, 78, 0) 72%)',
        }}
      />

      {POLAROIDS.map((card, i) => (
        <div
          key={card.place}
          data-i={i}
          className={cx('landing-cta-polaroid pointer-events-none absolute z-[2]', card.show, card.className)}
          style={{ animationDelay: `${0.12 + i * 0.08}s` }}
        >
          <div className="landing-cta-float">
            <article className="overflow-hidden rounded-2xl bg-white/15 shadow-2xl ring-1 ring-white/40 backdrop-blur-sm">
              <div className="relative aspect-[4/3]">
                <Image src={card.src} alt="" fill className="object-cover" sizes="220px" />
                <LandingPin size="sm" className="absolute left-2.5 top-2.5 shadow-md" />
              </div>
              <p className="px-3 py-2 text-xs font-semibold text-white">
                {card.place}
                <span className="font-normal text-white/75"> · {card.region}</span>
              </p>
            </article>
          </div>
        </div>
      ))}

      {PINS.map((pin, i) => (
        <span
          key={pin.pos}
          data-i={i}
          className={cx('landing-cta-pin absolute z-[2]', pin.show, pin.pos)}
          style={{ animationDelay: `${0.18 + i * 0.1}s` }}
        >
          <LandingPin size={i % 2 === 0 ? 'md' : 'sm'} className="shadow-lg" />
        </span>
      ))}

      <div className="relative z-[3] mx-auto flex min-h-[88svh] w-full max-w-4xl flex-col items-center justify-center gap-5 px-4 py-24 text-center md:px-8">
        <p className="landing-cta-kicker text-sm font-semibold uppercase tracking-[0.14em] text-brand-secondary">
          Trial de 14 dias
        </p>
        <h2 className="landing-cta-title max-w-3xl font-display text-display-md font-bold tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)] md:text-display-lg">
          Use o Completo por 14 dias.
          <br />
          Depois decida.
        </h2>
        <p className="landing-cta-copy max-w-lg text-md font-medium text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.4)] md:text-lg">
          Sem cartão no começo. A agência vê o ciclo inteiro antes de pagar.
        </p>
        <div className="landing-cta-action">
          <Button color="primary" size="xl" href={appUrl('/login?tab=signup')}>
            Começar agora
          </Button>
        </div>
        <ul className="landing-cta-places mt-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          {LANDING_DESTINATIONS.map((item) => (
            <li key={item.place} className="flex items-center gap-2">
              <LandingPin size="sm" />
              <span className="text-sm font-semibold text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.45)]">
                {item.place}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
