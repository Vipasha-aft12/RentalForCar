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
                Traffic is a scheduling problem, not a driving problem
              </h2>
               <p>
                The freeways work fine outside the peaks and are miserable inside them. Roughly, avoid the 405 and the 101 between 7–10am and 3–7pm, and treat any journey crossing the city at those hours as taking double. Sunday mornings are the closest thing to an empty road you will find.
              </p>
               <h2 className="h-2">
                Parking, and the signs
              </h2>
               <p>
                Street parking in LA is governed by stacked signs that contradict each other on purpose. Read all of them, bottom to top, and pay particular attention to street cleaning hours — that is the most commonly issued ticket in the city, and the rental company will pass on both the fine and an administration fee.
              </p>
               <p>
                Santa Monica, Venice and Hollywood have structures that are cheaper than the meters and considerably less stressful. Many restaurants valet by default; that is normal here rather than an upsell.
              </p>
               <h2 className="h-2">
                Drives worth extending the rental for
              </h2>
               <ul>
                 <li>
                  <strong>
                    Pacific Coast Highway to Malibu
                  </strong>
                  — 45 minutes and the best value hour of driving in California.
                </li>
                 <li>
                  <strong>
                    Angeles Crest Highway
                  </strong>
                  — mountain road into the San Gabriels, an hour from downtown.
                </li>
                 <li>
                  <strong>
                    Joshua Tree
                  </strong>
                  — around two and a half hours east.
                </li>
                 <li>
                  <strong>
                    Santa Barbara
                  </strong>
                  — an hour and a half up the coast on the 101.
                </li>
               </ul>
               <h2 className="h-2">
                Which car
              </h2>
               <p>
                A
                <a href="/cars/compact/" data-link="">
                  compact
                </a>
                is the practical choice — you will spend real time in it, and parking structures here are narrow. A convertible on the PCH is the cliché for a reason.
                <a href="/cars/electric/" data-link="">
                  Electric
                </a>
                works particularly well in LA: the charging network is dense and the carpool lane access for qualifying vehicles is a genuine time saver.
              </p>
               <table className="fact-table">
                 <caption className="sr-only">
                  Renting in Los Angeles at a glance
                </caption>
                 <tbody>
                   <tr>
                    <th scope="row">
                      Best class
                    </th>
                    <td>
                      Compact; convertible or electric if the trip allows
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Tolls
                    </th>
                    <td>
                      Limited — mainly the 91 and 110 express lanes
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Airports
                    </th>
                    <td>
                      LAX, Burbank (BUR), Long Beach (LGB), John Wayne (SNA)
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Watch for
                    </th>
                    <td>
                      Street cleaning restrictions; fines are passed on with an admin fee
                    </td>
                  </tr>
                 </tbody>
               </table>
             </div>
           </div>
           <aside className="detail-aside" data-book-panel="">
             <div className="book-card" data-location-book="" data-location="Los Angeles, CA">
               <p className="eyebrow">
                Book in Los Angeles
              </p>
               <h2 className="h-3">
                Check availability
              </h2>
               <p className="card-note">
                Live rates from our rental partners for these dates.
              </p>
               <div className="field" data-validate="l-los-angeles-pickup">
                 <label htmlFor="l-los-angeles-pickup">
                  Pick-up location
                </label>
                 <input id="l-los-angeles-pickup" type="text" value="Los Angeles, CA" autoComplete="off" required />
                 <p className="field-error">
                  Tell us where you're collecting the car.
                </p>
               </div>
               <div className="field-row">
                 <div className="field" data-validate="l-los-angeles-from">
                  <label htmlFor="l-los-angeles-from">
                    Pick-up date & time
                  </label>
                  <input id="l-los-angeles-from" type="datetime-local" required />
                  <p className="field-error">
                    Choose a pick-up date.
                  </p>
                </div>
                 <div className="field" data-validate="l-los-angeles-to">
                  <label htmlFor="l-los-angeles-to">
                    Return date & time
                  </label>
                  <input id="l-los-angeles-to" type="datetime-local" required />
                  <p className="field-error">
                    Choose a return date after the pick-up.
                  </p>
                </div>
               </div>
               <div className="field-row">
                 <div className="field">
                   <label htmlFor="l-los-angeles-age">
                    Driver age
                  </label>
                   <select id="l-los-angeles-age">
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
                   <label htmlFor="l-los-angeles-flight">
                    Flight number (optional)
                  </label>
                   <input id="l-los-angeles-flight" type="text" placeholder="e.g. AA1423" autoComplete="off" />
                 </div>
               </div>
               <label className="check" htmlFor="l-los-angeles-diff">
                <input id="l-los-angeles-diff" type="checkbox" />
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
