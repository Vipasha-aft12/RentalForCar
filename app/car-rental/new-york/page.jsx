import CarRentalShell from '@/components/carrental/CarRentalShell/CarRentalShell';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import PageHead from '@/components/CarRentalNewYork/PageHead/PageHead';
import BandTight from '@/components/CarRentalNewYork/BandTight/BandTight';
import Band from '@/components/CarRentalNewYork/Band/Band';

export const metadata = {
  title: "Car Rental in New York City | RentalForCar",
  description: "Rent a car in New York. Where to collect, what Manhattan parking really costs, how the cashless bridge and tunnel tolls work, and when to skip the car entirely.",
  alternates: { canonical: "https://www.rentalforcar.com/car-rental/new-york/" },
  openGraph: { title: "Car Rental in New York City | RentalForCar", description: "Rent a car in New York. Where to collect, what Manhattan parking really costs, how the cashless bridge and tunnel tolls work, and when to skip the car entirely.", url: "https://www.rentalforcar.com/car-rental/new-york/", siteName: 'RentalForCar', type: 'website' },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Organization", "@id": "https://www.rentalforcar.com/#org", "name": "RentalForCar", "url": "https://www.rentalforcar.com/", "description": "RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated by third-party rental companies.", "telephone": "+1-855-761-9153", "contactPoint": {"@type": "ContactPoint", "telephone": "+1-855-761-9153", "contactType": "reservations", "areaServed": "US", "availableLanguage": ["English"]}};

export default function CarRentalNewYorkPage() {
  return (
    <CarRentalShell>
        <PageHead />
        <BandTight />
        <Band />
        <JsonLd data={jsonLd} />
    </CarRentalShell>
  );
}
