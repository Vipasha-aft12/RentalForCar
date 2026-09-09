import './DenQuestions.css';
export default function DenQuestions() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">
            DEN questions
          </p>
          <h2>
            Straight answers
          </h2>
        </div>
        <div className="faq">
          <details open="">
            <summary>
              Where do I pick up a rental car at DEN?
            </summary>
            <div className="a">
              At off-airport lots reached by shuttle from Level 5, Island 4 — not in the terminal. Allow extra time; DEN is far out.
            </div>
          </details>
          <details>
            <summary>
              Do I need a special car for winter?
            </summary>
            <div className="a">
              Often wise. Colorado applies traction laws on mountain routes like I-70 — snow tyres or chains can be required. We’ll help size the car for the season.
            </div>
          </details>
          <details>
            <summary>
              Is there a toll road from the airport?
            </summary>
            <div className="a">
              E-470 around the metro is cashless. Ask whether your rental includes a transponder or bills per use; we’ll flag it.
            </div>
          </details>
          <details>
            <summary>
              Can I use a debit card in Denver?
            </summary>
            <div className="a">
              It varies by branch. Tell us your booking and we’ll confirm the card rule and deposit before you fly.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
