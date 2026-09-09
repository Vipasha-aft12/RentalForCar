import { getPageMeta } from '@/lib/seo';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import AirportCarRentalColorado from '@/components/CarRentalDenverAirport/AirportCarRentalColorado/AirportCarRentalColorado';
import GettingFromTheTerminalToTheCars from '@/components/CarRentalDenverAirport/GettingFromTheTerminalToTheCars/GettingFromTheTerminalToTheCars';
import DenQuestions from '@/components/CarRentalDenverAirport/DenQuestions/DenQuestions';
import OneCallNoCounterSurprises from '@/components/CarRentalDenverAirport/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental/denver-airport/');
}

const jsonLd = {"@context": "https://schema.org", "@type": "Article", "headline": "Car rental at DEN (Denver International)", "inLanguage": "en-US", "datePublished": "2026-09-08", "dateModified": "2026-09-08", "author": {"@type": "Organization", "name": "RentalForCar rentals desk"}, "publisher": {"@type": "Organization", "name": "RentalForCar", "parentOrganization": {"@type": "Organization", "name": "Affluence Tour and Travels LLC"}}, "mainEntityOfPage": "https://www.rentalforcar.com/car-rental/denver-airport/"};

export default function CarRentalDenverAirportPage() {
  return (
    <main>
      <AirportCarRentalColorado />
      <GettingFromTheTerminalToTheCars />
      <DenQuestions />
      <OneCallNoCounterSurprises />
      <JsonLd data={jsonLd} />
    </main>
  );
}
