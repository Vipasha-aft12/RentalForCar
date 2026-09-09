import { getPageMeta } from '@/lib/seo';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import Section1 from '@/components/CarRentalAvis/Section1/Section1';
import Hero from '@/components/CarRentalAvis/Hero/Hero';
import WhatRentalforcarIsAndIsnT from '@/components/CarRentalAvis/WhatRentalforcarIsAndIsnT/WhatRentalforcarIsAndIsnT';
import AboutAvisAndRentalforcar from '@/components/CarRentalAvis/AboutAvisAndRentalforcar/AboutAvisAndRentalforcar';
import OneCallNoCounterSurprises from '@/components/CarRentalAvis/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental-avis/');
}

const jsonLd = {"@context": "https://schema.org", "@type": "WebPage", "name": "Renting a Avis-class car through RentalForCar", "description": "RentalForCar is an independent travel agency, not Avis, and is not affiliated with Avis. New rentals only.", "publisher": {"@type": "Organization", "name": "RentalForCar", "parentOrganization": {"@type": "Organization", "name": "Affluence Tour and Travels LLC"}}};

export default function CarRentalAvisPage() {
  return (
    <main>
      <Section1 />
      <Hero />
      <WhatRentalforcarIsAndIsnT />
      <AboutAvisAndRentalforcar />
      <OneCallNoCounterSurprises />
      <JsonLd data={jsonLd} />
    </main>
  );
}
