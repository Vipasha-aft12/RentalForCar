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
                Collecting the car
              </h2>
               <p>
                Harry Reid International routes all rental traffic through a consolidated rental centre a few minutes from the terminals by shuttle. Expect the shuttle plus a queue at peak arrival times — build in an extra 45 minutes after landing. Several Strip hotels also have rental desks, which are convenient if you only want the car for a day or two of trips.
              </p>
               <h2 className="h-2">
                Parking at the resorts
              </h2>
               <p>
                Most large Strip resorts now charge for self-parking and valet, though policies differ by property and some waive it for loyalty members or hotel guests. Check your specific hotel before assuming it is free — it is one of the more variable costs on a Vegas trip.
              </p>
               <h2 className="h-2">
                Driving in the heat
              </h2>
               <ul>
                 <li>
                  Summer afternoons regularly exceed 105°F. Never leave anyone or any pet in the car, and expect the air conditioning to work hard.
                </li>
                 <li>
                  Carry more water than you think you need on any desert drive. Phone signal disappears in stretches of the surrounding parks.
                </li>
                 <li>
                  Check the tyres before leaving the lot. Heat is punishing on under-inflated tyres at freeway speed.
                </li>
               </ul>
               <h2 className="h-2">
                The trips that justify the rental
              </h2>
               <ul>
                 <li>
                  <strong>
                    Red Rock Canyon
                  </strong>
                  — 30 minutes west, a scenic loop drive.
                </li>
                 <li>
                  <strong>
                    Valley of Fire
                  </strong>
                  — an hour northeast, and the better of the two close options.
                </li>
                 <li>
                  <strong>
                    Zion National Park
                  </strong>
                  — around two and a half hours.
                </li>
                 <li>
                  <strong>
                    Grand Canyon West
                  </strong>
                  — roughly two hours; the South Rim is four and a half.
                </li>
                 <li>
                  <strong>
                    Death Valley
                  </strong>
                  — two hours; avoid in high summer.
                </li>
               </ul>
               <table className="fact-table">
                 <caption className="sr-only">
                  Renting in Las Vegas at a glance
                </caption>
                 <tbody>
                   <tr>
                    <th scope="row">
                      Best class
                    </th>
                    <td>
                      SUV for national park trips; compact for city use
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Airport
                    </th>
                    <td>
                      Harry Reid International (LAS), consolidated rental centre
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Parking
                    </th>
                    <td>
                      Charged at most Strip resorts; policies vary by property
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Watch for
                    </th>
                    <td>
                      Extreme summer heat; mileage caps if you plan long park drives
                    </td>
                  </tr>
                 </tbody>
               </table>
             </div>
           </div>
           <aside className="detail-aside" data-book-panel="">
             <div className="book-card" data-location-book="" data-location="Las Vegas, NV">
               <p className="eyebrow">
                Book in Las Vegas
              </p>
               <h2 className="h-3">
                Check availability
              </h2>
               <p className="card-note">
                Live rates from our rental partners for these dates.
              </p>
               <div className="field" data-validate="l-las-vegas-pickup">
                 <label htmlFor="l-las-vegas-pickup">
                  Pick-up location
                </label>
                 <input id="l-las-vegas-pickup" type="text" value="Las Vegas, NV" autoComplete="off" required />
                 <p className="field-error">
                  Tell us where you're collecting the car.
                </p>
               </div>
               <div className="field-row">
                 <div className="field" data-validate="l-las-vegas-from">
                  <label htmlFor="l-las-vegas-from">
                    Pick-up date & time
                  </label>
                  <input id="l-las-vegas-from" type="datetime-local" required />
                  <p className="field-error">
                    Choose a pick-up date.
                  </p>
                </div>
                 <div className="field" data-validate="l-las-vegas-to">
                  <label htmlFor="l-las-vegas-to">
                    Return date & time
                  </label>
                  <input id="l-las-vegas-to" type="datetime-local" required />
                  <p className="field-error">
                    Choose a return date after the pick-up.
                  </p>
                </div>
               </div>
               <div className="field-row">
                 <div className="field">
                   <label htmlFor="l-las-vegas-age">
                    Driver age
                  </label>
                   <select id="l-las-vegas-age">
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
                   <label htmlFor="l-las-vegas-flight">
                    Flight number (optional)
                  </label>
                   <input id="l-las-vegas-flight" type="text" placeholder="e.g. AA1423" autoComplete="off" />
                 </div>
               </div>
               <label className="check" htmlFor="l-las-vegas-diff">
                <input id="l-las-vegas-diff" type="checkbox" />
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
