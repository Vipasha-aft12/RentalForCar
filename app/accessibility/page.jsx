import { getPageMeta } from '@/lib/seo';
import Accessibility from '@/components/Accessibility/Accessibility/Accessibility';
import OurCommitment from '@/components/Accessibility/OurCommitment/OurCommitment';
import OneCallNoCounterSurprises from '@/components/Accessibility/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/accessibility/');
}

export default function AccessibilityPage() {
  return (
    <main>
      <Accessibility />
      <OurCommitment />
      <OneCallNoCounterSurprises />
    </main>
  );
}
