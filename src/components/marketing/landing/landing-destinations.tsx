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

export function LandingDestinations() {
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {LANDING_DESTINATIONS.map((item) => (
        <li key={item.place} className="overflow-hidden rounded-2xl bg-primary shadow-lg ring-1 ring-black/5">
          <div className="relative aspect-[4/3]">
            <Image
              src={item.src}
              alt={`${item.place}, ${item.region}`}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 33vw, 100vw"
            />
            <LandingPin size="sm" className="absolute left-3 top-3 shadow-md" />
          </div>
          <p className="flex items-center gap-2 px-4 py-3 text-sm">
            <span className="font-semibold text-primary">{item.place}</span>
            <span className="text-tertiary">· {item.region}</span>
          </p>
        </li>
      ))}
    </ul>
  );
}
