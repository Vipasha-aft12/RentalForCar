import { getPageMeta } from '@/lib/seo';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import AirportCarRentalFlorida from '@/components/CarRentalOrlandoAirport/AirportCarRentalFlorida/AirportCarRentalFlorida';
import GettingToTheCars from '@/components/CarRentalOrlandoAirport/GettingToTheCars/GettingToTheCars';
import McoQuestions from '@/components/CarRentalOrlandoAirport/McoQuestions/McoQuestions';
import OneCallNoCounterSurprises from '@/components/CarRentalOrlandoAirport/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental/orlando-airport/');
}

const jsonLd = {"@context": "https://schema.org", "@type": "Article", "headline": "Car rental at MCO (Orlando International)", "inLanguage": "en-US", "datePublished": "2026-09-08", "dateModified": "2026-09-08", "author": {"@type": "Organization", "name": "RentalForCar rentals desk"}, "publisher": {"@type": "Organization", "name": "RentalForCar", "parentOrganization": {"@type": "Organization", "name": "Affluence Tour and Travels LLC"}}, "mainEntityOfPage": "https://www.rentalforcar.com/car-rental/orlando-airport/"};

export default function CarRentalOrlandoAirportPage() {
  return (
    <main>
      <AirportCarRentalFlorida />
      <GettingToTheCars />
      <McoQuestions />
      <OneCallNoCounterSurprises />
      <JsonLd data={jsonLd} />
    </main>
  );
}
