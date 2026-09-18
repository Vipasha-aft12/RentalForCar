import CarRentalShell from '@/components/carrental/CarRentalShell/CarRentalShell';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import PageHead from '@/components/CarRentalJfkAirport/PageHead/PageHead';
import BandTight from '@/components/CarRentalJfkAirport/BandTight/BandTight';

export const metadata = {
  title: "Car Rental at JFK Airport, New York | RentalForCar",
  description: "Rent a car at JFK. Where the rental facilities are, how to reach them from each terminal, toll costs leaving the airport and whether a city branch is cheaper.",
  alternates: { canonical: "https://www.rentalforcar.com/car-rental/jfk-airport/" },
  openGraph: { title: "Car Rental at JFK Airport, New York | RentalForCar", description: "Rent a car at JFK. Where the rental facilities are, how to reach them from each terminal, toll costs leaving the airport and whether a city branch is cheaper.", url: "https://www.rentalforcar.com/car-rental/jfk-airport/", siteName: 'RentalForCar', type: 'website' },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Organization", "@id": "https://www.rentalforcar.com/#org", "name": "RentalForCar", "url": "https://www.rentalforcar.com/", "description": "RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated by third-party rental companies.", "telephone": "+1-855-761-9153", "contactPoint": {"@type": "ContactPoint", "telephone": "+1-855-761-9153", "contactType": "reservations", "areaServed": "US", "availableLanguage": ["English"]}};

export default function CarRentalJfkAirportPage() {
  return (
    <CarRentalShell>
        <PageHead />
        <BandTight />
        <JsonLd data={jsonLd} />
    </CarRentalShell>
  );
}
