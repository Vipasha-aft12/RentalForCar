import './TheThingsPeopleAskUsMost.css';
export default function TheThingsPeopleAskUsMost() {
  return (
    <section className="sec">
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
              Do you cost more than booking direct?
            </summary>
            <div className="a">
              No. You book at the same rate online or by phone. The difference is that we confirm the counter rules for your exact branch first and show the all-in total before you approve it.
            </div>
          </details>
          <details>
            <summary>
              Who actually provides the car?
            </summary>
            <div className="a">
              Established rental companies at each location. RentalForCar is an independent booking agent — we don’t own a fleet or run a counter, and availability comes from the rental company at the moment you search.
            </div>
          </details>
          <details>
            <summary>
              Can I rent with a debit card or no credit card?
            </summary>
            <div className="a">
              Often yes, but the rule is set branch by branch — not by a national policy. Tell us your pick-up location and we’ll confirm what that counter takes before you fly, so you’re not turned away.
            </div>
          </details>
          <details>
            <summary>
              What about the deposit?
            </summary>
            <div className="a">
              A refundable hold is placed on your card at pick-up and released after you return the car. The amount depends on the car class and the branch — we’ll tell you the range for yours.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
