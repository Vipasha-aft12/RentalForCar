import './Locations.css';

const CITIES = [
  { slug: 'new-york', name: 'New York', blurb: 'Garage costs, bridge tolls and the outer-borough alternative.' },
  { slug: 'miami', name: 'Miami', blurb: 'SunPass, causeways and the run down to the Keys.' },
  { slug: 'orlando', name: 'Orlando', blurb: 'Theme park parking and getting I-4 right.' },
  { slug: 'los-angeles', name: 'Los Angeles', blurb: 'Freeways, street cleaning and the coastal drives.' },
  { slug: 'las-vegas', name: 'Las Vegas', blurb: 'Resort parking fees and desert day trips.' },
  { slug: 'chicago', name: 'Chicago', blurb: 'I-PASS, winter driving and the lakefront route.' },
];

const AIRPORTS = [
  ['jfk', 'JFK', 'New York'], ['lax', 'LAX', 'Los Angeles'], ['miami', 'MIA', 'Miami'],
  ['orlando', 'MCO', 'Orlando'], ['phl', 'PHL', 'Philadelphia'], ['lga', 'LGA', 'New York'],
  ['dfw', 'DFW', 'Dallas'], ['iah', 'IAH', 'Houston'], ['jax', 'JAX', 'Jacksonville'],
  ['phx', 'PHX', 'Phoenix'], ['atl', 'ATL', 'Atlanta'], ['sfo', 'SFO', 'San Francisco'],
  ['sat', 'SAT', 'San Antonio'], ['sea', 'SEA', 'Seattle'], ['ord', 'ORD', 'Chicago'],
  ['aus', 'AUS', 'Austin'], ['bos', 'BOS', 'Boston'], ['sjc', 'SJC', 'San Jose'],
];

function Skyline() {
  return (
    <svg className="loc-sky" viewBox="0 0 320 150" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
      <rect width="320" height="150" fill="#14181c" />
      <g fill="#1f262c">
        <rect x="18" y="70" width="34" height="80" /><rect x="60" y="48" width="30" height="102" />
        <rect x="98" y="88" width="26" height="62" /><rect x="132" y="34" width="34" height="116" />
        <rect x="174" y="76" width="28" height="74" /><rect x="210" y="58" width="32" height="92" />
        <rect x="250" y="86" width="26" height="64" /><rect x="284" y="66" width="26" height="84" />
      </g>
      <g fill="#C7F36B">
        <rect x="28" y="86" width="8" height="8" /><rect x="70" y="64" width="8" height="8" />
        <rect x="70" y="92" width="8" height="8" /><rect x="140" y="50" width="8" height="8" />
        <rect x="140" y="78" width="8" height="8" /><rect x="182" y="94" width="8" height="8" />
        <rect x="220" y="74" width="8" height="8" /><rect x="292" y="82" width="8" height="8" />
      </g>
      <rect x="0" y="146" width="320" height="4" fill="#2a3238" />
    </svg>
  );
}

export default function Locations() {
  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <nav className="crumbs" aria-label="Breadcrumb">
            <a href="/">Home</a> <span>/</span> <span>Locations</span>
          </nav>
          <h1 className="h-1">Where do you want to drive?</h1>
          <p className="loc-intro">
            City guides cover parking, tolls and local driving quirks. Airport guides tell you
            where the rental centre is and how long the shuttle takes.
          </p>
        </div>
      </section>

      <section className="loc-band">
        <div className="wrap">
          <h2 className="loc-h2">Cities</h2>
          <div className="loc-grid">
            {CITIES.map((c) => (
              <a key={c.slug} className="loc-card" href={`/car-rental/${c.slug}/`}>
                <Skyline />
                <span className="loc-card-body">
                  <span className="loc-card-name">{c.name}</span>
                  <span className="loc-card-blurb">{c.blurb}</span>
                </span>
              </a>
            ))}
          </div>

          <h2 className="loc-h2 loc-h2-airports">Airports</h2>
          <div className="loc-pills">
            {AIRPORTS.map(([slug, code, city]) => (
              <a key={slug} className="loc-pill" href={`/car-rental/${slug}-airport/`}>
                {code} — {city}
              </a>
            ))}
          </div>

          <p className="loc-note">
            Looking for somewhere not listed? Call{' '}
            <a href="tel:+18778516014">(877) 851-6014</a> — our partners cover far more locations
            than we publish guides for.
          </p>
        </div>
      </section>
    </>
  );
}
