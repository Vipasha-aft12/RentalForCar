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
              How much is the under-25 fee?
            </summary>
            <div className="a">
              It’s set by the rental company and varies by branch. We can compare counters for your dates to keep it down.
            </div>
          </details>
          <details>
            <summary>
              Can I rent an SUV or van under 25?
            </summary>
            <div className="a">
              Sometimes not — some classes are restricted for under-25 renters. We’ll confirm what your branch allows.
            </div>
          </details>
          <details>
            <summary>
              Can I rent under 21?
            </summary>
            <div className="a">
              Only at a few locations, often with exceptions. Tell us where and we’ll check.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
