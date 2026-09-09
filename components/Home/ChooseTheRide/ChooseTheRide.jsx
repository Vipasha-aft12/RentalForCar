import './ChooseTheRide.css';
export default function ChooseTheRide() {
  return (
    <section className="sec tint">
      <div className="wrap">
        <div className="center">
          <p className="eyebrow">
            Choose the ride
          </p>
          <h2>
            Start from the kind of driving you’re doing
          </h2>
        </div>
        <div className="cars">
          <div className="car">
            <div className="pic" data-label="Economy & Compact photo"><img src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=70" alt="Economy & Compact — RentalForCar" loading="lazy" width="1200" height="750" /></div>
            <div className="bd">
              <h3>
                Economy & Compact
              </h3>
              <p>
                Cheapest to run, easy to park — city trips and solo travel.
              </p>
            </div>
          </div>
          <div className="car">
            <div className="pic" data-label="Sedan & SUV photo"><img src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=70" alt="Sedan & SUV — RentalForCar" loading="lazy" width="1200" height="750" /></div>
            <div className="bd">
              <h3>
                Sedan & SUV
              </h3>
              <p>
                Room for families and luggage, comfortable on long highway drives.
              </p>
            </div>
          </div>
          <div className="car">
            <div className="pic" data-label="Vans & People-movers photo"><img src="https://images.unsplash.com/photo-1774247800137-63f7e587ada9?auto=format&fit=crop&w=1200&q=70" alt="Vans & People-movers — RentalForCar" loading="lazy" width="1200" height="750" /></div>
            <div className="bd">
              <h3>
                Vans & People-movers
              </h3>
              <p>
                7–15 seats for groups, plus cargo vans for moving days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
