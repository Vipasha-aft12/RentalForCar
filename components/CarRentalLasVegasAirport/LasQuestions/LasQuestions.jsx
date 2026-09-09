import './LasQuestions.css';
export default function LasQuestions() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">
            LAS questions
          </p>
          <h2>
            Straight answers
          </h2>
        </div>
        <div className="faq">
          <details open="">
            <summary>
              Where do I pick up a rental car at LAS?
            </summary>
            <div className="a">
              At the off-site McCarran Rent-A-Car Center, reached by a free shuttle from Terminal 1 and Terminal 3 — not at a counter in the terminal.
            </div>
          </details>
          <details>
            <summary>
              Can I use a debit card in Las Vegas?
            </summary>
            <div className="a">
              Often on economy cars, yes; larger classes and one-way rentals may need a credit card and a bigger hold. It is set branch by branch — we’ll confirm yours.
            </div>
          </details>
          <details>
            <summary>
              How long should I allow?
            </summary>
            <div className="a">
              20–35 minutes from baggage claim to the wheel, more late at night when the centre is busiest.
            </div>
          </details>
          <details>
            <summary>
              Are there tolls around Las Vegas?
            </summary>
            <div className="a">
              Very few. The bigger budget line is resort parking and valet — separate from the rental — which we’ll flag.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
