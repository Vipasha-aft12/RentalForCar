import { getPageMeta } from '@/lib/seo';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import Section1 from '@/components/CarRentalHertz/Section1/Section1';
import Hero from '@/components/CarRentalHertz/Hero/Hero';
import WhatRentalforcarIsAndIsnT from '@/components/CarRentalHertz/WhatRentalforcarIsAndIsnT/WhatRentalforcarIsAndIsnT';
import AboutHertzAndRentalforcar from '@/components/CarRentalHertz/AboutHertzAndRentalforcar/AboutHertzAndRentalforcar';
import OneCallNoCounterSurprises from '@/components/CarRentalHertz/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental-hertz/');
}

const jsonLd = {"@context": "https://schema.org", "@type": "WebPage", "name": "Renting a Hertz-class car through RentalForCar", "description": "RentalForCar is an independent travel agency, not Hertz, and is not affiliated with Hertz. New rentals only.", "publisher": {"@type": "Organization", "name": "RentalForCar", "parentOrganization": {"@type": "Organization", "name": "Affluence Tour and Travels LLC"}}};

export default function CarRentalHertzPage() {
  return (
    <main>
      <Section1 />
      <Hero />
      <WhatRentalforcarIsAndIsnT />
      <AboutHertzAndRentalforcar />
      <OneCallNoCounterSurprises />
      <JsonLd data={jsonLd} />
    </main>
  );
}
