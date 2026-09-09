import './WhatYouPayAndWhen.css';
export default function WhatYouPayAndWhen() {
  return (
    <section className="sec">
      <div className="wrap prose">
        <p className="eyebrow">
          What you pay, and when
        </p>
        <h2>
          The total is the total
        </h2>
        <p>
          Every quote we give includes the taxes and the rental company’s mandatory fees, plus our service fee shown as its own line. Nothing appears for the first time at the counter.
        </p>
        <div className="factrow">
          <div className="fact">
            <div className="k">
              At booking
            </div>
            <div className="v">
              Your all-in reservation total
            </div>
          </div>
          <div className="fact">
            <div className="k">
              At the counter
            </div>
            <div className="v">
              A refundable deposit hold
            </div>
          </div>
          <div className="fact">
            <div className="k">
              Never
            </div>
            <div className="v">
              Surprise fees we didn’t show you
            </div>
          </div>
        </div>
        <p className="muted">
          We can’t set or change rental rates — those come from the rental companies. What we can do is make sure the number you approve is the number that’s true at your branch.
        </p>
      </div>
    </section>
  );
}
