import { getPageMeta } from '@/lib/seo';
import HowWeWork from '@/components/HowWeWork/HowWeWork/HowWeWork';
import TellUsTheTrip from '@/components/HowWeWork/TellUsTheTrip/TellUsTheTrip';
import WhatWeDo from '@/components/HowWeWork/WhatWeDo/WhatWeDo';
import TheThingsPeopleAskUsMost from '@/components/HowWeWork/TheThingsPeopleAskUsMost/TheThingsPeopleAskUsMost';
import OneCallNoCounterSurprises from '@/components/HowWeWork/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/how-we-work/');
}

export default function HowWeWorkPage() {
  return (
    <main>
      <HowWeWork />
      <TellUsTheTrip />
      <WhatWeDo />
      <TheThingsPeopleAskUsMost />
      <OneCallNoCounterSurprises />
    </main>
  );
}
