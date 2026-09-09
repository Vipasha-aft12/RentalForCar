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
              How do I extend my rental?
            </summary>
            <div className="a">
              Call before your return time. We’ll check availability and give you the new all-in total before confirming.
            </div>
          </details>
          <details>
            <summary>
              Will it cost more per day?
            </summary>
            <div className="a">
              Extra days re-price at the current rate, which may differ from your original. We’ll tell you first.
            </div>
          </details>
          <details>
            <summary>
              What if my car isn’t available?
            </summary>
            <div className="a">
              We’ll look for a swap or a nearby branch — but book the extension early to keep options open.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
