import { getPageMeta } from '@/lib/seo';
import AirportPickUp from '@/components/carrental/AirportPickUp/AirportPickUp';
import Guides from '@/components/carrental/Guides/Guides';
import OneCallNoCounterSurprises from '@/components/carrental/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental/');
}

export default function CarRentalPage() {
  return (
    <main>
      <AirportPickUp />
      <Guides />
      <OneCallNoCounterSurprises />
    </main>
  );
}
