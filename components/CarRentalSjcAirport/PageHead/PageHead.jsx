import './PageHead.css';
export default function PageHead() {
  return (
    <section className="page-head">
       <div className="wrap">
         <nav className="crumbs" aria-label="Breadcrumb">
          <a href="/" data-link="">
            Home
          </a>
          <span>
            /
          </span>
          <a href="/locations/" data-link="">
            Locations
          </a>
          <span>
            /
          </span>
          SJC Airport
        </nav>
         <div className="detail-layout">
           <div className="detail-main">
             <p className="eyebrow">
              SJC · San Jose, CA
            </p>
             <h1 className="h-1">
              Car rental at SJC Airport
            </h1>
             <p className="lede">
              SJC is the quiet alternative to SFO: smaller, quicker, rental cars close to the terminal, and better placed for Silicon Valley and the drive south.
            </p>
             <div style={{marginTop: '22px', display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
               <a className="btn btn-primary" href="tel:+18778516014" data-link="">
                Check availability
                <svg className="arrow" width="18" height="18" aria-hidden="true">
                  <use href="#i-car" xlinkHref="#i-car"></use>
                </svg>
              </a>
               <a className="btn btn-ghost" href="tel:+18778516014">
                Call (877) 851-6014
              </a>
             </div>
             <ul className="trust-row" style={{marginTop: '24px'}}>
               <li>
                <svg width="15" height="15" aria-hidden="true">
                  <use href="#i-clock" xlinkHref="#i-clock"></use>
                </svg>
                Desk open 24/7
              </li>
               <li>
                <svg width="15" height="15" aria-hidden="true">
                  <use href="#i-tick" xlinkHref="#i-tick"></use>
                </svg>
                Deposit and balance shown upfront
              </li>
               <li>
                <svg width="15" height="15" aria-hidden="true">
                  <use href="#i-shield" xlinkHref="#i-shield"></use>
                </svg>
                Free cancellation for 24 hours
              </li>
             </ul>
           </div>
           <aside className="detail-aside" data-book-panel="">
             <div className="book-card" data-location-book="" data-location="San Jose Mineta International Airport (SJC)">
               <p className="eyebrow">
                Book at SJC
              </p>
               <h2 className="h-3">
                Check availability
              </h2>
               <p className="card-note">
                Live rates from our rental partners for these dates.
              </p>
               <div className="field" data-validate="l-sjc-airport-pickup">
                 <label htmlFor="l-sjc-airport-pickup">
                  Pick-up location
                </label>
                 <input id="l-sjc-airport-pickup" type="text" value="San Jose Mineta International Airport (SJC)" autoComplete="off" required />
                 <p className="field-error">
                  Tell us where you're collecting the car.
                </p>
               </div>
               <div className="field-row">
                 <div className="field" data-validate="l-sjc-airport-from">
                  <label htmlFor="l-sjc-airport-from">
                    Pick-up date & time
                  </label>
                  <input id="l-sjc-airport-from" type="datetime-local" required />
                  <p className="field-error">
                    Choose a pick-up date.
                  </p>
                </div>
                 <div className="field" data-validate="l-sjc-airport-to">
                  <label htmlFor="l-sjc-airport-to">
                    Return date & time
                  </label>
                  <input id="l-sjc-airport-to" type="datetime-local" required />
                  <p className="field-error">
                    Choose a return date after the pick-up.
                  </p>
                </div>
               </div>
               <div className="field-row">
                 <div className="field">
                   <label htmlFor="l-sjc-airport-age">
                    Driver age
                  </label>
                   <select id="l-sjc-airport-age">
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
                   <label htmlFor="l-sjc-airport-flight">
                    Flight number (optional)
                  </label>
                   <input id="l-sjc-airport-flight" type="text" placeholder="e.g. AA1423" autoComplete="off" />
                 </div>
               </div>
               <div className="terms-strip" style={{margin: '4px 0 18px'}}>
                 <p className="terms-title">
                  What you pay
                </p>
                 <ul>
                   <li>
                    Charged today: a deposit against the rental plus the RentalForCar service fee.
                  </li>
                   <li>
                    Due at the counter: the remaining balance, local taxes, airport fees and extras.
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
                You pick the vehicle at the next step.
              </p>
             </div>
           </aside>
         </div>
       </div>
     </section>
  );
}
