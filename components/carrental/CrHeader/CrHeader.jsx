export default function CrHeader() {
  return (
    <header className="site-header">
       <div className="wrap">
         <nav className="nav" aria-label="Primary">
           <a className="brand" href="/" data-link="">
             <svg className="brand-mark" aria-hidden="true">
              <use href="#brand-mark" xlinkHref="#brand-mark"></use>
            </svg>
             <span className="brand-text">
              RentalForCar
              <span className="brand-op">
                Operated by Affluence Hospitality LLC
              </span>
            </span>
           </a>
           <div className="nav-links">
             <a href="/cars/" data-link="">
              Fleet
            </a>
             <a href="/locations/" data-link="">
              Locations
            </a>
             <a href="/how-it-works/" data-link="">
              How it works
            </a>
             <a href="/guides/" data-link="">
              Guides
            </a>
             <a href="/faq/" data-link="">
              FAQ
            </a>
             <a href="/manage-booking/" data-link="">
              Manage booking
            </a>
           </div>
           <div className="nav-actions">
             <a className="nav-tel" href="tel:+18778516014">
               <svg width="16" height="16" aria-hidden="true">
                <use href="#i-phone" xlinkHref="#i-phone"></use>
              </svg>
               <span>
                (877) 851-6014
              </span>
             </a>
             <a className="btn btn-primary btn-sm" href="/book/" data-link="">
              Book a car
            </a>
             <button className="burger" type="button" aria-expanded="false" aria-controls="mobile-panel" aria-label="Open menu" data-burger="">
               <i></i>
              <i></i>
              <i></i>
             </button>
           </div>
         </nav>
       </div>
       <div className="mobile-panel" id="mobile-panel">
         <div>
           <a href="/cars/" data-link="">
            Fleet
          </a>
           <a href="/locations/" data-link="">
            Locations
          </a>
           <a href="/how-it-works/" data-link="">
            How it works
          </a>
           <a href="/guides/" data-link="">
            Guides
          </a>
           <a href="/faq/" data-link="">
            FAQ
          </a>
           <a href="/manage-booking/" data-link="">
            Manage booking
          </a>
           <a href="/contact/" data-link="">
            Contact
          </a>
           <a className="btn btn-dark btn-block" href="tel:+18778516014">
            Call (877) 851-6014
          </a>
           <a className="btn btn-primary btn-block" href="/book/" data-link="">
            Book a car
          </a>
         </div>
       </div>
     </header>
  );
}
