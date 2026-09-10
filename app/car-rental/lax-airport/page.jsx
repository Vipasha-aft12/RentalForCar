import { getPageMeta } from '@/lib/seo';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import AirportCarRentalCalifornia from '@/components/CarRentalLaxAirport/AirportCarRentalCalifornia/AirportCarRentalCalifornia';
import GettingFromTheTerminalToTheCars from '@/components/CarRentalLaxAirport/GettingFromTheTerminalToTheCars/GettingFromTheTerminalToTheCars';
import LaxQuestions from '@/components/CarRentalLaxAirport/LaxQuestions/LaxQuestions';
import OneCallNoCounterSurprises from '@/components/CarRentalLaxAirport/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental/lax-airport/');
}

const jsonLd = {"@context": "https://schema.org", "@type": "Article", "headline": "Car rental at LAX (Los Angeles International)", "about": "Airport car rental pick-up guidance for LAX", "inLanguage": "en-US", "datePublished": "2026-09-08", "dateModified": "2026-09-08", "author": {"@type": "Organization", "name": "RentalForCar rentals desk"}, "publisher": {"@type": "Organization", "name": "RentalForCar", "parentOrganization": {"@type": "Organization", "name": "Affluence Hospitality LLC"}}, "mainEntityOfPage": "https://www.rentalforcar.com/car-rental/lax-airport/"};

export default function CarRentalLaxAirportPage() {
  return (
    <main>
      <AirportCarRentalCalifornia />
      <GettingFromTheTerminalToTheCars />
      <LaxQuestions />
      <OneCallNoCounterSurprises />
      <JsonLd data={jsonLd} />
    </main>
  );
}
