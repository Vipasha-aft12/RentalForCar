import './Band3.css';
export default function Band3() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2" id="faq-dfw-airport">
            Renting at DFW
          </h2>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          At this airport
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              Where is the DFW Rental Car Center?
            </summary>
             <div className="faq-a">
              <p>
                A single building off the terminal area, holding all the rental brands. Free shuttles run from the lower level of each terminal continuously, so the pick-up is the same whichever terminal you land in.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Do I need a TollTag driving from DFW?
            </summary>
             <div className="faq-a">
              <p>
                Most Dallas-area toll roads take no cash at all, so you need either the rental company toll programme or acceptance that plates will be billed with an administration fee added to each crossing. On a week of local driving the programme usually wins.
              </p>
            </div>
           </details>
           <details>
             <summary>
              How long should I allow between landing and driving away?
            </summary>
             <div className="faq-a">
              <p>
                Thirty to forty minutes from wheels down is realistic with checked bags: the walk to the shuttle, the ride, the counter and the walk to the bay. DFW is efficient but it is also very large.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Is DFW or Dallas Love Field better for renting?
            </summary>
             <div className="faq-a">
              <p>
                DFW has far more inventory and a proper consolidated centre. Love Field is closer to downtown Dallas and quicker to get out of, but with fewer vehicles. If your flights allow either, DFW is the safer bet for availability.
              </p>
            </div>
           </details>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          Booking with RentalForCar
        </h3>
         <div className="faq">
           <details>
             <summary>
              What does RentalForCar charge, and when?
            </summary>
             <div className="faq-a">
              <p>
                A deposit against the rental plus our service fee is taken when you book, both itemised before you pay. The remaining balance, local taxes, airport fees and any extras are settled at the counter with the rental company.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Do you own the cars?
            </summary>
             <div className="faq-a">
              <p>
                No. RentalForCar is an independent reservation service. Vehicles are supplied and operated by licensed third-party rental companies, and the rental agreement you sign at the counter is between you and that company.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Can I cancel?
            </summary>
             <div className="faq-a">
              <p>
                Free within 24 hours of booking. After that a flat $50 fee applies and the rest of the deposit is refunded to the original payment method.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Will I get the exact model shown?
            </summary>
             <div className="faq-a">
              <p>
                You are guaranteed a vehicle in the class you booked. It may be the model listed or a comparable alternative, which is why every listing says "or similar".
              </p>
            </div>
           </details>
         </div>
       </div>
     </section>
  );
}
