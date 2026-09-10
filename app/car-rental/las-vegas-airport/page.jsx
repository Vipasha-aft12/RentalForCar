import { getPageMeta } from '@/lib/seo';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import AirportCarRentalNevada from '@/components/CarRentalLasVegasAirport/AirportCarRentalNevada/AirportCarRentalNevada';
import GettingFromTheTerminalToTheCars from '@/components/CarRentalLasVegasAirport/GettingFromTheTerminalToTheCars/GettingFromTheTerminalToTheCars';
import LasQuestions from '@/components/CarRentalLasVegasAirport/LasQuestions/LasQuestions';
import OneCallNoCounterSurprises from '@/components/CarRentalLasVegasAirport/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental/las-vegas-airport/');
}

const jsonLd = {"@context": "https://schema.org", "@type": "Article", "headline": "Car rental at LAS (Harry Reid International)", "inLanguage": "en-US", "datePublished": "2026-09-08", "dateModified": "2026-09-08", "author": {"@type": "Organization", "name": "RentalForCar rentals desk"}, "publisher": {"@type": "Organization", "name": "RentalForCar", "parentOrganization": {"@type": "Organization", "name": "Affluence Hospitality LLC"}}, "mainEntityOfPage": "https://www.rentalforcar.com/car-rental/las-vegas-airport/"};

export default function CarRentalLasVegasAirportPage() {
  return (
    <main>
      <AirportCarRentalNevada />
      <GettingFromTheTerminalToTheCars />
      <LasQuestions />
      <OneCallNoCounterSurprises />
      <JsonLd data={jsonLd} />
    </main>
  );
}
