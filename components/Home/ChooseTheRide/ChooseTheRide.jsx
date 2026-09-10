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
            <div className="pic" data-label="Economy & Compact photo"><img src="https://images.unsplash.com/photo-1596832323822-b6b383a0967b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWNvbm9teSUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D" alt="Economy & Compact — RentalForCar" loading="lazy" width="1200" height="750" /></div>
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
            <div className="pic" data-label="Sedan & SUV photo"><img src="https://images.unsplash.com/photo-1546614042-7df3c24c9e5d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2VkYW4lMjBjYXJ8ZW58MHx8MHx8fDA%3D" alt="Sedan & SUV — RentalForCar" loading="lazy" width="1200" height="750" /></div>
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
            <div className="pic" data-label="Vans & People-movers photo"><img src="https://images.unsplash.com/photo-1591706515036-cb0f48dc5e62?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHZhbiUyMGFuZCUyMHBlb3BsZSUyMG1vdmVyc3xlbnwwfHwwfHx8MA%3D%3D" alt="Vans & People-movers — RentalForCar" loading="lazy" width="1200" height="750" /></div>
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
