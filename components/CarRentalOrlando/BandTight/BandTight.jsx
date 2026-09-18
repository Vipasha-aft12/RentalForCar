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
                I-4, and how to avoid it
              </h2>
               <p>
                Interstate 4 is the spine of the region and the source of most of its traffic. It backs up in both directions during commuter hours and again in the late afternoon when the parks empty. The 417 and 429 toll roads run parallel and are usually worth the toll to skip it — particularly between the airport and the Disney area.
              </p>
               <h2 className="h-2">
                Parking at the parks
              </h2>
               <p>
                Standard theme park parking is charged per day at each resort, with preferred parking at a higher rate. On-site hotel guests sometimes get parking included — check your reservation before paying it twice. Universal's structures are a long walk from the gates; the parks with tram service run them frequently but the queue at closing is substantial.
              </p>
               <h2 className="h-2">
                Choosing the car
              </h2>
               <p>
                Strollers are the deciding factor. A family with two young children and a double stroller wants a
                <a href="/cars/suv/" data-link="">
                  mid-size SUV
                </a>
                at minimum, and a
                <a href="/cars/vans/" data-link="">
                  minivan
                </a>
                if there are grandparents along. Sliding doors matter more than you would expect in a packed park garage. Sun shades for the windscreen are worth the few dollars — a car left in an Orlando lot all day gets genuinely dangerous inside.
              </p>
               <h2 className="h-2">
                Beyond the parks
              </h2>
               <ul>
                 <li>
                  <strong>
                    Kennedy Space Center
                  </strong>
                  — about an hour east on the 528.
                </li>
                 <li>
                  <strong>
                    Clearwater and the Gulf beaches
                  </strong>
                  — roughly two hours west.
                </li>
                 <li>
                  <strong>
                    Cocoa Beach
                  </strong>
                  — an hour, and the easiest Atlantic beach day from Orlando.
                </li>
               </ul>
               <table className="fact-table">
                 <caption className="sr-only">
                  Renting in Orlando at a glance
                </caption>
                 <tbody>
                   <tr>
                    <th scope="row">
                      Best class
                    </th>
                    <td>
                      Mid-size SUV for families; compact for couples
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Tolls
                    </th>
                    <td>
                      Extensive toll network; transponder recommended
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Airport
                    </th>
                    <td>
                      Orlando International (MCO); Sanford (SFB) for some charter traffic
                    </td>
                  </tr>
                   <tr>
                    <th scope="row">
                      Parking
                    </th>
                    <td>
                      Charged daily at each theme park; check whether your hotel includes it
                    </td>
                  </tr>
                 </tbody>
               </table>
             </div>
           </div>
           <aside className="detail-aside" data-book-panel="">
             <div className="book-card" data-location-book="" data-location="Orlando, FL">
               <p className="eyebrow">
                Book in Orlando
              </p>
               <h2 className="h-3">
                Check availability
              </h2>
               <p className="card-note">
                Live rates from our rental partners for these dates.
              </p>
               <div className="field" data-validate="l-orlando-pickup">
                 <label htmlFor="l-orlando-pickup">
                  Pick-up location
                </label>
                 <input id="l-orlando-pickup" type="text" value="Orlando, FL" autoComplete="off" required />
                 <p className="field-error">
                  Tell us where you're collecting the car.
                </p>
               </div>
               <div className="field-row">
                 <div className="field" data-validate="l-orlando-from">
                  <label htmlFor="l-orlando-from">
                    Pick-up date & time
                  </label>
                  <input id="l-orlando-from" type="datetime-local" required />
                  <p className="field-error">
                    Choose a pick-up date.
                  </p>
                </div>
                 <div className="field" data-validate="l-orlando-to">
                  <label htmlFor="l-orlando-to">
                    Return date & time
                  </label>
                  <input id="l-orlando-to" type="datetime-local" required />
                  <p className="field-error">
                    Choose a return date after the pick-up.
                  </p>
                </div>
               </div>
               <div className="field-row">
                 <div className="field">
                   <label htmlFor="l-orlando-age">
                    Driver age
                  </label>
                   <select id="l-orlando-age">
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
                   <label htmlFor="l-orlando-flight">
                    Flight number (optional)
                  </label>
                   <input id="l-orlando-flight" type="text" placeholder="e.g. AA1423" autoComplete="off" />
                 </div>
               </div>
               <label className="check" htmlFor="l-orlando-diff">
                <input id="l-orlando-diff" type="checkbox" />
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
