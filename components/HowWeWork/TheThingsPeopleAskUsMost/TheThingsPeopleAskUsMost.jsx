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
              Is the price different from booking direct?
            </summary>
            <div className="a">
              No — same rates, booked online or by phone. The difference is we confirm the counter rules first.
            </div>
          </details>
          <details>
            <summary>
              Where does my payment go?
            </summary>
            <div className="a">
              Anything collected at booking is applied toward your rental; the balance and any deposit are handled at the counter.
            </div>
          </details>
          <details>
            <summary>
              Who provides the car?
            </summary>
            <div className="a">
              Established rental companies at each location. We’re the independent agent that arranges it.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
