import './BandTight.css';
export default function BandTight() {
  return (
    <section className="band-tight" style={{paddingTop: '0'}}>
       <div className="wrap">
         <div className="detail-layout">
           <div className="detail-main">
             <div className="media media-wide" style={{borderRadius: 'var(--r-lg)', marginBottom: '36px'}}>
              <svg aria-hidden="true">
                <use href="#p-city" xlinkHref="#p-city"></use>
              </svg>
            </div>
             <div className="prose">
               <h2 className="h-2">
                Tolls on the way out
              </h2>
               <p>
                The Illinois tollway network surrounds the city and is largely cashless. Rental cars are enrolled in a toll programme, and as elsewhere the rental company adds a service charge on the days tolls are incurred. If you are heading to O'Hare, north to Wisconsin or west on I-88, you will use them.
              </p>
               <h2 className="h-2">
                Winter is a real consideration
              </h2>
               <p>
                Snow and lake-effect conditions run from late November into March. Rental fleets here are equipped for it, but all-season tyres are not snow tyres — leave more braking distance than feels necessary. During declared snow events the city enforces winter overnight parking bans on designated arterial streets and tows aggressively.
              </p>
               <h2 className="h-2">
                Parking downtown
              </h2>
               <p>
                Loop and River North garages are expensive, and street metering runs long hours. If you are staying downtown and only driving on one or two days, collecting the car on the day you need it is materially cheaper than paying for overnight garage storage across the whole trip.
              </p>
               <h2 className="h-2">
                Drives worth taking
              </h2>
               <ul>
                 <li>
                  <strong>
                    Lake Shore Drive
                  </strong>
                  — short, and the best introduction to the city's geography.
                </li>
                 <li>
                  <strong>
                    Indiana Dunes
                  </strong>
                  — about an hour southeast along the lake.
                </li>
                 <li>
                  <strong>
                    Milwaukee
                  </strong>
                  — 90 minutes north on I-94.
                </li>
                 <li>
                  <strong>
                    Saugatuck and the Michigan shore
                  </strong>
                  — around two and a half hours around the lake.
                </li>
               </ul>
               <table className="fact-table">
                 <caption className="sr-only">
                  Renting in Chicago at a glance
                </caption>
                 <tbody>
                   <tr>
                    <th scope="row">
                      Best class
                    </th>
                    <td>
                      Compact in summer; SUV with AWD in winter
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Tolls
                    </th>
                    <td>
                      Illinois tollway, cashless; service charge applied by the rental company
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Airports
                    </th>
                    <td>
                      O'Hare (ORD) and Midway (MDW)
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Watch for
                    </th>
                    <td>
                      Winter overnight parking bans on designated streets during snow events
                    </td>
                  </tr>
                 </tbody>
               </table>
             </div>
           </div>
           <aside className="detail-aside" data-book-panel="">
             <div className="book-card" data-location-book="" data-location="Chicago, IL">
               <p className="eyebrow">
                Book in Chicago
              </p>
               <h2 className="h-3">
                Check availability
              </h2>
               <p className="card-note">
                Live rates from our rental partners for these dates.
              </p>
               <div className="field" data-validate="l-chicago-pickup">
                 <label htmlFor="l-chicago-pickup">
                  Pick-up location
                </label>
                 <input id="l-chicago-pickup" type="text" value="Chicago, IL" autoComplete="off" required />
                 <p className="field-error">
                  Tell us where you're collecting the car.
                </p>
               </div>
               <div className="field-row">
                 <div className="field" data-validate="l-chicago-from">
                  <label htmlFor="l-chicago-from">
                    Pick-up date & time
                  </label>
                  <input id="l-chicago-from" type="datetime-local" required />
                  <p className="field-error">
                    Choose a pick-up date.
                  </p>
                </div>
                 <div className="field" data-validate="l-chicago-to">
                  <label htmlFor="l-chicago-to">
                    Return date & time
                  </label>
                  <input id="l-chicago-to" type="datetime-local" required />
                  <p className="field-error">
                    Choose a return date after the pick-up.
                  </p>
                </div>
               </div>
               <div className="field-row">
                 <div className="field">
                   <label htmlFor="l-chicago-age">
                    Driver age
                  </label>
                   <select id="l-chicago-age">
                    <option>
                      25 or over
                    </option>
                    <option>
                      21 – 24
                    </option>
                    <option>
                      18 – 20
                    </option>
                  </select>
                 </div>
                 <div className="field">
                   <label htmlFor="l-chicago-flight">
                    Flight number (optional)
                  </label>
                   <input id="l-chicago-flight" type="text" placeholder="e.g. AA1423" autoComplete="off" />
                 </div>
               </div>
               <label className="check" htmlFor="l-chicago-diff">
                <input id="l-chicago-diff" type="checkbox" />
                <span>
                  Return to a different location
                </span>
              </label>
               <div className="terms-strip" style={{margin: '4px 0 18px'}}>
                 <p className="terms-title">
                  What you pay
                </p>
                 <ul>
                   <li>
                    Charged today: a deposit against the rental plus the RentalForCar service fee.
                  </li>
                   <li>
                    Due at the counter: the remaining balance, local taxes and any extras.
                  </li>
                   <li>
                    Free cancellation within 24 hours of booking, then a flat $50 fee.
                  </li>
                 </ul>
               </div>
               <button className="btn btn-primary btn-block" type="button" data-location-book-go="">
                Book a car
                <svg className="arrow" width="18" height="18" aria-hidden="true">
                  <use href="#i-car" xlinkHref="#i-car"></use>
                </svg>
              </button>
               <p className="card-note" style={{margin: '14px 0 0', textAlign: 'center'}}>
                You pick the vehicle at the next step. Prefer to talk? Call
                <a href="tel:+18557619153" style={{fontWeight: '600', textDecoration: 'underline'}}>
                  (855) 761-9153
                </a>
                .
              </p>
             </div>
           </aside>
         </div>
       </div>
     </section>
  );
}
