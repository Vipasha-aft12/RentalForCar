import './NoCounterSurprises.css';
export default function NoCounterSurprises() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">
            No counter surprises
          </p>
          <h2>
            The rate gets you the car. The fine print gets you turned away.
          </h2>
          <p className="lede muted">
            Most rental problems don’t happen online — they happen at the desk, over a debit card the branch won’t take, a hold bigger than expected, or an age fee nobody mentioned. We check those for your exact pick-up location before you commit.
          </p>
        </div>
        <div className="eeat">
          <div className="av">
            PHOTO
          </div>
          <div className="meta">
            <b>
              RentalForCar rentals desk
            </b>
            · US car-rental reservations
            <br />
            <span className="sub2">
              Written and fact-checked by the RentalForCar rentals desk · Last checked 8 September 2026
            </span>
            <div className="src">
              Sources: U.S.
              <a href="https://consumer.ftc.gov/">
                FTC consumer guidance
              </a>
              , each airport authority, and the rental company’s own counter policy at the time of booking.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
