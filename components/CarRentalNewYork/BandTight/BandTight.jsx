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
                Do you actually need the car in the city?
              </h2>
               <p>
                For a trip that stays inside Manhattan, no. The subway is faster, and overnight garage parking is one of the largest single line items on a New York trip. The pattern that works: use transit for the city portion, then collect a car on the morning you head out to the Hudson Valley, the Catskills, Long Island or New England.
              </p>
               <h2 className="h-2">
                Where to collect
              </h2>
               <p>
                Midtown and Upper West Side branches are convenient but carry city surcharges. Branches in Queens, Brooklyn and Jersey City are typically cheaper for the same class, and if your route heads north or east you avoid crossing Manhattan entirely. If you are flying in, compare the
                <a href="/car-rental/jfk-airport/" data-link="">
                  JFK rental centre
                </a>
                against a city branch — the airport concession fee is real, but so is the cost of two subway trips with luggage.
              </p>
               <h2 className="h-2">
                Tolls
              </h2>
               <p>
                The bridges, tunnels and much of the surrounding network are cashless. Cameras read the plate and the rental company bills you afterwards, usually with an administration fee per toll event on top of the toll itself. If you expect more than a handful of crossings, take the toll transponder at the counter — it is normally cheaper than the per-event admin charges.
              </p>
               <h2 className="h-2">
                Parking and driving
              </h2>
               <ul>
                 <li>
                  Alternate side parking rules change by block and are enforced. Read the sign above the space, not the one twenty feet away.
                </li>
                 <li>
                  Most street spaces in Manhattan are metered with a maximum stay. Garages are the practical option, and rates vary sharply within a few blocks.
                </li>
                 <li>
                  Manhattan's congestion pricing zone applies to vehicles entering below 60th Street. Charges are passed on by the rental company in the same way as tolls.
                </li>
                 <li>
                  Take a smaller car than you think you need.
                  <a href="/cars/compact/" data-link="">
                    Compact
                  </a>
                  parks in spaces an SUV will not.
                </li>
               </ul>
               <table className="fact-table">
                 <caption className="sr-only">
                  Renting in New York at a glance
                </caption>
                 <tbody>
                   <tr>
                    <th scope="row">
                      Best class for the city
                    </th>
                    <td>
                      Economy or compact
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Tolls
                    </th>
                    <td>
                      Cashless; billed by the rental company with an admin fee per event
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Airport options
                    </th>
                    <td>
                      JFK, LaGuardia, Newark
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Winter
                    </th>
                    <td>
                      Snow is routine December to March; all-wheel drive worth it if heading upstate
                    </td>
                  </tr>
                 </tbody>
               </table>
             </div>
           </div>
           <aside className="detail-aside" data-book-panel="">
             <div className="book-card" data-location-book="" data-location="New York, NY">
               <p className="eyebrow">
                Book in New York
              </p>
               <h2 className="h-3">
                Check availability
              </h2>
               <p className="card-note">
                Live rates from our rental partners for these dates.
              </p>
               <div className="field" data-validate="l-new-york-pickup">
                 <label htmlFor="l-new-york-pickup">
                  Pick-up location
                </label>
                 <input id="l-new-york-pickup" type="text" value="New York, NY" autoComplete="off" required />
                 <p className="field-error">
                  Tell us where you're collecting the car.
                </p>
               </div>
               <div className="field-row">
                 <div className="field" data-validate="l-new-york-from">
                  <label htmlFor="l-new-york-from">
                    Pick-up date & time
                  </label>
                  <input id="l-new-york-from" type="datetime-local" required />
                  <p className="field-error">
                    Choose a pick-up date.
                  </p>
                </div>
                 <div className="field" data-validate="l-new-york-to">
                  <label htmlFor="l-new-york-to">
                    Return date & time
                  </label>
                  <input id="l-new-york-to" type="datetime-local" required />
                  <p className="field-error">
                    Choose a return date after the pick-up.
                  </p>
                </div>
               </div>
               <div className="field-row">
                 <div className="field">
                   <label htmlFor="l-new-york-age">
                    Driver age
                  </label>
                   <select id="l-new-york-age">
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
                   <label htmlFor="l-new-york-flight">
                    Flight number (optional)
                  </label>
                   <input id="l-new-york-flight" type="text" placeholder="e.g. AA1423" autoComplete="off" />
                 </div>
               </div>
               <label className="check" htmlFor="l-new-york-diff">
                <input id="l-new-york-diff" type="checkbox" />
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
