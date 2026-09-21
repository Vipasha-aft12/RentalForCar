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
          Orlando
        </nav>
         <h1 className="h-1">
          Car rental in Orlando
        </h1>
         <p className="lede">
          Nearly every visitor here ends up driving. The resorts are far apart, the shuttle timetables are inconvenient, and a car pays for itself by day two.
        </p>
         <div style={{marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <a className="btn btn-primary" href="tel:+18778516014" data-link="">
            Find a car in Orlando
            <svg className="arrow" width="18" height="18" aria-hidden="true">
              <use href="#i-car" xlinkHref="#i-car"></use>
            </svg>
          </a>
          <a className="btn btn-ghost" href="/car-rental/orlando-airport/" data-link="">
            Renting at MCO instead
          </a>
        </div>
       </div>
     </section>
  );
}
