import './About.css';
export default function About() {
  return (
    <section className="hero">
      <div className="wrap" style={{maxWidth: '860px'}}>
        <p className="eyebrow">
          About
        </p>
        <h1>
          Independent, and glad about it
        </h1>
        <p className="sub" style={{maxWidth: '48ch'}}>
          RentalForCar is a US car-rental booking agent run by people who’d rather read the counter fine print than watch you get turned away at the desk.
        </p>
        <div className="cta">
          <a className="btn btn-lime" href="tel:+18778516014">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z"></path>
            </svg>
            +1 (877) 851-6014
          </a>
          <a className="btn btn-ghost" href="/how-we-work/">
            How we work
          </a>
        </div>
      </div>
    </section>
  );
}
