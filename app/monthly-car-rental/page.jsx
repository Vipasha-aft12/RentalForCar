import { getPageMeta } from '@/lib/seo';
import MonthlyRental from '@/components/MonthlyCarRental/MonthlyRental/MonthlyRental';
import WhatMonthlyGivesYou from '@/components/MonthlyCarRental/WhatMonthlyGivesYou/WhatMonthlyGivesYou';
import TheThingsPeopleAskUsMost from '@/components/MonthlyCarRental/TheThingsPeopleAskUsMost/TheThingsPeopleAskUsMost';
import OneCallNoCounterSurprises from '@/components/MonthlyCarRental/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/monthly-car-rental/');
}

export default function MonthlyCarRentalPage() {
  return (
    <main>
      <MonthlyRental />
      <WhatMonthlyGivesYou />
      <TheThingsPeopleAskUsMost />
      <OneCallNoCounterSurprises />
    </main>
  );
}
