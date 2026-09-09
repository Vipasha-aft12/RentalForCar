import { getPageMeta } from '@/lib/seo';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import Section1 from '@/components/CarRentalSixt/Section1/Section1';
import Hero from '@/components/CarRentalSixt/Hero/Hero';
import WhatRentalforcarIsAndIsnT from '@/components/CarRentalSixt/WhatRentalforcarIsAndIsnT/WhatRentalforcarIsAndIsnT';
import AboutSixtAndRentalforcar from '@/components/CarRentalSixt/AboutSixtAndRentalforcar/AboutSixtAndRentalforcar';
import OneCallNoCounterSurprises from '@/components/CarRentalSixt/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental-sixt/');
}

const jsonLd = {"@context": "https://schema.org", "@type": "WebPage", "name": "Renting a Sixt-class car through RentalForCar", "description": "RentalForCar is an independent travel agency, not Sixt, and is not affiliated with Sixt. New rentals only.", "publisher": {"@type": "Organization", "name": "RentalForCar", "parentOrganization": {"@type": "Organization", "name": "Affluence Tour and Travels LLC"}}};

export default function CarRentalSixtPage() {
  return (
    <main>
      <Section1 />
      <Hero />
      <WhatRentalforcarIsAndIsnT />
      <AboutSixtAndRentalforcar />
      <OneCallNoCounterSurprises />
      <JsonLd data={jsonLd} />
    </main>
  );
}
