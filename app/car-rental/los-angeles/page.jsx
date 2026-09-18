import CarRentalShell from '@/components/carrental/CarRentalShell/CarRentalShell';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import PageHead from '@/components/CarRentalLosAngeles/PageHead/PageHead';
import BandTight from '@/components/CarRentalLosAngeles/BandTight/BandTight';
import Band from '@/components/CarRentalLosAngeles/Band/Band';

export const metadata = {
  title: "Car Rental in Los Angeles | RentalForCar",
  description: "Rent a car in Los Angeles. Freeway timing, street cleaning rules, parking in Santa Monica and Hollywood, and the coastal drives worth an extra day.",
  alternates: { canonical: "https://www.rentalforcar.com/car-rental/los-angeles/" },
  openGraph: { title: "Car Rental in Los Angeles | RentalForCar", description: "Rent a car in Los Angeles. Freeway timing, street cleaning rules, parking in Santa Monica and Hollywood, and the coastal drives worth an extra day.", url: "https://www.rentalforcar.com/car-rental/los-angeles/", siteName: 'RentalForCar', type: 'website' },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Organization", "@id": "https://www.rentalforcar.com/#org", "name": "RentalForCar", "url": "https://www.rentalforcar.com/", "description": "RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated by third-party rental companies.", "telephone": "+1-855-761-9153", "contactPoint": {"@type": "ContactPoint", "telephone": "+1-855-761-9153", "contactType": "reservations", "areaServed": "US", "availableLanguage": ["English"]}};

export default function CarRentalLosAngelesPage() {
  return (
    <CarRentalShell>
        <PageHead />
        <BandTight />
        <Band />
        <JsonLd data={jsonLd} />
    </CarRentalShell>
  );
}
