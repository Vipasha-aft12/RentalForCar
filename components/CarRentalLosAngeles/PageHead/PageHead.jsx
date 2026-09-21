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
          Los Angeles
        </nav>
         <h1 className="h-1">
          Car rental in Los Angeles
        </h1>
         <p className="lede">
          LA is not one city but a dozen loosely connected ones, and the car is how you connect them. Renting here is less a choice than a prerequisite.
        </p>
         <div style={{marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
          <a className="btn btn-primary" href="tel:+18778516014" data-link="">
            Find a car in Los Angeles
            <svg className="arrow" width="18" height="18" aria-hidden="true">
              <use href="#i-car" xlinkHref="#i-car"></use>
            </svg>
          </a>
          <a className="btn btn-ghost" href="/car-rental/lax-airport/" data-link="">
            Renting at LAX instead
          </a>
        </div>
       </div>
     </section>
  );
}
