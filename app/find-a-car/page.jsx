import { getPageMeta } from '@/lib/seo';
import FindACar from '@/components/FindACar/FindACar/FindACar';
import HowItWorks from '@/components/FindACar/HowItWorks/HowItWorks';
import OneCallNoCounterSurprises from '@/components/FindACar/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/find-a-car/');
}

export default function FindACarPage() {
  return (
    <main>
      <FindACar />
      <HowItWorks />
      <OneCallNoCounterSurprises />
    </main>
  );
}
