import { getPageMeta } from '@/lib/seo';
import PassengerVans from '@/components/PassengerVanRental/PassengerVans/PassengerVans';
import ChoosingTheSize from '@/components/PassengerVanRental/ChoosingTheSize/ChoosingTheSize';
import TheThingsPeopleAskUsMost from '@/components/PassengerVanRental/TheThingsPeopleAskUsMost/TheThingsPeopleAskUsMost';
import OneCallNoCounterSurprises from '@/components/PassengerVanRental/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/passenger-van-rental/');
}

export default function PassengerVanRentalPage() {
  return (
    <main>
      <PassengerVans />
      <ChoosingTheSize />
      <TheThingsPeopleAskUsMost />
      <OneCallNoCounterSurprises />
    </main>
  );
}
