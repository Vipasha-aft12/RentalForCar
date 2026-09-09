import { getPageMeta } from '@/lib/seo';
import Privacy from '@/components/PrivacyPolicy/Privacy/Privacy';
import WhatWeCollect from '@/components/PrivacyPolicy/WhatWeCollect/WhatWeCollect';

export function generateMetadata() {
  return getPageMeta('/privacy-policy/');
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Privacy />
      <WhatWeCollect />
    </main>
  );
}
