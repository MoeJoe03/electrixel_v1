import type {Metadata} from 'next';
import { Instrument_Serif } from 'next/font/google';
import './globals.css'; // Global styles
import SmoothScrolling from '@/components/SmoothScrolling';

const instrumentSerif = Instrument_Serif({ subsets: ['latin'], weight: '400', variable: '--font-instrument' });

export const metadata: Metadata = {
  title: 'Electrixel | Building Brands',
  description: 'Building brands that resonate, websites that convert.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${instrumentSerif.variable} dark antialiased`}>
      <body suppressHydrationWarning className="bg-[#151515] text-slate-200">
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
