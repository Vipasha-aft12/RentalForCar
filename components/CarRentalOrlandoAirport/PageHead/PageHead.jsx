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
          Orlando Airport
        </nav>
         <h1 className="h-1">
          Car rental at Orlando Airport
        </h1>
         <p className="lede">
          MCO is one of the easiest large airports in America to collect a car at — most counters are inside the terminal, with the cars a level below.
        </p>
         <div style={{marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <a className="btn btn-primary" href="/book/" data-link="">
            Find a car at MCO
            <svg className="arrow" width="18" height="18" aria-hidden="true">
              <use href="#i-car" xlinkHref="#i-car"></use>
            </svg>
          </a>
          <a className="btn btn-ghost" href="/car-rental/orlando/" data-link="">
            Driving in Orlando
          </a>
        </div>
       </div>
     </section>
  );
}
