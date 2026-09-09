import './AboutThriftyAndRentalforcar.css';
export default function AboutThriftyAndRentalforcar() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">
            About Thrifty and RentalForCar
          </p>
          <h2>
            Straight answers
          </h2>
        </div>
        <div className="faq">
          <details open="">
            <summary>
              Are you Thrifty?
            </summary>
            <div className="a">
              No. RentalForCar is an independent travel agency, not Thrifty, and we’re not affiliated with or authorized to represent Thrifty.
            </div>
          </details>
          <details>
            <summary>
              Can you change or cancel my existing Thrifty booking?
            </summary>
            <div className="a">
              No — an existing Thrifty reservation can only be serviced by Thrifty. Please contact Thrifty directly through their official channels.
            </div>
          </details>
          <details>
            <summary>
              Do you charge more than booking direct?
            </summary>
            <div className="a">
              No. You book at the same rate; we confirm the counter rules for your branch and show the all-in total before you approve it.
            </div>
          </details>
          <details>
            <summary>
              Who provides the car on a new booking?
            </summary>
            <div className="a">
              Established rental companies at each location. RentalForCar is the independent agent that arranges the reservation.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
