import { getPageMeta } from '@/lib/seo';
import LongTermRental from '@/components/LongTermCarRental/LongTermRental/LongTermRental';
import WhyLongTerm from '@/components/LongTermCarRental/WhyLongTerm/WhyLongTerm';
import TheThingsPeopleAskUsMost from '@/components/LongTermCarRental/TheThingsPeopleAskUsMost/TheThingsPeopleAskUsMost';
import OneCallNoCounterSurprises from '@/components/LongTermCarRental/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/long-term-car-rental/');
}

export default function LongTermCarRentalPage() {
  return (
    <main>
      <LongTermRental />
      <WhyLongTerm />
      <TheThingsPeopleAskUsMost />
      <OneCallNoCounterSurprises />
    </main>
  );
}
