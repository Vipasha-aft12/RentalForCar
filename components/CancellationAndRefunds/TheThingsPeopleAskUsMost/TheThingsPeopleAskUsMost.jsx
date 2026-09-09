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
              How do I cancel or change?
            </summary>
            <div className="a">
              Call us — we’ll check availability and re-price it with you before confirming.
            </div>
          </details>
          <details>
            <summary>
              Will I get a refund?
            </summary>
            <div className="a">
              It depends on your rate. We’ll explain what’s refundable before you book, and again if you cancel.
            </div>
          </details>
          <details>
            <summary>
              What if my car isn’t available on the day?
            </summary>
            <div className="a">
              We’ll tell you and try to source an alternative first — you’ll see any new figure before accepting.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
