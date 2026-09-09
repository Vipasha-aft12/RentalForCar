import { getPageMeta } from '@/lib/seo';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import Section1 from '@/components/CarRentalDollar/Section1/Section1';
import Hero from '@/components/CarRentalDollar/Hero/Hero';
import WhatRentalforcarIsAndIsnT from '@/components/CarRentalDollar/WhatRentalforcarIsAndIsnT/WhatRentalforcarIsAndIsnT';
import AboutDollarAndRentalforcar from '@/components/CarRentalDollar/AboutDollarAndRentalforcar/AboutDollarAndRentalforcar';
import OneCallNoCounterSurprises from '@/components/CarRentalDollar/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental-dollar/');
}

const jsonLd = {"@context": "https://schema.org", "@type": "WebPage", "name": "Renting a Dollar-class car through RentalForCar", "description": "RentalForCar is an independent travel agency, not Dollar, and is not affiliated with Dollar. New rentals only.", "publisher": {"@type": "Organization", "name": "RentalForCar", "parentOrganization": {"@type": "Organization", "name": "Affluence Tour and Travels LLC"}}};

export default function CarRentalDollarPage() {
  return (
    <main>
      <Section1 />
      <Hero />
      <WhatRentalforcarIsAndIsnT />
      <AboutDollarAndRentalforcar />
      <OneCallNoCounterSurprises />
      <JsonLd data={jsonLd} />
    </main>
  );
}
