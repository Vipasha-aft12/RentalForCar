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
          <a className="btn btn-primary" href="tel:+18778516014" data-link="">
                <svg className="arrow" width="18" height="18" aria-hidden="true">
                  <use href="#i-phone" xlinkHref="#i-phone"></use>
                </svg>
                Call +1 (877) 851-6014
              </a>
          <a className="btn btn-ghost" href="#search" data-link="">
                Find a car
              </a>
        </div>
       </div>
     </section>
  );
}
