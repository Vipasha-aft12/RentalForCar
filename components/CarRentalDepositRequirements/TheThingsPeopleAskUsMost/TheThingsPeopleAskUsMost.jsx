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
              Is the deposit an extra cost?
            </summary>
            <div className="a">
              No — it’s a refundable hold, released after you return the car. It just isn’t spendable while it’s held.
            </div>
          </details>
          <details>
            <summary>
              How big is the hold?
            </summary>
            <div className="a">
              It depends on the class and branch, and can be larger on debit. We’ll give you the range for your pick-up.
            </div>
          </details>
          <details>
            <summary>
              When do I get it back?
            </summary>
            <div className="a">
              Usually a few business days after return — the timing is your bank’s, not the rental company’s.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
