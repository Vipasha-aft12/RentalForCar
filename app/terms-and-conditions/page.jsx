import { getPageMeta } from '@/lib/seo';
import TermsConditions from '@/components/TermsAndConditions/TermsConditions/TermsConditions';
import OurRole from '@/components/TermsAndConditions/OurRole/OurRole';

export function generateMetadata() {
  return getPageMeta('/terms-and-conditions/');
}

export default function TermsAndConditionsPage() {
  return (
    <main>
      <TermsConditions />
      <OurRole />
    </main>
  );
}
