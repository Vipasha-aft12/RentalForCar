import CarRentalShell from '@/components/carrental/CarRentalShell/CarRentalShell';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import PageHead from '@/components/CarRentalMiami/PageHead/PageHead';
import BandTight from '@/components/CarRentalMiami/BandTight/BandTight';
import Band from '@/components/CarRentalMiami/Band/Band';

export const metadata = {
  title: "Car Rental in Miami | RentalForCar",
  description: "Rent a car in Miami. SunPass tolls explained, causeway routes to South Beach, parking on the beach and the drive down to the Florida Keys.",
  alternates: { canonical: "https://www.rentalforcar.com/car-rental/miami/" },
  openGraph: { title: "Car Rental in Miami | RentalForCar", description: "Rent a car in Miami. SunPass tolls explained, causeway routes to South Beach, parking on the beach and the drive down to the Florida Keys.", url: "https://www.rentalforcar.com/car-rental/miami/", siteName: 'RentalForCar', type: 'website' },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Organization", "@id": "https://www.rentalforcar.com/#org", "name": "RentalForCar", "url": "https://www.rentalforcar.com/", "description": "RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated by third-party rental companies.", "telephone": "+1-855-761-9153", "contactPoint": {"@type": "ContactPoint", "telephone": "+1-855-761-9153", "contactType": "reservations", "areaServed": "US", "availableLanguage": ["English"]}};

export default function CarRentalMiamiPage() {
  return (
    <CarRentalShell>
        <PageHead />
        <BandTight />
        <Band />
        <JsonLd data={jsonLd} />
    </CarRentalShell>
  );
}
