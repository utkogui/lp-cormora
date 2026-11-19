import { Button } from '@/components/base/buttons/button';
import { CormoraLogo } from '@/components/foundations/logo/cormora-logo';
import { appUrl } from '@/utils/app-url';

export function LandingHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-brand-300/50 bg-[#FFE7D2]/82 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-4 md:h-[72px] md:px-8">
        <a href="/" aria-label="Cormora">
          <CormoraLogo className="h-7 w-auto text-brand-secondary md:h-8" />
        </a>
        <nav className="flex items-center gap-1 sm:gap-3">
          <Button color="link-gray" size="md" href="#plano" className="hidden sm:inline-flex">
            Plano
          </Button>
          <Button color="link-gray" size="md" href="#o-que-entra" className="hidden md:inline-flex">
            O que entra
          </Button>
          <Button color="link-gray" size="md" href="#como-funciona" className="hidden sm:inline-flex">
            Como funciona
          </Button>
          <Button color="primary" size="md" href={appUrl('/login')}>
            Entrar
          </Button>
        </nav>
      </div>
    </header>
  );
}
