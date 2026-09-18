import CarRentalShell from '@/components/carrental/CarRentalShell/CarRentalShell';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import PageHead from '@/components/CarRentalChicago/PageHead/PageHead';
import BandTight from '@/components/CarRentalChicago/BandTight/BandTight';
import Band from '@/components/CarRentalChicago/Band/Band';

export const metadata = {
  title: "Car Rental in Chicago | RentalForCar",
  description: "Rent a car in Chicago. I-PASS tolls, winter driving and snow routes, downtown parking costs and the drives out along Lake Michigan.",
  alternates: { canonical: "https://www.rentalforcar.com/car-rental/chicago/" },
  openGraph: { title: "Car Rental in Chicago | RentalForCar", description: "Rent a car in Chicago. I-PASS tolls, winter driving and snow routes, downtown parking costs and the drives out along Lake Michigan.", url: "https://www.rentalforcar.com/car-rental/chicago/", siteName: 'RentalForCar', type: 'website' },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Organization", "@id": "https://www.rentalforcar.com/#org", "name": "RentalForCar", "url": "https://www.rentalforcar.com/", "description": "RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated by third-party rental companies.", "telephone": "+1-855-761-9153", "contactPoint": {"@type": "ContactPoint", "telephone": "+1-855-761-9153", "contactType": "reservations", "areaServed": "US", "availableLanguage": ["English"]}};

export default function CarRentalChicagoPage() {
  return (
    <CarRentalShell>
        <PageHead />
        <BandTight />
        <Band />
        <JsonLd data={jsonLd} />
    </CarRentalShell>
  );
}
