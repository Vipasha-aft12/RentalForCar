import { getPageMeta } from '@/lib/seo';
import Contact from '@/components/Contact/Contact/Contact';
import HowToReachUs from '@/components/Contact/HowToReachUs/HowToReachUs';
import OneCallNoCounterSurprises from '@/components/Contact/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/contact/');
}

export default function ContactPage() {
  return (
    <main>
      <Contact />
      <HowToReachUs />
      <OneCallNoCounterSurprises />
    </main>
  );
}
