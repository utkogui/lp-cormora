import Image from 'next/image';
import { LandingPin } from './landing-pin';

export const LANDING_DESTINATIONS = [
  {
    src: '/images/landing/destino-lisboa.jpg',
    place: 'Lisboa',
    region: 'Portugal',
  },
  {
    src: '/images/landing/destino-gramado.jpg',
    place: 'Gramado',
    region: 'Serra Gaúcha',
  },
  {
    src: '/images/landing/destino-liverpool.jpg',
    place: 'Liverpool',
    region: 'Inglaterra',
  },
] as const;

const DAYS = ['Dia 1', 'Dia 2', 'Dia 3'] as const;

export function LandingDestinations() {
  const featured = LANDING_DESTINATIONS[2];
  const others = LANDING_DESTINATIONS.slice(0, 2);

  return (
    <div className="grid gap-4 lg:grid-cols-5 lg:gap-5">
      <article className="relative isolate min-h-[28rem] overflow-hidden rounded-3xl shadow-xl ring-1 ring-white/10 md:min-h-[34rem] lg:col-span-3 lg:min-h-[36rem]">
        <Image
          src={featured.src}
          alt={`${featured.place}, ${featured.region}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 60vw, 100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/10" />
        <img
          alt=""
          aria-hidden
          className="pointer-events-none absolute top-0 z-[1] h-full w-auto max-w-none opacity-70"
          src="/images/itinerary/intersect-cover.svg"
          style={{
            left: '38%',
            height: '100%',
            transform: 'translateX(-18%)',
            filter: 'brightness(0) invert(1)',
          }}
        />
        <div className="absolute left-4 top-4 z-[2] flex items-center gap-1.5 rounded-full bg-black/35 px-3 py-1.5 backdrop-blur-sm">
          <span className="size-1.5 rounded-full bg-brand-solid" />
          <span className="size-1.5 rounded-full bg-[#864DF7]" />
          <span className="size-1.5 rounded-full bg-brand-400" />
          <span className="ml-1 text-xs font-medium text-white/80">Roteiro do cliente</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-[2] flex flex-col items-start gap-3 p-5 md:p-7">
          <LandingPin />
          <div>
            <p className="font-display text-display-xs font-semibold text-white">{featured.place}</p>
            <p className="text-sm text-white/75">{featured.region}</p>
          </div>
          <ul className="flex flex-wrap gap-2">
            {DAYS.map((day) => (
              <li
                key={day}
                className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25 backdrop-blur-sm"
              >
                {day}
              </li>
            ))}
          </ul>
        </div>
      </article>

      <ul className="grid gap-4 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1 lg:grid-rows-2">
        {others.map((item) => (
          <li key={item.place}>
            <article className="relative isolate min-h-[16rem] overflow-hidden rounded-3xl shadow-xl ring-1 ring-white/10 sm:min-h-[18rem] lg:h-full lg:min-h-0">
              <Image
                src={item.src}
                alt={`${item.place}, ${item.region}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <LandingPin size="sm" className="absolute left-4 top-4 shadow-md" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-lg font-semibold text-white">{item.place}</p>
                <p className="text-sm text-white/75">{item.region}</p>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </div>
  );
}
