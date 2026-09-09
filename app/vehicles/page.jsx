import { getPageMeta } from '@/lib/seo';
import ChooseTheRide from '@/components/Vehicles/ChooseTheRide/ChooseTheRide';
import Economy from '@/components/Vehicles/Economy/Economy';
import HowToChooseWithoutOverthinkingIt from '@/components/Vehicles/HowToChooseWithoutOverthinkingIt/HowToChooseWithoutOverthinkingIt';
import OneCallNoCounterSurprises from '@/components/Vehicles/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/vehicles/');
}

export default function VehiclesPage() {
  return (
    <main>
      <ChooseTheRide />
      <Economy />
      <HowToChooseWithoutOverthinkingIt />
      <OneCallNoCounterSurprises />
    </main>
  );
}
