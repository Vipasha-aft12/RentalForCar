import { getPageMeta } from '@/lib/seo';
import Sitemap from '@/components/Sitemap/Sitemap/Sitemap';
import Section2 from '@/components/Sitemap/Section2/Section2';

export function generateMetadata() {
  return getPageMeta('/sitemap/');
}

export default function SitemapPage() {
  return (
    <main>
      <Sitemap />
      <Section2 />
    </main>
  );
}
