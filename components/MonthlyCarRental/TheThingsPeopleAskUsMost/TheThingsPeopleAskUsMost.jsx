import './TheThingsPeopleAskUsMost.css';
export default function TheThingsPeopleAskUsMost() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">
            The things people ask us most
          </p>
          <h2>
            Straight answers
          </h2>
        </div>
        <div className="faq">
          <details open="">
            <summary>
              Is monthly cheaper than weekly?
            </summary>
            <div className="a">
              Usually per day, yes. We can compare weekly and monthly for your dates.
            </div>
          </details>
          <details>
            <summary>
              Is there a mileage limit?
            </summary>
            <div className="a">
              Often. We’ll confirm the allowance and any per-mile charge before booking.
            </div>
          </details>
          <details>
            <summary>
              Can I extend a monthly rental?
            </summary>
            <div className="a">
              Usually — ask before the return date and we’ll re-check availability and the new all-in total.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
