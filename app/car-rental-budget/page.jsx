import { getPageMeta } from '@/lib/seo';
import JsonLd from '@/components/common/JsonLd/JsonLd';
import Section1 from '@/components/CarRentalBudget/Section1/Section1';
import Hero from '@/components/CarRentalBudget/Hero/Hero';
import WhatRentalforcarIsAndIsnT from '@/components/CarRentalBudget/WhatRentalforcarIsAndIsnT/WhatRentalforcarIsAndIsnT';
import AboutBudgetAndRentalforcar from '@/components/CarRentalBudget/AboutBudgetAndRentalforcar/AboutBudgetAndRentalforcar';
import OneCallNoCounterSurprises from '@/components/CarRentalBudget/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/car-rental-budget/');
}

const jsonLd = {"@context": "https://schema.org", "@type": "WebPage", "name": "Renting a Budget-class car through RentalForCar", "description": "RentalForCar is an independent travel agency, not Budget, and is not affiliated with Budget. New rentals only.", "publisher": {"@type": "Organization", "name": "RentalForCar", "parentOrganization": {"@type": "Organization", "name": "Affluence Hospitality LLC"}}};

export default function CarRentalBudgetPage() {
  return (
    <main>
      <Section1 />
      <Hero />
      <WhatRentalforcarIsAndIsnT />
      <AboutBudgetAndRentalforcar />
      <OneCallNoCounterSurprises />
      <JsonLd data={jsonLd} />
    </main>
  );
}
