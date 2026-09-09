import { getPageMeta } from '@/lib/seo';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import AirportCarRentalFlorida from '@/components/CarRentalMiamiAirport/AirportCarRentalFlorida/AirportCarRentalFlorida';
import GettingFromTheTerminalToTheCars from '@/components/CarRentalMiamiAirport/GettingFromTheTerminalToTheCars/GettingFromTheTerminalToTheCars';
import MiaQuestions from '@/components/CarRentalMiamiAirport/MiaQuestions/MiaQuestions';
import OneCallNoCounterSurprises from '@/components/CarRentalMiamiAirport/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental/miami-airport/');
}

const jsonLd = {"@context": "https://schema.org", "@type": "Article", "headline": "Car rental at MIA (Miami International)", "inLanguage": "en-US", "datePublished": "2026-09-08", "dateModified": "2026-09-08", "author": {"@type": "Organization", "name": "RentalForCar rentals desk"}, "publisher": {"@type": "Organization", "name": "RentalForCar", "parentOrganization": {"@type": "Organization", "name": "Affluence Tour and Travels LLC"}}, "mainEntityOfPage": "https://www.rentalforcar.com/car-rental/miami-airport/"};

export default function CarRentalMiamiAirportPage() {
  return (
    <main>
      <AirportCarRentalFlorida />
      <GettingFromTheTerminalToTheCars />
      <MiaQuestions />
      <OneCallNoCounterSurprises />
      <JsonLd data={jsonLd} />
    </main>
  );
}
