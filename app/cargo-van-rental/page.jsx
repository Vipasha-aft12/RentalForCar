import { getPageMeta } from '@/lib/seo';
import CargoVans from '@/components/CargoVanRental/CargoVans/CargoVans';
import WhatACargoVanGivesYou from '@/components/CargoVanRental/WhatACargoVanGivesYou/WhatACargoVanGivesYou';
import TheThingsPeopleAskUsMost from '@/components/CargoVanRental/TheThingsPeopleAskUsMost/TheThingsPeopleAskUsMost';
import OneCallNoCounterSurprises from '@/components/CargoVanRental/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/cargo-van-rental/');
}

export default function CargoVanRentalPage() {
  return (
    <main>
      <CargoVans />
      <WhatACargoVanGivesYou />
      <TheThingsPeopleAskUsMost />
      <OneCallNoCounterSurprises />
    </main>
  );
}
