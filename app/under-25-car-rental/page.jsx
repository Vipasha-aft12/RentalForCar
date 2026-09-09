import { getPageMeta } from '@/lib/seo';
import Under25Rental from '@/components/Under25CarRental/Under25Rental/Under25Rental';
import TheYoungDriverFee from '@/components/Under25CarRental/TheYoungDriverFee/TheYoungDriverFee';
import TheThingsPeopleAskUsMost from '@/components/Under25CarRental/TheThingsPeopleAskUsMost/TheThingsPeopleAskUsMost';
import OneCallNoCounterSurprises from '@/components/Under25CarRental/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/under-25-car-rental/');
}

export default function Under25CarRentalPage() {
  return (
    <main>
      <Under25Rental />
      <TheYoungDriverFee />
      <TheThingsPeopleAskUsMost />
      <OneCallNoCounterSurprises />
    </main>
  );
}
