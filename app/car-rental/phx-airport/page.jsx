import CarRentalShell from '@/components/carrental/CarRentalShell/CarRentalShell';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import PageHead from '@/components/CarRentalPhxAirport/PageHead/PageHead';
import BandTight from '@/components/CarRentalPhxAirport/BandTight/BandTight';
import BandTight2 from '@/components/CarRentalPhxAirport/BandTight2/BandTight2';
import Band from '@/components/CarRentalPhxAirport/Band/Band';
import BandTight3 from '@/components/CarRentalPhxAirport/BandTight3/BandTight3';
import Band2 from '@/components/CarRentalPhxAirport/Band2/Band2';
import BandTight4 from '@/components/CarRentalPhxAirport/BandTight4/BandTight4';
import BandTight5 from '@/components/CarRentalPhxAirport/BandTight5/BandTight5';
import Band3 from '@/components/CarRentalPhxAirport/Band3/Band3';
import Band4 from '@/components/CarRentalPhxAirport/Band4/Band4';

export const metadata = {
  title: "Car Rental at Phoenix Sky Harbor International Airport (PHX) | RentalForCar",
  description: "Renting a car at PHX: where the rental centre is, how long collection takes, which toll system you need and what is due at the counter. Book online or call.",
  alternates: { canonical: "https://www.rentalforcar.com/car-rental/phx-airport/" },
  openGraph: { title: "Car Rental at Phoenix Sky Harbor International Airport (PHX) | RentalForCar", description: "Renting a car at PHX: where the rental centre is, how long collection takes, which toll system you need and what is due at the counter. Book online or call.", url: "https://www.rentalforcar.com/car-rental/phx-airport/", siteName: 'RentalForCar', type: 'website' },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Organization", "@id": "https://www.rentalforcar.com/#org", "name": "RentalForCar", "url": "https://www.rentalforcar.com/", "description": "RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated by third-party rental companies.", "telephone": "+1-877-851-6014", "contactPoint": {"@type": "ContactPoint", "telephone": "+1-877-851-6014", "contactType": "reservations", "areaServed": "US", "availableLanguage": ["English"]}};

export default function CarRentalPhxAirportPage() {
  return (
    <CarRentalShell>
        <PageHead />
        <BandTight />
        <BandTight2 />
        <Band />
        <BandTight3 />
        <Band2 />
        <BandTight4 />
        <BandTight5 />
        <Band3 />
        <Band4 />
        <JsonLd data={jsonLd} />
    </CarRentalShell>
  );
}
