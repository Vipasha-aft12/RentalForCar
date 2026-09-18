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
                Collecting the car
              </h2>
               <p>
                Rental counters at MCO are located on the terminal levels with the vehicles in the adjacent garage, so for most companies there is no shuttle at all. Check which side of the terminal your company sits on before walking — the two sides are a long way apart. Allow 20 to 35 minutes.
              </p>
               <h2 className="h-2">
                The drive to the parks
              </h2>
               <p>
                The 417 and 528 toll roads are the quickest route from MCO towards the Disney and Universal areas, and worth taking rather than fighting through surface roads. The car will be enrolled in a toll programme; take the transponder if you plan several park days.
              </p>
               <h2 className="h-2">
                Size the car for the luggage, not the passengers
              </h2>
               <p>
                Families consistently under-book here. Four people with four suitcases and a stroller do not fit in a compact. A
                <a href="/cars/suv/" data-link="">
                  mid-size SUV
                </a>
                is the realistic floor, and a
                <a href="/cars/vans/" data-link="">
                  minivan
                </a>
                is worth it once there are five or more of you. Upgrading at the counter costs considerably more than booking the right class in the first place.
              </p>
               <table className="fact-table">
                 <caption className="sr-only">
                  MCO car rental at a glance
                </caption>
                 <tbody>
                   <tr>
                    <th scope="row">
                      Airport code
                    </th>
                    <td>
                      MCO — Orlando International
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Getting there
                    </th>
                    <td>
                      Counters on the terminal levels; cars in the adjacent garage
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Allow
                    </th>
                    <td>
                      20–35 minutes from baggage reclaim
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Route to the parks
                    </th>
                    <td>
                      417 and 528 toll roads
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Alternative
                    </th>
                    <td>
                      Orlando Sanford (SFB) for some charter routes
                    </td>
                  </tr>
                 </tbody>
               </table>
             </div>
           </div>
           <aside className="detail-aside" data-book-panel="">
             <div className="book-card" data-location-book="" data-location="Orlando International Airport">
               <p className="eyebrow">
                Book in Orlando Airport
              </p>
               <h2 className="h-3">
                Check availability
              </h2>
               <p className="card-note">
                Live rates from our rental partners for these dates.
              </p>
               <div className="field" data-validate="l-orlando-airport-pickup">
                 <label htmlFor="l-orlando-airport-pickup">
                  Pick-up location
                </label>
                 <input id="l-orlando-airport-pickup" type="text" value="Orlando International Airport" autoComplete="off" required />
                 <p className="field-error">
                  Tell us where you're collecting the car.
                </p>
               </div>
               <div className="field-row">
                 <div className="field" data-validate="l-orlando-airport-from">
                  <label htmlFor="l-orlando-airport-from">
                    Pick-up date & time
                  </label>
                  <input id="l-orlando-airport-from" type="datetime-local" required />
                  <p className="field-error">
                    Choose a pick-up date.
                  </p>
                </div>
                 <div className="field" data-validate="l-orlando-airport-to">
                  <label htmlFor="l-orlando-airport-to">
                    Return date & time
                  </label>
                  <input id="l-orlando-airport-to" type="datetime-local" required />
                  <p className="field-error">
                    Choose a return date after the pick-up.
                  </p>
                </div>
               </div>
               <div className="field-row">
                 <div className="field">
                   <label htmlFor="l-orlando-airport-age">
                    Driver age
                  </label>
                   <select id="l-orlando-airport-age">
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
                   <label htmlFor="l-orlando-airport-flight">
                    Flight number (optional)
                  </label>
                   <input id="l-orlando-airport-flight" type="text" placeholder="e.g. AA1423" autoComplete="off" />
                 </div>
               </div>
               <label className="check" htmlFor="l-orlando-airport-diff">
                <input id="l-orlando-airport-diff" type="checkbox" />
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
