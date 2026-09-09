import './globals.css';
import { Sora, Inter, Space_Grotesk } from 'next/font/google';
import { SITE_URL } from '@/lib/seo';
import AnnounceBar from '@/components/common/AnnounceBar/AnnounceBar';
import Header from '@/components/common/Header/Header';
import Footer from '@/components/common/Footer/Footer';
import MobileCallBar from '@/components/common/MobileCallBar/MobileCallBar';

const sora = Sora({ subsets: ['latin'], weight: ['600','700'], variable: '--font-sora', display: 'swap' });
const inter = Inter({ subsets: ['latin'], weight: ['400','600','700'], variable: '--font-inter', display: 'swap' });
const space = Space_Grotesk({ subsets: ['latin'], weight: ['600'], variable: '--font-space', display: 'swap' });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: 'RentalForCar', template: '%s' },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} ${space.variable}`}>
      <body>
        <AnnounceBar />
        <Header />
        {children}
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
