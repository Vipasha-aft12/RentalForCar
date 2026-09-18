export default function CrMobileMenu() {
  return (
    <div className="cm-backdrop" data-call-modal="" hidden>
       <div className="cm" role="dialog" aria-modal="true" aria-labelledby="cm-h" aria-describedby="cm-d">
         <button className="cm-close" type="button" data-cm-close="" aria-label="Close">
          ×
        </button>
         <div className="cm-head">
           <span className="cm-mark">
            <svg width="26" height="26" aria-hidden="true">
              <use href="#i-car" xlinkHref="#i-car"></use>
            </svg>
          </span>
           <div>
             <div className="cm-title">
               <h2 id="cm-h">
                RentalForCar
              </h2>
               <span className="cm-live">
                <i></i>
                Team online
              </span>
             </div>
             <p className="cm-sub" id="cm-d" data-cm-context="">
              Speak to a rental specialist about your booking.
            </p>
           </div>
         </div>
         <div className="cm-points">
           <span>
            <svg width="15" height="15" aria-hidden="true">
              <use href="#i-clock" xlinkHref="#i-clock"></use>
            </svg>
             <b>
              Open 24/7
            </b>
          </span>
           <span>
            <svg width="15" height="15" aria-hidden="true">
              <use href="#i-tick" xlinkHref="#i-tick"></use>
            </svg>
             <b>
              No fee to call
            </b>
          </span>
           <span>
            <svg width="15" height="15" aria-hidden="true">
              <use href="#i-shield" xlinkHref="#i-shield"></use>
            </svg>
             <b>
              A real person, not a bot
            </b>
          </span>
         </div>
         <p className="cm-lede">
          Rates, availability and the total due at the counter — gone through with you on the call before anything is booked.
        </p>
         <div className="cm-grid">
           <a className="cm-opt" href="tel:+18778516014" data-cm-intent="new-booking">
             <span className="cm-ico">
              <svg width="19" height="19" aria-hidden="true">
                <use href="#i-car" xlinkHref="#i-car"></use>
              </svg>
            </span>
             <span>
              New booking
            </span>
           </a>
           <a className="cm-opt" href="tel:+18778516014" data-cm-intent="change">
             <span className="cm-ico">
              <svg width="19" height="19" aria-hidden="true">
                <use href="#i-pen" xlinkHref="#i-pen"></use>
              </svg>
            </span>
             <span>
              Change a booking
            </span>
           </a>
           <a className="cm-opt" href="tel:+18778516014" data-cm-intent="cancel">
             <span className="cm-ico">
              <svg width="19" height="19" aria-hidden="true">
                <use href="#i-slash" xlinkHref="#i-slash"></use>
              </svg>
            </span>
             <span>
              Cancel a booking
            </span>
           </a>
           <a className="cm-opt" href="tel:+18778516014" data-cm-intent="protection">
             <span className="cm-ico">
              <svg width="19" height="19" aria-hidden="true">
                <use href="#i-shield" xlinkHref="#i-shield"></use>
              </svg>
            </span>
             <span>
              Protection & extras
            </span>
           </a>
         </div>
         <div className="cm-callrow">
           <a className="btn btn-primary" href="tel:+18778516014" data-cm-intent="main">
             <svg width="18" height="18" aria-hidden="true">
              <use href="#i-phone" xlinkHref="#i-phone"></use>
            </svg>
             <span className="cm-num">
              (877) 851-6014
            </span>
           </a>
           <p className="cm-fine" data-cm-offer="">
            RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated
        by licensed third-party rental companies. Rates depend on vehicle, location and dates, and are
        confirmed with the rental company before you book.
            <a href="/terms/" data-link="">
              Booking terms
            </a>
           </p>
         </div>
       </div>
     </div>
  );
}
