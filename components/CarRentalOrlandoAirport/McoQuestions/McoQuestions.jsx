import './McoQuestions.css';
export default function McoQuestions() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">
            MCO questions
          </p>
          <h2>
            Straight answers
          </h2>
        </div>
        <div className="faq">
          <details open="">
            <summary>
              Where do I pick up a rental car at MCO?
            </summary>
            <div className="a">
              Right in the terminal — counters on the ground-transportation level, cars in the attached garages. No shuttle.
            </div>
          </details>
          <details>
            <summary>
              Can I use a debit card in Orlando?
            </summary>
            <div className="a">
              Often yes on smaller cars; larger SUVs and vans may need a credit-card hold. We’ll confirm your branch and the deposit range.
            </div>
          </details>
          <details>
            <summary>
              Will I pay tolls near the parks?
            </summary>
            <div className="a">
              Yes — the 417/429/408 are cashless. Ask whether your car includes a transponder or an admin fee per use; we’ll flag it.
            </div>
          </details>
          <details>
            <summary>
              Is MCO an easy pick-up?
            </summary>
            <div className="a">
              One of the easiest — everything is in the terminal garages, so allow just 10–20 minutes outside peak.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
