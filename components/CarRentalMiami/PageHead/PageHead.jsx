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
          Miami
        </nav>
         <h1 className="h-1">
          Car rental in Miami
        </h1>
         <p className="lede">
          Miami is a driving city. Public transit covers a fraction of where visitors actually go, and the good day trips all start with a car.
        </p>
         <div style={{marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <a className="btn btn-primary" href="/book/" data-link="">
            Find a car in Miami
            <svg className="arrow" width="18" height="18" aria-hidden="true">
              <use href="#i-car" xlinkHref="#i-car"></use>
            </svg>
          </a>
          <a className="btn btn-ghost" href="/car-rental/miami-airport/" data-link="">
            Renting at MIA instead
          </a>
        </div>
       </div>
     </section>
  );
}
