import './HowItWorks.css';
export default function HowItWorks() {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">
            How it works
          </p>
          <h2>
            From search to steering wheel, in four steps
          </h2>
        </div>
        <div className="steps">
          <div className="step">
            <div className="n">
              01
            </div>
            <h3>
              Tell us the trip
            </h3>
            <p>
              City or airport, dates, and the kind of car.
            </p>
          </div>
          <div className="step">
            <div className="n">
              02
            </div>
            <h3>
              We read the counter rules
            </h3>
            <p>
              Card, deposit, age and documents at your exact branch.
            </p>
          </div>
          <div className="step">
            <div className="n">
              03
            </div>
            <h3>
              See the all-in total
            </h3>
            <p>
              Taxes and fees included, service fee shown, before you approve.
            </p>
          </div>
          <div className="step">
            <div className="n">
              04
            </div>
            <h3>
              Drive
            </h3>
            <p>
              Walk to the counter knowing what they’ll ask for.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
