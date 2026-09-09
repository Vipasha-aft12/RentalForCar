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
              City or airport, dates and times, and the kind of car. Online or on the phone.
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
              Card, deposit, age policy and documents at your exact branch — confirmed, not assumed.
            </p>
          </div>
          <div className="step">
            <div className="n">
              03
            </div>
            <h3>
              You see the all-in total
            </h3>
            <p>
              Taxes and mandatory fees included, our service fee shown, deposit explained — before you approve.
            </p>
          </div>
          <div className="step">
            <div className="n">
              04
            </div>
            <h3>
              Land, collect, drive
            </h3>
            <p>
              Walk to the counter knowing exactly what they’ll ask for. Keys, not queues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
