import { getPageMeta } from '@/lib/seo';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import CarRentalAcrossTheUnitedStates from '@/components/Home/CarRentalAcrossTheUnitedStates/CarRentalAcrossTheUnitedStates';
import CompareByCompany from '@/components/Home/CompareByCompany/CompareByCompany';
import NoCounterSurprises from '@/components/Home/NoCounterSurprises/NoCounterSurprises';
import HowItWorks from '@/components/Home/HowItWorks/HowItWorks';
import ChooseTheRide from '@/components/Home/ChooseTheRide/ChooseTheRide';
import WhatYouPayAndWhen from '@/components/Home/WhatYouPayAndWhen/WhatYouPayAndWhen';
import AirportPickUp from '@/components/Home/AirportPickUp/AirportPickUp';
import TheThingsPeopleAskUsMost from '@/components/Home/TheThingsPeopleAskUsMost/TheThingsPeopleAskUsMost';
import OneCallNoCounterSurprises from '@/components/Home/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/');
}

const jsonLd = {"@context": "https://schema.org", "@type": "TravelAgency", "name": "RentalForCar", "url": "https://www.rentalforcar.com/", "telephone": "+18778516014", "parentOrganization": {"@type": "Organization", "name": "Affluence Hospitality LLC"}, "address": {"@type": "PostalAddress", "streetAddress": "1621 Central Ave", "addressLocality": "Cheyenne", "addressRegion": "WY", "postalCode": "82001", "addressCountry": "US"}, "description": "Independent car rental booking agent that confirms the card, deposit, age and document rules at your exact pick-up counter before you book, and quotes the all-in total."};

export default function HomePage() {
  return (
    <main>
      <CarRentalAcrossTheUnitedStates />
      <CompareByCompany />
      <NoCounterSurprises />
      <HowItWorks />
      <ChooseTheRide />
      <WhatYouPayAndWhen />
      <AirportPickUp />
      <TheThingsPeopleAskUsMost />
      <OneCallNoCounterSurprises />
      <JsonLd data={jsonLd} />
    </main>
  );
}
