import type { Metadata, Viewport } from 'next';
import { Inter, Raleway } from 'next/font/google';
import { cx } from '@/utils/cx';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'Cormora — Sistema para agências de viagem',
  description: 'Orçamento e atendimento no mesmo sistema. 14 dias no Completo, sem cartão.',
  icons: {
    icon: [{ url: '/logos/logomark.svg', type: 'image/svg+xml' }],
    shortcut: '/logos/logomark.svg',
    apple: '/logos/logomark.svg',
  },
};

export const viewport: Viewport = {
  themeColor: '#f15d36',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className="light-mode" suppressHydrationWarning>
      <body className={cx(inter.variable, raleway.variable, 'bg-primary antialiased')}>{children}</body>
    </html>
  );
}
