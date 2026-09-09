import { getPageMeta } from '@/lib/seo';
import About from '@/components/About/About/About';
import WhoWeAre from '@/components/About/WhoWeAre/WhoWeAre';
import OneCallNoCounterSurprises from '@/components/About/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/about/');
}

export default function AboutPage() {
  return (
    <main>
      <About />
      <WhoWeAre />
      <OneCallNoCounterSurprises />
    </main>
  );
}
