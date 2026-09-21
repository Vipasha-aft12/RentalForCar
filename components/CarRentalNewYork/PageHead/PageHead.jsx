import './PageHead.css';
export default function PageHead() {
  return (
    <section className="page-head">
       <div className="wrap">
         <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/" data-link="">
            Home
          </a>
          <span>
            /
          </span>
          <a href="/locations/" data-link="">
            Locations
          </a>
          <span>
            /
          </span>
          New York
        </nav>
         <h1 className="h-1">
          Car rental in New York
        </h1>
         <p className="lede">
          A car is a liability in Manhattan and a genuine asset the moment you leave it. Here is how to time the rental so you pay for the second thing and not the first.
        </p>
         <div style={{marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <a className="btn btn-primary" href="tel:+18778516014" data-link="">
            Find a car in New York
            <svg className="arrow" width="18" height="18" aria-hidden="true">
              <use href="#i-car" xlinkHref="#i-car"></use>
            </svg>
          </a>
          <a className="btn btn-ghost" href="/car-rental/jfk-airport/" data-link="">
            Renting at JFK instead
          </a>
        </div>
       </div>
     </section>
  );
}
