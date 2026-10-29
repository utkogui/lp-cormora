import { Button } from '@/components/base/buttons/button';
import { CormoraLogo } from '@/components/foundations/logo/cormora-logo';
import { appUrl } from '@/utils/app-url';

export function LandingFooter() {
  return (
    <footer className="border-t border-brand-200 bg-brand-25">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <CormoraLogo className="h-7 w-auto text-brand-secondary" />
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Button color="link-gray" size="md" href="#planos">
              Planos
            </Button>
            <Button color="link-gray" size="md" href="#como-funciona">
              Como funciona
            </Button>
            <Button color="link-gray" size="md" href={appUrl('/login')}>
              Entrar
            </Button>
          </nav>
        </div>
        <p className="text-sm text-tertiary">© {new Date().getFullYear()} Cormora. Sistema para agências de viagem.</p>
      </div>
    </footer>
  );
}
