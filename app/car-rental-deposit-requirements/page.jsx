import { getPageMeta } from '@/lib/seo';
import Deposits from '@/components/CarRentalDepositRequirements/Deposits/Deposits';
import WhatAHoldActuallyIs from '@/components/CarRentalDepositRequirements/WhatAHoldActuallyIs/WhatAHoldActuallyIs';
import TheThingsPeopleAskUsMost from '@/components/CarRentalDepositRequirements/TheThingsPeopleAskUsMost/TheThingsPeopleAskUsMost';
import OneCallNoCounterSurprises from '@/components/CarRentalDepositRequirements/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental-deposit-requirements/');
}

export default function CarRentalDepositRequirementsPage() {
  return (
    <main>
      <Deposits />
      <WhatAHoldActuallyIs />
      <TheThingsPeopleAskUsMost />
      <OneCallNoCounterSurprises />
    </main>
  );
}
