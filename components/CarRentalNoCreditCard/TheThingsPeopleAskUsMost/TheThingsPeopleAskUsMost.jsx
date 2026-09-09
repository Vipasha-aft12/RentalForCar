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
              Can I rent with just a debit card?
            </summary>
            <div className="a">
              Often yes, with extra ID and proof of return travel — but it’s branch-specific. We’ll confirm yours.
            </div>
          </details>
          <details>
            <summary>
              Are prepaid or gift cards accepted?
            </summary>
            <div className="a">
              Almost never for the rental itself. You’ll need a debit or credit card in the driver’s name.
            </div>
          </details>
          <details>
            <summary>
              What if my branch says no?
            </summary>
            <div className="a">
              Call us before you book — we can look for a nearby branch or class that does accept your card.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
