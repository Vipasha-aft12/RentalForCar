import './LaxQuestions.css';
export default function LaxQuestions() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">
            LAX questions
          </p>
          <h2>
            Straight answers
          </h2>
        </div>
        <div className="faq">
          <details open="">
            <summary>
              Where do I actually pick up a rental car at LAX?
            </summary>
            <div className="a">
              At the consolidated Rent-A-Car centre, off the terminals — not at counters inside your terminal. Reach it by the airport people-mover or the shuttle running on your travel date; check flyLAX signage in baggage claim, since LAX has been phasing the connection in.
            </div>
          </details>
          <details>
            <summary>
              Can I use a debit card at LAX?
            </summary>
            <div className="a">
              Some LAX branches accept debit on economy cars with extra ID or proof of return travel; others want a credit card for the deposit, especially on SUVs and vans. It is set branch by branch — tell us your booking and we’ll confirm before you fly.
            </div>
          </details>
          <details>
            <summary>
              How long should I allow to get the car?
            </summary>
            <div className="a">
              Plan 15–25 minutes from baggage claim to the wheel, more for a late-night or weekend arrival when the facility is busiest.
            </div>
          </details>
          <details>
            <summary>
              Will I pay tolls around LA?
            </summary>
            <div className="a">
              Many LA express lanes and bridges are cashless. Ask whether your rental includes an electronic toll transponder or bills a per-use admin fee — we’ll flag it for your car so it isn’t a surprise.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
