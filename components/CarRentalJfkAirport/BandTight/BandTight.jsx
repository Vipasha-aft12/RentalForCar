import './BandTight.css';
export default function BandTight() {
  return (
    <section id="search" className="band-tight" style={{paddingTop: '0'}}>
       <div className="wrap">
         <div className="detail-layout">
           <div className="detail-main">
             <div className="media media-wide" style={{borderRadius: 'var(--r-lg)', marginBottom: '36px'}}>
              <svg aria-hidden="true">
                <use href="#p-airport" xlinkHref="#p-airport"></use>
              </svg>
            </div>
             <div className="prose">
               <h2 className="h-2">
                Getting to the rental cars
              </h2>
               <p>
                Rental operations at JFK sit outside the terminal ring. From any terminal you take the AirTrain to the rental company's stop and then a short shuttle, or in some cases walk. Allow 30 to 45 minutes from baggage reclaim to being in the car, and more during the evening international arrival bank when queues at the counters are longest.
              </p>
               <h2 className="h-2">
                Leaving the airport
              </h2>
               <p>
                Every route out of JFK involves tolls sooner or later. The Van Wyck Expressway is the main artery and it is reliably congested; the Belt Parkway is the better option heading east to Long Island. If you are driving into Manhattan, add the tunnel or bridge toll and, below 60th Street, the congestion charge. Take the transponder at the counter.
              </p>
               <h2 className="h-2">
                Is the airport the right place to rent?
              </h2>
               <p>
                Airport branches carry a concession recovery fee and a customer facility charge that city branches do not. Against that, getting to a Queens or Manhattan branch with luggage costs time and a taxi fare. The rule of thumb: for rentals of three days or more the airport premium is usually worth avoiding; for a same-day departure out of the city it rarely is.
              </p>
               <table className="fact-table">
                 <caption className="sr-only">
                  JFK car rental at a glance
                </caption>
                 <tbody>
                   <tr>
                    <th scope="row">
                      Airport code
                    </th>
                    <td>
                      JFK — John F. Kennedy International, Queens, New York
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Getting there
                    </th>
                    <td>
                      AirTrain plus shuttle from all terminals
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Allow
                    </th>
                    <td>
                      30–45 minutes from baggage reclaim
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Delayed flights
                    </th>
                    <td>
                      Add your flight number at booking so the vehicle is held
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Alternatives
                    </th>
                    <td>
                      LaGuardia (LGA), Newark (EWR), or a city branch
                    </td>
                  </tr>
                 </tbody>
               </table>
             </div>
           </div>
           <aside className="detail-aside" data-book-panel="">
             <div className="book-card" data-location-book="" data-location="JFK Airport, New York">
               <p className="eyebrow">
                Book in JFK Airport
              </p>
               <h2 className="h-3">
                Check availability
              </h2>
               <p className="card-note">
                Live rates from our rental partners for these dates.
              </p>
               <div className="field" data-validate="l-jfk-airport-pickup">
                 <label htmlFor="l-jfk-airport-pickup">
                  Pick-up location
                </label>
                 <input id="l-jfk-airport-pickup" type="text" value="JFK Airport, New York" autoComplete="off" required />
                 <p className="field-error">
                  Tell us where you're collecting the car.
                </p>
               </div>
               <div className="field-row">
                 <div className="field" data-validate="l-jfk-airport-from">
                  <label htmlFor="l-jfk-airport-from">
                    Pick-up date & time
                  </label>
                  <input id="l-jfk-airport-from" type="datetime-local" required />
                  <p className="field-error">
                    Choose a pick-up date.
                  </p>
                </div>
                 <div className="field" data-validate="l-jfk-airport-to">
                  <label htmlFor="l-jfk-airport-to">
                    Return date & time
                  </label>
                  <input id="l-jfk-airport-to" type="datetime-local" required />
                  <p className="field-error">
                    Choose a return date after the pick-up.
                  </p>
                </div>
               </div>
               <div className="field-row">
                 <div className="field">
                   <label htmlFor="l-jfk-airport-age">
                    Driver age
                  </label>
                   <select id="l-jfk-airport-age">
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
                   <label htmlFor="l-jfk-airport-flight">
                    Flight number (optional)
                  </label>
                   <input id="l-jfk-airport-flight" type="text" placeholder="e.g. AA1423" autoComplete="off" />
                 </div>
               </div>
               <label className="check" htmlFor="l-jfk-airport-diff">
                <input id="l-jfk-airport-diff" type="checkbox" />
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
                <a href="tel:+18778516014" style={{fontWeight: '600', textDecoration: 'underline'}}>
                  (877) 851-6014
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
