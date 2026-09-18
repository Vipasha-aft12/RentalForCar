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
          LAX Airport
        </nav>
         <h1 className="h-1">
          Car rental at LAX Airport
        </h1>
         <p className="lede">
          LAX is the busiest rental market in the country, and the collection process rewards a little planning.
        </p>
         <div style={{marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <a className="btn btn-primary" href="/book/" data-link="">
            Find a car at LAX
            <svg className="arrow" width="18" height="18" aria-hidden="true">
              <use href="#i-car" xlinkHref="#i-car"></use>
            </svg>
          </a>
          <a className="btn btn-ghost" href="/car-rental/los-angeles/" data-link="">
            Driving in Los Angeles
          </a>
        </div>
       </div>
     </section>
  );
}
