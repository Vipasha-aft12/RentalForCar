import './BandTight.css';
export default function BandTight() {
  return (
    <section className="band-tight" style={{paddingTop: '0'}}>
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
                Rental collection at LAX is off-airport, reached by shuttle from the terminal kerbside. The airport has been consolidating rental operations into a single facility connected by an automated people mover, so check your confirmation for the current pick-up instruction rather than relying on a previous visit. Allow 45 minutes from baggage reclaim, and longer in the late afternoon arrival peak.
              </p>
               <h2 className="h-2">
                Leaving the airport
              </h2>
               <p>
                Sepulveda north and the 105 east are the usual exits. Avoid heading onto the 405 north between 3pm and 7pm if there is any alternative — a 12-mile journey can take an hour. If your hotel is in Santa Monica or Venice, surface streets are often faster than the freeway.
              </p>
               <h2 className="h-2">
                Consider a smaller airport
              </h2>
               <p>
                If your itinerary allows it, Burbank, Long Beach and John Wayne all have far quicker rental collection than LAX and are better positioned for parts of the metro area. For a trip focused on the Valley or Pasadena, Burbank in particular can save an hour on both ends.
              </p>
               <table className="fact-table">
                 <caption className="sr-only">
                  LAX car rental at a glance
                </caption>
                 <tbody>
                   <tr>
                    <th scope="row">
                      Airport code
                    </th>
                    <td>
                      LAX — Los Angeles International
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Getting there
                    </th>
                    <td>
                      Shuttle or people mover from the terminals
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Allow
                    </th>
                    <td>
                      45 minutes from baggage reclaim
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Alternatives
                    </th>
                    <td>
                      Burbank (BUR), Long Beach (LGB), John Wayne (SNA)
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Watch for
                    </th>
                    <td>
                      Afternoon peak on the 405; plan the first drive around it
                    </td>
                  </tr>
                 </tbody>
               </table>
             </div>
           </div>
           <aside className="detail-aside" data-book-panel="">
             <div className="book-card" data-location-book="" data-location="LAX Airport, Los Angeles">
               <p className="eyebrow">
                Book in LAX Airport
              </p>
               <h2 className="h-3">
                Check availability
              </h2>
               <p className="card-note">
                Live rates from our rental partners for these dates.
              </p>
               <div className="field" data-validate="l-lax-airport-pickup">
                 <label htmlFor="l-lax-airport-pickup">
                  Pick-up location
                </label>
                 <input id="l-lax-airport-pickup" type="text" value="LAX Airport, Los Angeles" autoComplete="off" required />
                 <p className="field-error">
                  Tell us where you're collecting the car.
                </p>
               </div>
               <div className="field-row">
                 <div className="field" data-validate="l-lax-airport-from">
                  <label htmlFor="l-lax-airport-from">
                    Pick-up date & time
                  </label>
                  <input id="l-lax-airport-from" type="datetime-local" required />
                  <p className="field-error">
                    Choose a pick-up date.
                  </p>
                </div>
                 <div className="field" data-validate="l-lax-airport-to">
                  <label htmlFor="l-lax-airport-to">
                    Return date & time
                  </label>
                  <input id="l-lax-airport-to" type="datetime-local" required />
                  <p className="field-error">
                    Choose a return date after the pick-up.
                  </p>
                </div>
               </div>
               <div className="field-row">
                 <div className="field">
                   <label htmlFor="l-lax-airport-age">
                    Driver age
                  </label>
                   <select id="l-lax-airport-age">
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
                   <label htmlFor="l-lax-airport-flight">
                    Flight number (optional)
                  </label>
                   <input id="l-lax-airport-flight" type="text" placeholder="e.g. AA1423" autoComplete="off" />
                 </div>
               </div>
               <label className="check" htmlFor="l-lax-airport-diff">
                <input id="l-lax-airport-diff" type="checkbox" />
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
