import './MiaQuestions.css';
export default function MiaQuestions() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">
            MIA questions
          </p>
          <h2>
            Straight answers
          </h2>
        </div>
        <div className="faq">
          <details open="">
            <summary>
              Where do I pick up a rental car at MIA?
            </summary>
            <div className="a">
              At the MIA Rental Car Center, reached by the free MIA Mover automated train from the terminal — a few minutes, no shuttle bus.
            </div>
          </details>
          <details>
            <summary>
              Can I use a debit card in Miami?
            </summary>
            <div className="a">
              Many branches accept it, but expect to show a second ID or proof of return travel, especially for out-of-state and international renters. We’ll confirm your branch.
            </div>
          </details>
          <details>
            <summary>
              Will I pay tolls?
            </summary>
            <div className="a">
              Almost certainly — Miami’s expressways are cashless. Ask whether your rental includes a transponder or an admin fee per use; we’ll flag it.
            </div>
          </details>
          <details>
            <summary>
              Do I need an International Driving Permit?
            </summary>
            <div className="a">
              Some international licences do at Miami counters. Tell us the licence country and we’ll check before you fly.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
