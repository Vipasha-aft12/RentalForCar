export default function CrFooter() {
  return (
    <footer className="site-footer">
       <div className="wrap">
         <div className="foot-grid">
           <div className="foot-col">
             <a className="brand" href="/" data-link="" style={{color: 'var(--ivory)', marginBottom: '14px'}}>
               <svg className="brand-mark" aria-hidden="true">
                <use href="#brand-mark" xlinkHref="#brand-mark"></use>
              </svg>
               <span className="brand-text">
                RentalForCar
                <span className="brand-op" style={{color: 'var(--sage)'}}>
                  Operated by Affluence Hospitality LLC
                </span>
              </span>
             </a>
             <p style={{maxWidth: '36ch', margin: '0 0 16px'}}>
              Car rental booking without the counter surprises. Deposit and balance shown before you commit.
            </p>
             <a className="btn btn-primary btn-sm" href="tel:+18778516014">
              <svg width="16" height="16" aria-hidden="true">
                <use href="#i-phone" xlinkHref="#i-phone"></use>
              </svg>
              (877) 851-6014
            </a>
           </div>
           <div className="foot-col">
             <h3>
              Vehicles
            </h3>
             <ul>
               <li>
                <a href="/cars/economy/" data-link="">
                  Economy
                </a>
              </li>
               <li>
                <a href="/cars/compact/" data-link="">
                  Compact
                </a>
              </li>
               <li>
                <a href="/cars/suv/" data-link="">
                  SUV
                </a>
              </li>
               <li>
                <a href="/cars/luxury/" data-link="">
                  Luxury
                </a>
              </li>
               <li>
                <a href="/cars/electric/" data-link="">
                  Electric
                </a>
              </li>
               <li>
                <a href="/cars/vans/" data-link="">
                  Vans
                </a>
              </li>
               <li>
                <a href="/cars/rv-motorhome/" data-link="">
                  RV & motorhome
                </a>
              </li>
               <li>
                <a href="/cars/camper-van/" data-link="">
                  Camper vans
                </a>
              </li>
               <li>
                <a href="/cars/passenger-van/" data-link="">
                  12–15 passenger vans
                </a>
              </li>
               <li>
                <a href="/cars/pickup-truck/" data-link="">
                  Pickup trucks
                </a>
              </li>
               <li>
                <a href="/cars/moving-truck/" data-link="">
                  Moving trucks
                </a>
              </li>
             </ul>
           </div>
           <div className="foot-col">
             <h3>
              Locations
            </h3>
             <ul>
               <li>
                <a href="/car-rental/new-york/" data-link="">
                  New York
                </a>
              </li>
               <li>
                <a href="/car-rental/miami/" data-link="">
                  Miami
                </a>
              </li>
               <li>
                <a href="/car-rental/orlando/" data-link="">
                  Orlando
                </a>
              </li>
               <li>
                <a href="/car-rental/los-angeles/" data-link="">
                  Los Angeles
                </a>
              </li>
               <li>
                <a href="/car-rental/las-vegas/" data-link="">
                  Las Vegas
                </a>
              </li>
               <li>
                <a href="/car-rental/chicago/" data-link="">
                  Chicago
                </a>
              </li>
               <li>
                <a href="/locations/" data-link="">
                  All locations
                </a>
              </li>
             </ul>
           </div>
           <div className="foot-col">
             <h3>
              Company
            </h3>
             <ul>
               <li>
                <a href="/how-it-works/" data-link="">
                  How it works
                </a>
              </li>
               <li>
                <a href="/guides/" data-link="">
                  Guides
                </a>
              </li>
               <li>
                <a href="/faq/" data-link="">
                  FAQ
                </a>
              </li>
               <li>
                <a href="/about/" data-link="">
                  About
                </a>
              </li>
               <li>
                <a href="/contact/" data-link="">
                  Contact
                </a>
              </li>
               <li>
                <a href="/manage-booking/" data-link="">
                  Manage booking
                </a>
              </li>
               <li>
                <a href="/privacy/" data-link="">
                  Privacy policy
                </a>
              </li>
               <li>
                <a href="/terms/" data-link="">
                  Booking terms
                </a>
              </li>
             </ul>
           </div>
         </div>
         <div className="foot-legal">
           <p>
            <strong style={{color: 'var(--ivory)'}}>
              RentalForCar is an independent car rental reservation service.
            </strong>
            We do not own, operate, insure or maintain rental vehicles. Bookings are arranged with licensed third-party rental companies, who supply the vehicle and hold the rental agreement with you. Vehicles are reserved by class; the model shown on any listing is representative and a comparable vehicle in the same class may be supplied. Rates, availability, deposit amounts and local charges are set by the rental company and confirmed at the time of search.
          </p>
           <div className="foot-bottom">
             <span>
              ©
              <span data-year="">
                2026
              </span>
              RentalForCar. All rights reserved.
            </span>
             <span>
              Operated by Affluence Hospitality LLC. Registered business number and address to be added before launch.
              <span style={{opacity: '.55'}}>
                Build 17 Sep 2026, 18:50
              </span>
            </span>
           </div>
         </div>
       </div>
     </footer>
  );
}
