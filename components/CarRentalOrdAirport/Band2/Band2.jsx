import './Band2.css';
export default function Band2() {
  return (
    <section className="band mint">
       <div className="wrap">
         <div className="section-head reveal">
           <p className="eyebrow">
            Choose the ride
          </p>
           <h2 className="h-2" id="classes-ord-airport">
            Which class suits the trip
          </h2>
         </div>
         <div className="grid g-3">
           <a className="card reveal" href="/cars/economy/" data-link="">
             <div className="media" data-img="economy">
              <svg aria-hidden="true">
                <use href="#v-economy" xlinkHref="#v-economy"></use>
              </svg>
              <span className="media-label">
                ECONOMY
              </span>
            </div>
             <div className="card-body">
              <h3 className="h-3">
                Economy
              </h3>
              <p>
                One or two people with normal luggage, and the cheapest option to run on a long highway leg.
              </p>
              <span className="card-link">
                Explore economy
                <svg className="arrow" width="16" height="16" aria-hidden="true">
                  <use href="#i-car" xlinkHref="#i-car"></use>
                </svg>
              </span>
            </div>
           </a>
           <a className="card reveal" href="/cars/suv/" data-link="">
             <div className="media" data-img="suv">
              <svg aria-hidden="true">
                <use href="#v-suv" xlinkHref="#v-suv"></use>
              </svg>
              <span className="media-label">
                SUV
              </span>
            </div>
             <div className="card-body">
              <h3 className="h-3">
                SUV
              </h3>
              <p>
                Four or five people with real luggage, and a higher seating position for long interstate stretches.
              </p>
              <span className="card-link">
                Explore SUVs
                <svg className="arrow" width="16" height="16" aria-hidden="true">
                  <use href="#i-car" xlinkHref="#i-car"></use>
                </svg>
              </span>
            </div>
           </a>
           <a className="card reveal" href="/cars/vans/" data-link="">
             <div className="media" data-img="vans">
              <svg aria-hidden="true">
                <use href="#v-van" xlinkHref="#v-van"></use>
              </svg>
              <span className="media-label">
                VANS
              </span>
            </div>
             <div className="card-body">
              <h3 className="h-3">
                Vans & people carriers
              </h3>
              <p>
                Five or more travelling together, with sliding doors that earn their keep in a packed airport garage.
              </p>
              <span className="card-link">
                Explore vans
                <svg className="arrow" width="16" height="16" aria-hidden="true">
                  <use href="#i-car" xlinkHref="#i-car"></use>
                </svg>
              </span>
            </div>
           </a>
         </div>
       </div>
     </section>
  );
}
