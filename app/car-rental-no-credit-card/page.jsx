import { getPageMeta } from '@/lib/seo';
import NoCreditCard from '@/components/CarRentalNoCreditCard/NoCreditCard/NoCreditCard';
import ThePracticalAnswer from '@/components/CarRentalNoCreditCard/ThePracticalAnswer/ThePracticalAnswer';
import TheThingsPeopleAskUsMost from '@/components/CarRentalNoCreditCard/TheThingsPeopleAskUsMost/TheThingsPeopleAskUsMost';
import OneCallNoCounterSurprises from '@/components/CarRentalNoCreditCard/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental-no-credit-card/');
}

export default function CarRentalNoCreditCardPage() {
  return (
    <main>
      <NoCreditCard />
      <ThePracticalAnswer />
      <TheThingsPeopleAskUsMost />
      <OneCallNoCounterSurprises />
    </main>
  );
}
