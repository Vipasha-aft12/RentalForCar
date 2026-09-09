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
              Do I need a special licence for a 15-seat van?
            </summary>
            <div className="a">
              Usually a standard licence is fine for personal use, but some branches add conditions. We’ll confirm before you book.
            </div>
          </details>
          <details>
            <summary>
              Is there a higher age limit on vans?
            </summary>
            <div className="a">
              Often, yes — large vans can carry a higher minimum age. Tell us your driver’s age and we’ll check.
            </div>
          </details>
          <details>
            <summary>
              Will 15 people plus luggage fit?
            </summary>
            <div className="a">
              Fifteen seats often means little luggage room with everyone aboard. We’ll help you size it honestly.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
