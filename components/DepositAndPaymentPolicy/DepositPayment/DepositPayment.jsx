import './DepositPayment.css';
export default function DepositPayment() {
  return (
    <section className="hero">
      <div className="wrap" style={{maxWidth: '860px'}}>
        <p className="eyebrow">
          Deposit & payment
        </p>
        <h1>
          What you pay, and when
        </h1>
        <p className="sub" style={{maxWidth: '48ch'}}>
          A plain-English summary of how money moves on a RentalForCar booking — what we collect, what the counter collects, and what comes back.
        </p>
        <div className="cta">
          <a className="btn btn-lime" href="tel:+18557619153">
            <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z"></path>
            </svg>
            +1 (855) 761-9153
          </a>
        </div>
      </div>
    </section>
  );
}
