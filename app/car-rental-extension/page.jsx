import { getPageMeta } from '@/lib/seo';
import Extensions from '@/components/CarRentalExtension/Extensions/Extensions';
import CallBeforeTheReturnTime from '@/components/CarRentalExtension/CallBeforeTheReturnTime/CallBeforeTheReturnTime';
import TheThingsPeopleAskUsMost from '@/components/CarRentalExtension/TheThingsPeopleAskUsMost/TheThingsPeopleAskUsMost';
import OneCallNoCounterSurprises from '@/components/CarRentalExtension/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental-extension/');
}

export default function CarRentalExtensionPage() {
  return (
    <main>
      <Extensions />
      <CallBeforeTheReturnTime />
      <TheThingsPeopleAskUsMost />
      <OneCallNoCounterSurprises />
    </main>
  );
}
