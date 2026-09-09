import './AboutSixtAndRentalforcar.css';
export default function AboutSixtAndRentalforcar() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">
            About Sixt and RentalForCar
          </p>
          <h2>
            Straight answers
          </h2>
        </div>
        <div className="faq">
          <details open="">
            <summary>
              Are you Sixt?
            </summary>
            <div className="a">
              No. RentalForCar is an independent travel agency, not Sixt, and we’re not affiliated with or authorized to represent Sixt.
            </div>
          </details>
          <details>
            <summary>
              Can you change or cancel my existing Sixt booking?
            </summary>
            <div className="a">
              No — an existing Sixt reservation can only be serviced by Sixt. Please contact Sixt directly through their official channels.
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
