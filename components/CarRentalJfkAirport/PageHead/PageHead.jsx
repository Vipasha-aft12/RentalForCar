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
          JFK Airport
        </nav>
         <h1 className="h-1">
          Car rental at JFK Airport
        </h1>
         <p className="lede">
          Land, collect, drive. What to expect between the arrivals hall and the driver's seat at John F. Kennedy International.
        </p>
         <div style={{marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <a className="btn btn-primary" href="/book/" data-link="">
            Find a car at JFK
            <svg className="arrow" width="18" height="18" aria-hidden="true">
              <use href="#i-car" xlinkHref="#i-car"></use>
            </svg>
          </a>
          <a className="btn btn-ghost" href="/car-rental/new-york/" data-link="">
            Renting in the city instead
          </a>
        </div>
       </div>
     </section>
  );
}
