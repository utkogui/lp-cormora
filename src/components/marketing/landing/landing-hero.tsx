import { Button } from '@/components/base/buttons/button';
import { appUrl } from '@/utils/app-url';
import { LANDING_DESTINATIONS } from './landing-destinations';
import { LandingPin } from './landing-pin';

export function LandingHero() {
  return (
    <section className="relative isolate flex min-h-[calc(100svh-4rem)] flex-col overflow-hidden md:min-h-[calc(100svh-4.5rem)]">
      <div aria-hidden className="absolute inset-0">
        <img
          src="/images/landing/destino-lisboa.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />
        <img
          alt=""
          className="pointer-events-none absolute top-0 z-[1] hidden h-full w-auto max-w-none md:block"
          src="/images/itinerary/intersect-cover.svg"
          style={{
            left: '50%',
            height: '100%',
            transform: 'translateX(-30%)',
            filter: 'brightness(0) invert(1)',
            opacity: 0.7,
          }}
        />
        <img
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 z-[1] hidden w-auto max-w-none md:block"
          src="/images/itinerary/intersect-cover-right.svg"
          style={{
            height: '66.67%',
            clipPath: 'inset(0 0 0 34.4%)',
            opacity: 0.7,
          }}
        />
      </div>

      <div className="relative z-[2] mt-auto w-full px-4 md:px-8">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-6 rounded-t-[2rem] bg-[#252b37cc] px-5 py-8 text-center backdrop-blur-[2px] md:px-10 md:py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/70">Para agências de viagem</p>
          <h1 className="max-w-3xl font-display text-display-md font-semibold tracking-tight text-white md:text-display-lg">
            Menos rotina, mais roteiros!
          </h1>
          <p className="max-w-2xl text-md text-white/80 md:text-lg">
            Orçamento e atendimento no mesmo sistema. Quatorze dias no Completo, sem cartão, para ver o ciclo inteiro.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
            {LANDING_DESTINATIONS.map((item) => (
              <li key={item.place} className="flex items-center gap-2">
                <LandingPin size="sm" />
                <span className="text-sm font-medium text-[#E9EAEB]">
                  {item.place}
                  <span className="hidden text-[#A4A7AE] sm:inline"> · {item.region}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button color="primary" size="xl" href={appUrl('/login?tab=signup')}>
              Começar 14 dias
            </Button>
            <Button color="secondary" size="xl" href="#planos">
              Ver planos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
