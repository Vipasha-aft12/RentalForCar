import CarRentalShell from '@/components/carrental/CarRentalShell/CarRentalShell';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import PageHead from '@/components/CarRentalSfoAirport/PageHead/PageHead';
import BandTight from '@/components/CarRentalSfoAirport/BandTight/BandTight';
import BandTight2 from '@/components/CarRentalSfoAirport/BandTight2/BandTight2';
import Band from '@/components/CarRentalSfoAirport/Band/Band';
import BandTight3 from '@/components/CarRentalSfoAirport/BandTight3/BandTight3';
import Band2 from '@/components/CarRentalSfoAirport/Band2/Band2';
import BandTight4 from '@/components/CarRentalSfoAirport/BandTight4/BandTight4';
import BandTight5 from '@/components/CarRentalSfoAirport/BandTight5/BandTight5';
import Band3 from '@/components/CarRentalSfoAirport/Band3/Band3';
import Band4 from '@/components/CarRentalSfoAirport/Band4/Band4';

export const metadata = {
  title: "Car Rental at San Francisco International Airport (SFO) | RentalForCar",
  description: "Renting a car at SFO: where the rental centre is, how long collection takes, which toll system you need and what is due at the counter. Book online or call.",
  alternates: { canonical: "https://www.rentalforcar.com/car-rental/sfo-airport/" },
  openGraph: { title: "Car Rental at San Francisco International Airport (SFO) | RentalForCar", description: "Renting a car at SFO: where the rental centre is, how long collection takes, which toll system you need and what is due at the counter. Book online or call.", url: "https://www.rentalforcar.com/car-rental/sfo-airport/", siteName: 'RentalForCar', type: 'website' },
};

const jsonLd = {"@context": "https://schema.org", "@type": "Organization", "@id": "https://www.rentalforcar.com/#org", "name": "RentalForCar", "url": "https://www.rentalforcar.com/", "description": "RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated by third-party rental companies.", "telephone": "+1-877-851-6014", "contactPoint": {"@type": "ContactPoint", "telephone": "+1-877-851-6014", "contactType": "reservations", "areaServed": "US", "availableLanguage": ["English"]}};

export default function CarRentalSfoAirportPage() {
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
