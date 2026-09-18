import './Locations.css';

const CITIES = [
  { slug: 'new-york',    name: 'New York',    blurb: 'Garage costs, bridge tolls and the outer-borough alternative.', image: 'https://images.unsplash.com/photo-1496588152823-86ff7695e68f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIweW9ya3xlbnwwfHwwfHx8MA%3D%3D' },
  { slug: 'miami',       name: 'Miami',       blurb: 'SunPass, causeways and the run down to the Keys.',               image: 'https://plus.unsplash.com/premium_photo-1697730215093-baeae8060bfe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWlhbWl8ZW58MHx8MHx8fDA%3D' },
  { slug: 'orlando',     name: 'Orlando',     blurb: 'Theme park parking and getting I-4 right.',                      image: 'https://media.istockphoto.com/id/2271728724/photo/house-of-the-blackheads-at-golden-sunset-in-riga-with-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=dWTuFZQ8UAWc6ypmN1FXlzqT3ozXgUtHzY56CcatiLk=' },
  { slug: 'los-angeles', name: 'Los Angeles', blurb: 'Freeways, street cleaning and the coastal drives.',             image: 'https://images.unsplash.com/photo-1649080832349-06b15253c27c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bG9zJTIwYW5nbGVzfGVufDB8fDB8fHww' },
  { slug: 'las-vegas',   name: 'Las Vegas',   blurb: 'Resort parking fees and desert day trips.',                     image: 'https://images.unsplash.com/photo-1577334928618-2ff2bf09e827?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFzJTIwdmVnYXN8ZW58MHx8MHx8fDA%3D' },
  { slug: 'chicago',     name: 'Chicago',     blurb: 'I-PASS, winter driving and the lakefront route.',               image: 'https://images.unsplash.com/photo-1494522855154-9297ac14b55f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpY2Fnb3xlbnwwfHwwfHx8MA%3D%3D' },
];

const AIRPORTS = [
  ['jfk', 'JFK', 'New York'], ['lax', 'LAX', 'Los Angeles'], ['miami', 'MIA', 'Miami'],
  ['orlando', 'MCO', 'Orlando'], ['phl', 'PHL', 'Philadelphia'], ['lga', 'LGA', 'New York'],
  ['dfw', 'DFW', 'Dallas'], ['iah', 'IAH', 'Houston'], ['jax', 'JAX', 'Jacksonville'],
  ['phx', 'PHX', 'Phoenix'], ['atl', 'ATL', 'Atlanta'], ['sfo', 'SFO', 'San Francisco'],
  ['sat', 'SAT', 'San Antonio'], ['sea', 'SEA', 'Seattle'], ['ord', 'ORD', 'Chicago'],
  ['aus', 'AUS', 'Austin'], ['bos', 'BOS', 'Boston'], ['sjc', 'SJC', 'San Jose'],
];

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
          <h2 className="loc-h2">Cities</h2> <br />
          <div className="loc-grid mt-3 mb-3">
            {CITIES.map((c) => (
              <a key={c.slug} className="loc-card" href={`/car-rental/${c.slug}/`}>
                <img
                  className="loc-sky"
                  src={c.image}
                  alt={`${c.name} — RentalForCar`}
                  loading="lazy"
                  width="320"
                  height="190"
                />
                <span className="loc-card-body">
                  <span className="loc-card-name">{c.name}</span>
                  <span className="loc-card-blurb">{c.blurb}</span>
                </span>
              </a>
            ))}
          </div>
            <br />
          <h2 className="loc-h2 loc-h2-airports">Airports</h2> <br />
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