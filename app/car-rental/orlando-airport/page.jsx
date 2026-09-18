import CarRentalShell from '@/components/carrental/CarRentalShell/CarRentalShell';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import PageHead from '@/components/CarRentalOrlandoAirport/PageHead/PageHead';
import BandTight from '@/components/CarRentalOrlandoAirport/BandTight/BandTight';

export const metadata = {
  title: "Car Rental at Orlando Airport (MCO) | RentalForCar",
  description: "Rent a car at Orlando International. On-site rental counters, terminal layout, the toll road route to the theme parks and what size car families should book.",
  alternates: { canonical: "https://www.rentalforcar.com/car-rental/orlando-airport/" },
  openGraph: { title: "Car Rental at Orlando Airport (MCO) | RentalForCar", description: "Rent a car at Orlando International. On-site rental counters, terminal layout, the toll road route to the theme parks and what size car families should book.", url: "https://www.rentalforcar.com/car-rental/orlando-airport/", siteName: 'RentalForCar', type: 'website' },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Organization", "@id": "https://www.rentalforcar.com/#org", "name": "RentalForCar", "url": "https://www.rentalforcar.com/", "description": "RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated by third-party rental companies.", "telephone": "+1-877-851-6014", "contactPoint": {"@type": "ContactPoint", "telephone": "+1-877-851-6014", "contactType": "reservations", "areaServed": "US", "availableLanguage": ["English"]}};

export default function CarRentalOrlandoAirportPage() {
  return (
    <CarRentalShell>
        <PageHead />
        <BandTight />
        <JsonLd data={jsonLd} />
    </CarRentalShell>
  );
}
