import { getPageMeta } from '@/lib/seo';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import Section1 from '@/components/CarRentalAce/Section1/Section1';
import Hero from '@/components/CarRentalAce/Hero/Hero';
import WhatRentalforcarIsAndIsnT from '@/components/CarRentalAce/WhatRentalforcarIsAndIsnT/WhatRentalforcarIsAndIsnT';
import AboutAceAndRentalforcar from '@/components/CarRentalAce/AboutAceAndRentalforcar/AboutAceAndRentalforcar';
import OneCallNoCounterSurprises from '@/components/CarRentalAce/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental-ace/');
}

const jsonLd = {"@context": "https://schema.org", "@type": "WebPage", "name": "Renting a Ace-class car through RentalForCar", "description": "RentalForCar is an independent travel agency, not Ace, and is not affiliated with Ace. New rentals only.", "publisher": {"@type": "Organization", "name": "RentalForCar", "parentOrganization": {"@type": "Organization", "name": "Affluence Tour and Travels LLC"}}};

export default function CarRentalAcePage() {
  return (
    <main>
      <Section1 />
      <Hero />
      <WhatRentalforcarIsAndIsnT />
      <AboutAceAndRentalforcar />
      <OneCallNoCounterSurprises />
      <JsonLd data={jsonLd} />
    </main>
  );
}
