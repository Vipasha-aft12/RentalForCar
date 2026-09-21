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
                Getting to the rental centre
              </h2>
               <p>
                The Rental Car Center sits within the Miami Intermodal Center, reached from the terminal by the MIA Mover — an automated train that runs frequently and takes a few minutes. All the major rental companies are on the same floor, so there is no shuttle lottery. Allow 25 to 40 minutes from baggage reclaim.
              </p>
               <h2 className="h-2">
                Tolls, before you set off
              </h2>
               <p>
                South Florida's road network is heavily electronic. Your car will be enrolled in the rental company's toll programme automatically; ask at the counter what the daily service charge is and whether it applies only on days you use a toll road. This is the number that surprises people on the final invoice.
              </p>
               <h2 className="h-2">
                Fort Lauderdale as an alternative
              </h2>
               <p>
                FLL is around 45 minutes north and frequently prices lower for the same vehicle class, particularly in peak season. If you are heading to Fort Lauderdale, Boca or Palm Beach anyway, collecting there rather than at MIA is usually the better arithmetic.
              </p>
               <table className="fact-table">
                 <caption className="sr-only">
                  MIA car rental at a glance
                </caption>
                 <tbody>
                   <tr>
                    <th scope="row">
                      Airport code
                    </th>
                    <td>
                      MIA — Miami International
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Getting there
                    </th>
                    <td>
                      MIA Mover to the Rental Car Center
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Allow
                    </th>
                    <td>
                      25–40 minutes from baggage reclaim
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Alternative
                    </th>
                    <td>
                      Fort Lauderdale (FLL), about 45 minutes north
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Watch for
                    </th>
                    <td>
                      Daily toll service charge added by the rental company
                    </td>
                  </tr>
                 </tbody>
               </table>
             </div>
           </div>
           <aside className="detail-aside" data-book-panel="">
             <div className="book-card" data-location-book="" data-location="Miami International Airport">
               <p className="eyebrow">
                Book in Miami Airport
              </p>
               <h2 className="h-3">
                Check availability
              </h2>
               <p className="card-note">
                Live rates from our rental partners for these dates.
              </p>
               <div className="field" data-validate="l-miami-airport-pickup">
                 <label htmlFor="l-miami-airport-pickup">
                  Pick-up location
                </label>
                 <input id="l-miami-airport-pickup" type="text" value="Miami International Airport" autoComplete="off" required />
                 <p className="field-error">
                  Tell us where you're collecting the car.
                </p>
               </div>
               <div className="field-row">
                 <div className="field" data-validate="l-miami-airport-from">
                  <label htmlFor="l-miami-airport-from">
                    Pick-up date & time
                  </label>
                  <input id="l-miami-airport-from" type="datetime-local" required />
                  <p className="field-error">
                    Choose a pick-up date.
                  </p>
                </div>
                 <div className="field" data-validate="l-miami-airport-to">
                  <label htmlFor="l-miami-airport-to">
                    Return date & time
                  </label>
                  <input id="l-miami-airport-to" type="datetime-local" required />
                  <p className="field-error">
                    Choose a return date after the pick-up.
                  </p>
                </div>
               </div>
               <div className="field-row">
                 <div className="field">
                   <label htmlFor="l-miami-airport-age">
                    Driver age
                  </label>
                   <select id="l-miami-airport-age">
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
                   <label htmlFor="l-miami-airport-flight">
                    Flight number (optional)
                  </label>
                   <input id="l-miami-airport-flight" type="text" placeholder="e.g. AA1423" autoComplete="off" />
                 </div>
               </div>
               <label className="check" htmlFor="l-miami-airport-diff">
                <input id="l-miami-airport-diff" type="checkbox" />
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
