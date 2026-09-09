import { getPageMeta } from '@/lib/seo';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import Section1 from '@/components/CarRentalThrifty/Section1/Section1';
import Hero from '@/components/CarRentalThrifty/Hero/Hero';
import WhatRentalforcarIsAndIsnT from '@/components/CarRentalThrifty/WhatRentalforcarIsAndIsnT/WhatRentalforcarIsAndIsnT';
import AboutThriftyAndRentalforcar from '@/components/CarRentalThrifty/AboutThriftyAndRentalforcar/AboutThriftyAndRentalforcar';
import OneCallNoCounterSurprises from '@/components/CarRentalThrifty/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental-thrifty/');
}

const jsonLd = {"@context": "https://schema.org", "@type": "WebPage", "name": "Renting a Thrifty-class car through RentalForCar", "description": "RentalForCar is an independent travel agency, not Thrifty, and is not affiliated with Thrifty. New rentals only.", "publisher": {"@type": "Organization", "name": "RentalForCar", "parentOrganization": {"@type": "Organization", "name": "Affluence Tour and Travels LLC"}}};

export default function CarRentalThriftyPage() {
  return (
    <main>
      <Section1 />
      <Hero />
      <WhatRentalforcarIsAndIsnT />
      <AboutThriftyAndRentalforcar />
      <OneCallNoCounterSurprises />
      <JsonLd data={jsonLd} />
    </main>
  );
}
