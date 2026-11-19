import { CormoraLogo } from '@/components/foundations/logo/cormora-logo';
import { appUrl } from '@/utils/app-url';

export function LandingFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#170c2e] text-white">
      <div className="relative z-[1] mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10 md:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <CormoraLogo className="h-7 w-auto text-brand-300" />
          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
            <a className="text-white/75 hover:text-white" href="#plano">
              Plano
            </a>
            <a className="text-white/75 hover:text-white" href="#o-que-entra">
              O que entra
            </a>
            <a className="text-white/75 hover:text-white" href="#como-funciona">
              Como funciona
            </a>
            <a className="text-white/75 hover:text-white" href={appUrl('/login')}>
              Entrar
            </a>
          </nav>
        </div>
        <p className="text-sm text-white/60">© {new Date().getFullYear()} Cormora. Sistema para agências de viagem.</p>
      </div>
      <p
        aria-hidden
        className="pointer-events-none relative z-0 translate-y-[22%] select-none text-center font-display text-[20vw] font-semibold leading-[0.75] tracking-[-0.05em] text-white/10"
      >
        Cormora
      </p>
    </footer>
  );
}
