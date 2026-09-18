import './Band.css';
export default function Band() {
  return (
    <section className="band mint">
       <div className="wrap">
         <div className="section-head reveal">
           <p className="eyebrow">
            Step by step
          </p>
           <h2 className="h-2" id="collect-atl-airport">
            Collecting your car at ATL
          </h2>
         </div>
         <ol className="steps">
           <li className="step reveal">
            <span className="step-n">
              1
            </span>
            <div>
              <h3>
                Clear baggage claim
              </h3>
              <p>
                Rental counters work from the name on the booking and the licence, not the flight. If you gave us a flight number, the branch can see a delayed arrival.
              </p>
            </div>
          </li>
           <li className="step reveal">
            <span className="step-n">
              2
            </span>
            <div>
              <h3>
                Reach the rental desks
              </h3>
              <p>
                ATL SkyTrain from the Domestic Terminal — free, a few minutes end to end.
              </p>
            </div>
          </li>
           <li className="step reveal">
            <span className="step-n">
              3
            </span>
            <div>
              <h3>
                At the counter
              </h3>
              <p>
                Licence, the card used to book and photo ID. This is where protection and extras are offered — you are free to decline anything you already hold cover for.
              </p>
            </div>
          </li>
           <li className="step reveal">
            <span className="step-n">
              4
            </span>
            <div>
              <h3>
                Photograph the car
              </h3>
              <p>
                All four corners, the windscreen, the wheels and the roof, plus the odometer and fuel gauge. Two minutes here is what settles a damage dispute later.
              </p>
            </div>
          </li>
         </ol>
       </div>
     </section>
  );
}
