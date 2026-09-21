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
          Chicago
        </nav>
         <h1 className="h-1">
          Car rental in Chicago
        </h1>
         <p className="lede">
          Downtown Chicago is well served by the L and by walking. The car earns its keep on the drives out — along the lake, into Wisconsin, and across to Michigan.
        </p>
         <div style={{marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <a className="btn btn-primary" href="tel:+18778516014" data-link="">
            Find a car in Chicago
            <svg className="arrow" width="18" height="18" aria-hidden="true">
              <use href="#i-car" xlinkHref="#i-car"></use>
            </svg>
          </a>
          <a className="btn btn-ghost" href="/cars/suv/" data-link="">
            SUVs for winter driving
          </a>
        </div>
       </div>
     </section>
  );
}
