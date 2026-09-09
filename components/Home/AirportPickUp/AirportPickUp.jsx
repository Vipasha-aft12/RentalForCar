import './AirportPickUp.css';
export default function AirportPickUp() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">
            Airport pick-up
          </p>
          <h2>
            Popular locations
          </h2>
        </div>
        <div className="aps">
          <a className="ap" href="/car-rental/lax-airport/">
            <b>
              Los Angeles (LAX)
            </b>
            <span>
              Consolidated rental centre — people-mover connection.
            </span>
          </a>
          <a className="ap" href="/car-rental/las-vegas-airport/">
            <b>
              Las Vegas (LAS)
            </b>
            <span>
              Off-site Rent-A-Car Center shuttle.
            </span>
          </a>
          <a className="ap" href="/car-rental/miami-airport/">
            <b>
              Miami (MIA)
            </b>
            <span>
              MIA Rental Car Center by the MIA Mover.
            </span>
          </a>
          <a className="ap" href="/car-rental/orlando-airport/">
            <b>
              Orlando (MCO)
            </b>
            <span>
              On-airport counters, Terminals A & B.
            </span>
          </a>
          <a className="ap" href="/car-rental/denver-airport/">
            <b>
              Denver (DEN)
            </b>
            <span>
              Off-site lots, Level-5 shuttle.
            </span>
          </a>
          <a className="ap" href="/car-rental/">
            <b>
              All airports →
            </b>
            <span>
              Every RentalForCar arrival guide.
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
