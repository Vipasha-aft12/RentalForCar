import './Guides.css';
export default function Guides() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">
            Guides
          </p>
          <h2>
            Choose your airport
          </h2>
        </div>
        <div className="aps">
          <a className="ap" href="/car-rental/lax-airport/">
            <b>
              Los Angeles (LAX)
            </b>
            <span>
              Consolidated Rent-A-Car centre
            </span>
          </a>
          <a className="ap" href="/car-rental/las-vegas-airport/">
            <b>
              Las Vegas (LAS)
            </b>
            <span>
              the McCarran Rent-A-Car Center
            </span>
          </a>
          <a className="ap" href="/car-rental/miami-airport/">
            <b>
              Miami (MIA)
            </b>
            <span>
              the MIA Rental Car Center
            </span>
          </a>
          <a className="ap" href="/car-rental/orlando-airport/">
            <b>
              Orlando (MCO)
            </b>
            <span>
              on-airport
            </span>
          </a>
          <a className="ap" href="/car-rental/denver-airport/">
            <b>
              Denver (DEN)
            </b>
            <span>
              off-airport rental lots reached by shuttle
            </span>
          </a>
        </div>
        <p className="muted" style={{textAlign: 'center', marginTop: '20px'}}>
          More airports are being added. Flying somewhere not listed? Call and we’ll walk your specific pick-up.
        </p>
      </div>
    </section>
  );
}
