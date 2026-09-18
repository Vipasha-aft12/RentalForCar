import CarRentalShell from '@/components/carrental/CarRentalShell/CarRentalShell';
import Locations from '@/components/Locations/Locations/Locations';

export const metadata = {
  title: 'Car Rental Locations Across the USA | RentalForCar',
  description: 'Browse RentalForCar city and airport guides — parking, tolls, shuttle times and the rental-centre details for every location we cover across the USA.',
  alternates: { canonical: 'https://www.rentalforcar.com/locations/' },
  openGraph: { title: 'Car Rental Locations Across the USA | RentalForCar', description: 'City and airport car-rental guides across the USA.', url: 'https://www.rentalforcar.com/locations/', siteName: 'RentalForCar', type: 'website' },
};

export default function LocationsPage() {
  return (
    <CarRentalShell>
      <Locations />
    </CarRentalShell>
  );
}
