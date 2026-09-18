import CarRentalShell from '@/components/carrental/CarRentalShell/CarRentalShell';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import PageHead from '@/components/CarRentalLasVegas/PageHead/PageHead';
import BandTight from '@/components/CarRentalLasVegas/BandTight/BandTight';
import Band from '@/components/CarRentalLasVegas/Band/Band';

export const metadata = {
  title: "Car Rental in Las Vegas | RentalForCar",
  description: "Rent a car in Las Vegas. Resort parking fees, the off-Strip rental centre, driving in desert heat, and day trips to Zion, the Grand Canyon and Death Valley.",
  alternates: { canonical: "https://www.rentalforcar.com/car-rental/las-vegas/" },
  openGraph: { title: "Car Rental in Las Vegas | RentalForCar", description: "Rent a car in Las Vegas. Resort parking fees, the off-Strip rental centre, driving in desert heat, and day trips to Zion, the Grand Canyon and Death Valley.", url: "https://www.rentalforcar.com/car-rental/las-vegas/", siteName: 'RentalForCar', type: 'website' },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Organization", "@id": "https://www.rentalforcar.com/#org", "name": "RentalForCar", "url": "https://www.rentalforcar.com/", "description": "RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated by third-party rental companies.", "telephone": "+1-877-851-6014", "contactPoint": {"@type": "ContactPoint", "telephone": "+1-877-851-6014", "contactType": "reservations", "areaServed": "US", "availableLanguage": ["English"]}};

export default function CarRentalLasVegasPage() {
  return (
    <CarRentalShell>
        <PageHead />
        <BandTight />
        <Band />
        <JsonLd data={jsonLd} />
    </CarRentalShell>
  );
}
