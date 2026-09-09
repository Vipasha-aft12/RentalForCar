import { getPageMeta } from '@/lib/seo';
import RentalRequirements from '@/components/RentalRequirements/RentalRequirements/RentalRequirements';
import TheThreeEssentials from '@/components/RentalRequirements/TheThreeEssentials/TheThreeEssentials';
import TheThingsPeopleAskUsMost from '@/components/RentalRequirements/TheThingsPeopleAskUsMost/TheThingsPeopleAskUsMost';
import OneCallNoCounterSurprises from '@/components/RentalRequirements/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/rental-requirements/');
}

export default function RentalRequirementsPage() {
  return (
    <main>
      <RentalRequirements />
      <TheThreeEssentials />
      <TheThingsPeopleAskUsMost />
      <OneCallNoCounterSurprises />
    </main>
  );
}
