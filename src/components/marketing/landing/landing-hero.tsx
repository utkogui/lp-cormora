import { Button } from '@/components/base/buttons/button';
import { appUrl } from '@/utils/app-url';
import { LandingFade } from './landing-fade';
import { ItineraryPreview } from './landing-previews';

const HERO_MASK = 'linear-gradient(to bottom, #000 0%, #000 34%, transparent 78%)';
const HERO_WASH =
  'linear-gradient(to bottom, rgba(247,248,255,0.2) 0%, rgba(247,248,255,0.55) 22%, rgba(247,248,255,0.88) 46%, rgb(247,248,255) 68%)';

export function LandingHero() {
  return (
    <section className="relative -mt-16 md:-mt-[72px]">
      <LandingFade
        src="/images/landing/destino-lisboa.jpg"
        className="h-[920px]"
        imageClassName="object-[center_22%]"
        mask={HERO_MASK}
        wash={HERO_WASH}
      />

      <div className="relative z-[1] mx-auto flex w-full max-w-3xl flex-col items-center px-4 pt-36 text-center md:px-8 md:pt-44">
        <p className="text-xs font-semibold uppercase tracking-[0.08em] text-brand-primary">Para quem monta a viagem</p>
        <h1 className="mt-4 max-w-3xl font-display text-display-sm font-semibold tracking-tight text-primary md:text-display-lg">
          Menos rotina, mais roteiros!
        </h1>
        <p className="mt-4 max-w-xl text-md text-tertiary md:text-lg">
          A proposta sai do atendimento e o cliente abre o link. Quatorze dias para enviar de verdade, sem cartão.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button color="primary" size="xl" href={appUrl('/login?tab=signup')}>
            Começar 14 dias
          </Button>
          <Button color="secondary" size="xl" href="#plano">
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
