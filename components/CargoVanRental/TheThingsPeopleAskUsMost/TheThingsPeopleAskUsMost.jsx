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
              Do I need a special licence?
            </summary>
            <div className="a">
              Usually a standard licence is fine for a cargo van, but some branches add conditions. We’ll confirm yours.
            </div>
          </details>
          <details>
            <summary>
              Is the deposit higher than a car?
            </summary>
            <div className="a">
              Often, yes. We’ll tell you the hold for your branch and class.
            </div>
          </details>
          <details>
            <summary>
              Can I do a one-way move?
            </summary>
            <div className="a">
              Sometimes, for an extra fee and subject to availability. Tell us the route and we’ll check.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
