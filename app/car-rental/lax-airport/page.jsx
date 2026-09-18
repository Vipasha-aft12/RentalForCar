import CarRentalShell from '@/components/carrental/CarRentalShell/CarRentalShell';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import PageHead from '@/components/CarRentalLaxAirport/PageHead/PageHead';
import BandTight from '@/components/CarRentalLaxAirport/BandTight/BandTight';

export const metadata = {
  title: "Car Rental at LAX Airport, Los Angeles | RentalForCar",
  description: "Rent a car at LAX. How to reach the rental facilities, timing your exit onto the 405, and whether Burbank or Long Beach is an easier collection.",
  alternates: { canonical: "https://www.rentalforcar.com/car-rental/lax-airport/" },
  openGraph: { title: "Car Rental at LAX Airport, Los Angeles | RentalForCar", description: "Rent a car at LAX. How to reach the rental facilities, timing your exit onto the 405, and whether Burbank or Long Beach is an easier collection.", url: "https://www.rentalforcar.com/car-rental/lax-airport/", siteName: 'RentalForCar', type: 'website' },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Organization", "@id": "https://www.rentalforcar.com/#org", "name": "RentalForCar", "url": "https://www.rentalforcar.com/", "description": "RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated by third-party rental companies.", "telephone": "+1-855-761-9153", "contactPoint": {"@type": "ContactPoint", "telephone": "+1-855-761-9153", "contactType": "reservations", "areaServed": "US", "availableLanguage": ["English"]}};

export default function CarRentalLaxAirportPage() {
  return (
    <CarRentalShell>
        <PageHead />
        <BandTight />
        <JsonLd data={jsonLd} />
    </CarRentalShell>
  );
}
