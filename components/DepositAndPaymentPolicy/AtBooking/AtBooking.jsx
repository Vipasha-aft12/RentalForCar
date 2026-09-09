import './AtBooking.css';
export default function AtBooking() {
  return (
    <section className="sec">
      <div className="wrap prose">
        <h2>
          At booking
        </h2>
        <p>
          Your reservation total is quoted all-in — taxes and the rental company’s mandatory fees included, with our service fee shown as its own line. Any amount paid to RentalForCar at booking is applied toward your rental.
        </p>
        <h2>
          At the counter
        </h2>
        <p>
          The rental company places a refundable deposit hold on your card at pick-up and handles fuel, extras and any local charges. The hold is released after you return the car; the timing is set by your bank.
        </p>
        <h2>
          What we can and can’t do
        </h2>
        <p>
          We can show you the true all-in figure and confirm the rules for your branch. We cannot set or change rental rates, deposits or counter fees — those belong to the rental company. If anything about a charge is unclear, call us and we’ll explain it before you commit.
        </p>
        <div className="disclose">
          RentalForCar is an independent booking agent, not a rental car company, and is not affiliated with any rental brand. Any amount paid to RentalForCar at booking is applied toward your rental. Rates and availability come from the rental companies; deposits and local charges are handled at the counter.
        </div>
      </div>
    </section>
  );
}
