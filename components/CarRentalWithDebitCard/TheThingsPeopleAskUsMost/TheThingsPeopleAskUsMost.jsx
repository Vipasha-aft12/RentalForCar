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
              Can I always rent with a debit card?
            </summary>
            <div className="a">
              No — it depends on the branch and the car class. We’ll confirm your specific pick-up before you book.
            </div>
          </details>
          <details>
            <summary>
              Will the hold be bigger on debit?
            </summary>
            <div className="a">
              Sometimes. Some branches place a larger refundable hold for debit; we’ll tell you the range for yours.
            </div>
          </details>
          <details>
            <summary>
              Do I need a return ticket?
            </summary>
            <div className="a">
              Many airport branches ask debit renters for proof of return or onward travel. We’ll flag it if yours does.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
