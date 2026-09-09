import './JsonLd.css';
export default function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: typeof data === 'string' ? data : JSON.stringify(data) }}
    />
  );
}
