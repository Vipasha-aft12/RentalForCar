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
              Can someone else pay for my rental?
            </summary>
            <div className="a">
              The card usually has to be in the main driver’s name at pick-up. Tell us the situation and we’ll check the branch’s policy.
            </div>
          </details>
          <details>
            <summary>
              Do you need my documents to book?
            </summary>
            <div className="a">
              No — you present documents at the counter. We just make sure you know exactly what to bring so you’re not turned away.
            </div>
          </details>
          <details>
            <summary>
              What if I’m under 25?
            </summary>
            <div className="a">
              Most branches rent from 21 with a young-driver fee; some classes are off-limits. See our under-25 guide, or call.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
