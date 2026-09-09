import { getPageMeta } from '@/lib/seo';
import CancellationRefunds from '@/components/CancellationAndRefunds/CancellationRefunds/CancellationRefunds';
import IfYouBookedWithUs from '@/components/CancellationAndRefunds/IfYouBookedWithUs/IfYouBookedWithUs';
import TheThingsPeopleAskUsMost from '@/components/CancellationAndRefunds/TheThingsPeopleAskUsMost/TheThingsPeopleAskUsMost';
import OneCallNoCounterSurprises from '@/components/CancellationAndRefunds/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/cancellation-and-refunds/');
}

export default function CancellationAndRefundsPage() {
  return (
    <main>
      <CancellationRefunds />
      <IfYouBookedWithUs />
      <TheThingsPeopleAskUsMost />
      <OneCallNoCounterSurprises />
    </main>
  );
}
