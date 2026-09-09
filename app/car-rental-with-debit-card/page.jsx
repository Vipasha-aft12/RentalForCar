import { getPageMeta } from '@/lib/seo';
import DebitCardRentals from '@/components/CarRentalWithDebitCard/DebitCardRentals/DebitCardRentals';
import HowDebitWorksAtTheCounter from '@/components/CarRentalWithDebitCard/HowDebitWorksAtTheCounter/HowDebitWorksAtTheCounter';
import TheThingsPeopleAskUsMost from '@/components/CarRentalWithDebitCard/TheThingsPeopleAskUsMost/TheThingsPeopleAskUsMost';
import OneCallNoCounterSurprises from '@/components/CarRentalWithDebitCard/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental-with-debit-card/');
}

export default function CarRentalWithDebitCardPage() {
  return (
    <main>
      <DebitCardRentals />
      <HowDebitWorksAtTheCounter />
      <TheThingsPeopleAskUsMost />
      <OneCallNoCounterSurprises />
    </main>
  );
}
