import CarRentalShell from '@/components/carrental/CarRentalShell/CarRentalShell';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import PageHead from '@/components/CarRentalOrlando/PageHead/PageHead';
import BandTight from '@/components/CarRentalOrlando/BandTight/BandTight';
import Band from '@/components/CarRentalOrlando/Band/Band';

export const metadata = {
  title: "Car Rental in Orlando | RentalForCar",
  description: "Rent a car in Orlando. Theme park parking charges, driving I-4, toll roads around the airport and choosing a car with room for the strollers.",
  alternates: { canonical: "https://www.rentalforcar.com/car-rental/orlando/" },
  openGraph: { title: "Car Rental in Orlando | RentalForCar", description: "Rent a car in Orlando. Theme park parking charges, driving I-4, toll roads around the airport and choosing a car with room for the strollers.", url: "https://www.rentalforcar.com/car-rental/orlando/", siteName: 'RentalForCar', type: 'website' },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Organization", "@id": "https://www.rentalforcar.com/#org", "name": "RentalForCar", "url": "https://www.rentalforcar.com/", "description": "RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated by third-party rental companies.", "telephone": "+1-877-851-6014", "contactPoint": {"@type": "ContactPoint", "telephone": "+1-877-851-6014", "contactType": "reservations", "areaServed": "US", "availableLanguage": ["English"]}};

export default function CarRentalOrlandoPage() {
  return (
    <CarRentalShell>
        <PageHead />
        <BandTight />
        <Band />
        <JsonLd data={jsonLd} />
    </CarRentalShell>
  );
}
