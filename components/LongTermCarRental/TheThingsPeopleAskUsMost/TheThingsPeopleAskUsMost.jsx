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
              How long can I rent for?
            </summary>
            <div className="a">
              Most branches handle 28+ day rentals; some cap a single agreement and renew it. We’ll confirm for your location.
            </div>
          </details>
          <details>
            <summary>
              Is there a mileage cap?
            </summary>
            <div className="a">
              Sometimes on long rentals. We’ll confirm the allowance and any per-mile charge before you book.
            </div>
          </details>
          <details>
            <summary>
              Is maintenance included?
            </summary>
            <div className="a">
              Routine maintenance is generally the rental company’s on long hires — terms vary, so we check first.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
