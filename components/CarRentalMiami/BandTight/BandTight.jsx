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
                The toll situation, which catches everyone
              </h2>
               <p>
                South Florida's express lanes and most of the major routes are electronic only. There are no toll booths to pay at. Every rental car is enrolled in a toll programme by the rental company, which passes on the tolls plus a daily service charge on the days you use them. Ask what that daily charge is at the counter — it is the single most common surprise on a Miami rental invoice.
              </p>
               <h2 className="h-2">
                Getting to the beach
              </h2>
               <p>
                Three causeways connect the mainland to Miami Beach: the MacArthur, the Julia Tuttle and the Venetian. The Venetian is the pleasant one and carries a small toll. Traffic across all three backs up badly on Friday evenings and on event weekends — Art Basel week in particular.
              </p>
               <p>
                Parking in South Beach is metered, enforced aggressively, and most hotels charge separately for valet. If you are staying on the beach for several nights and not driving daily, consider collecting the car on the day you actually need it rather than the day you land.
              </p>
               <h2 className="h-2">
                Day trips worth the rental
              </h2>
               <ul>
                 <li>
                  <strong>
                    The Keys
                  </strong>
                  — Overseas Highway to Key Largo is about an hour, Key West around three and a half. Leave early; it is a single road and it fills up.
                </li>
                 <li>
                  <strong>
                    Everglades
                  </strong>
                  — Shark Valley and the Tamiami Trail, roughly an hour west.
                </li>
                 <li>
                  <strong>
                    Fort Lauderdale and Palm Beach
                  </strong>
                  — 45 minutes and 90 minutes north on I-95 respectively.
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
                or
                <a href="/cars/economy/" data-link="">
                  economy
                </a>
                car handles everything here — the terrain is flat and the parking is tight. A convertible is a genuine pleasure on the Overseas Highway if the budget allows. Rain in summer arrives hard and fast; check the wipers before leaving the lot.
              </p>
               <table className="fact-table">
                 <caption className="sr-only">
                  Renting in Miami at a glance
                </caption>
                 <tbody>
                   <tr>
                    <th scope="row">
                      Best class
                    </th>
                    <td>
                      Economy or compact; convertible for the Keys
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Tolls
                    </th>
                    <td>
                      All-electronic; rental company charges tolls plus a daily service fee
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Airport
                    </th>
                    <td>
                      Miami International (MIA), Fort Lauderdale (FLL) 45 minutes north
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Season note
                    </th>
                    <td>
                      Hurricane season runs June to November; check the rental company's weather policy
                    </td>
                  </tr>
                 </tbody>
               </table>
             </div>
           </div>
           <aside className="detail-aside" data-book-panel="">
             <div className="book-card" data-location-book="" data-location="Miami, FL">
               <p className="eyebrow">
                Book in Miami
              </p>
               <h2 className="h-3">
                Check availability
              </h2>
               <p className="card-note">
                Live rates from our rental partners for these dates.
              </p>
               <div className="field" data-validate="l-miami-pickup">
                 <label htmlFor="l-miami-pickup">
                  Pick-up location
                </label>
                 <input id="l-miami-pickup" type="text" value="Miami, FL" autoComplete="off" required />
                 <p className="field-error">
                  Tell us where you're collecting the car.
                </p>
               </div>
               <div className="field-row">
                 <div className="field" data-validate="l-miami-from">
                  <label htmlFor="l-miami-from">
                    Pick-up date & time
                  </label>
                  <input id="l-miami-from" type="datetime-local" required />
                  <p className="field-error">
                    Choose a pick-up date.
                  </p>
                </div>
                 <div className="field" data-validate="l-miami-to">
                  <label htmlFor="l-miami-to">
                    Return date & time
                  </label>
                  <input id="l-miami-to" type="datetime-local" required />
                  <p className="field-error">
                    Choose a return date after the pick-up.
                  </p>
                </div>
               </div>
               <div className="field-row">
                 <div className="field">
                   <label htmlFor="l-miami-age">
                    Driver age
                  </label>
                   <select id="l-miami-age">
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
                   <label htmlFor="l-miami-flight">
                    Flight number (optional)
                  </label>
                   <input id="l-miami-flight" type="text" placeholder="e.g. AA1423" autoComplete="off" />
                 </div>
               </div>
               <label className="check" htmlFor="l-miami-diff">
                <input id="l-miami-diff" type="checkbox" />
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
