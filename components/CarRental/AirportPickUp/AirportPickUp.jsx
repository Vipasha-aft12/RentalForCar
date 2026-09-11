import './AirportPickUp.css';
export default function AirportPickUp() {
  return (
    <section className="hero">
      <div className="wrap" style={{maxWidth: '860px'}}>
        <p className="eyebrow">
          Airport pick-up
        </p>
        <h1>
          Airport car rental, without the desk surprises
        </h1>
        <p className="sub" style={{maxWidth: '48ch'}}>
          Short, honest arrival guides for major US airports — where the cars actually are, how to reach them, and what each counter tends to ask for. Then a call to lock it in.
        </p>
        <div className="cta">
          <a className="btn btn-lime" href="tel:+18778516014">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z"></path>
            </svg>
            +1 (877) 851-6014
          </a>
          <a className="btn btn-ghost" href="/find-a-car/">
            Find a car
          </a>
        </div>
      </div>
    </section>
  );
}
