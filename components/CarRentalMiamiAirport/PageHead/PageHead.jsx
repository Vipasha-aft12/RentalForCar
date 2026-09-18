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
          Miami Airport
        </nav>
         <h1 className="h-1">
          Car rental at Miami Airport
        </h1>
         <p className="lede">
          MIA has one of the better rental setups in the country — all companies under one roof, connected to the terminal by a short automated train.
        </p>
         <div style={{marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <a className="btn btn-primary" href="/book/" data-link="">
            Find a car at MIA
            <svg className="arrow" width="18" height="18" aria-hidden="true">
              <use href="#i-car" xlinkHref="#i-car"></use>
            </svg>
          </a>
          <a className="btn btn-ghost" href="/car-rental/miami/" data-link="">
            Driving in Miami
          </a>
        </div>
       </div>
     </section>
  );
}
