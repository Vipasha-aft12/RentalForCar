import './HowToReachUs.css';
export default function HowToReachUs() {
  return (
    <section className="sec">
      <div className="wrap prose">
        <h2>
          How to reach us
        </h2>
        <div className="factrow">
          <div className="fact">
            <div className="k">
              Phone
            </div>
            <div className="v">
              <a href="tel:+18557619153">
                +1 (855) 761-9153
              </a>
            </div>
          </div>
          <div className="fact">
            <div className="k">
              Email
            </div>
            <div className="v">
              <a href="mailto:support@rentalforcar.com">
                support@rentalforcar.com
              </a>
            </div>
          </div>
          <div className="fact">
            <div className="k">
              Hours
            </div>
            <div className="v">
              Reservations 7 days a week
            </div>
          </div>
        </div>
        <h2>
          Company
        </h2>
        <p>
          RentalForCar is operated by Affluence Tour and Travels LLC, 1621 Central Ave, Cheyenne, WY 82001.
        </p>
        <h2>
          What to have ready
        </h2>
        <p>
          To move fast, have your pick-up city or airport, the dates and times, the driver’s age, and the card type you plan to use. That’s enough for us to confirm the branch rules and the all-in total on the call.
        </p>
        <div className="disclose">
          RentalForCar is an independent booking agent, not a rental car company, and is not affiliated with any rental brand.  Rates and availability come from the rental companies; deposits and local charges are handled at the counter.
        </div>
      </div>
    </section>
  );
}
