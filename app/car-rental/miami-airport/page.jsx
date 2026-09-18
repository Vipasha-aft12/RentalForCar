import CarRentalShell from '@/components/carrental/CarRentalShell/CarRentalShell';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import PageHead from '@/components/CarRentalMiamiAirport/PageHead/PageHead';
import BandTight from '@/components/CarRentalMiamiAirport/BandTight/BandTight';

export const metadata = {
  title: "Car Rental at Miami Airport (MIA) | RentalForCar",
  description: "Rent a car at Miami International. The MIA Mover to the rental centre, toll enrolment, and whether Fort Lauderdale is the cheaper collection point.",
  alternates: { canonical: "https://www.rentalforcar.com/car-rental/miami-airport/" },
  openGraph: { title: "Car Rental at Miami Airport (MIA) | RentalForCar", description: "Rent a car at Miami International. The MIA Mover to the rental centre, toll enrolment, and whether Fort Lauderdale is the cheaper collection point.", url: "https://www.rentalforcar.com/car-rental/miami-airport/", siteName: 'RentalForCar', type: 'website' },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Organization", "@id": "https://www.rentalforcar.com/#org", "name": "RentalForCar", "url": "https://www.rentalforcar.com/", "description": "RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated by third-party rental companies.", "telephone": "+1-877-851-6014", "contactPoint": {"@type": "ContactPoint", "telephone": "+1-877-851-6014", "contactType": "reservations", "areaServed": "US", "availableLanguage": ["English"]}};

export default function CarRentalMiamiAirportPage() {
  return (
    <CarRentalShell>
        <PageHead />
        <BandTight />
        <JsonLd data={jsonLd} />
    </CarRentalShell>
  );
}
