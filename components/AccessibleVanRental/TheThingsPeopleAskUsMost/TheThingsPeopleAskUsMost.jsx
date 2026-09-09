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
              Can I get a wheelchair-accessible van?
            </summary>
            <div className="a">
              Often, in larger cities and with notice. Tell us the location, dates and configuration and we’ll check what’s available.
            </div>
          </details>
          <details>
            <summary>
              Are hand controls available?
            </summary>
            <div className="a">
              At some branches, yes — usually by advance request. Let us know left- or right-hand fitting and we’ll confirm.
            </div>
          </details>
          <details>
            <summary>
              How far ahead should I book?
            </summary>
            <div className="a">
              As early as you can. Accessible stock is limited, so more notice gives a better match.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
