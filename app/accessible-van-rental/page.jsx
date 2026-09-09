import { getPageMeta } from '@/lib/seo';
import AccessibleVans from '@/components/AccessibleVanRental/AccessibleVans/AccessibleVans';
import WhatSAvailable from '@/components/AccessibleVanRental/WhatSAvailable/WhatSAvailable';
import TheThingsPeopleAskUsMost from '@/components/AccessibleVanRental/TheThingsPeopleAskUsMost/TheThingsPeopleAskUsMost';
import OneCallNoCounterSurprises from '@/components/AccessibleVanRental/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/accessible-van-rental/');
}

export default function AccessibleVanRentalPage() {
  return (
    <main>
      <AccessibleVans />
      <WhatSAvailable />
      <TheThingsPeopleAskUsMost />
      <OneCallNoCounterSurprises />
    </main>
  );
}
