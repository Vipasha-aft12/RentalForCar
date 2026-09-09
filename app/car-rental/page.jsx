import { getPageMeta } from '@/lib/seo';
import AirportPickUp from '@/components/CarRental/AirportPickUp/AirportPickUp';
import Guides from '@/components/CarRental/Guides/Guides';
import OneCallNoCounterSurprises from '@/components/CarRental/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

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
