import './Band3.css';
export default function Band3() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2" id="faq-iah-airport">
            Renting at IAH
          </h2>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          At this airport
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              How far is IAH from downtown Houston?
            </summary>
             <div className="faq-a">
              <p>
                About 23 miles, which is 30 to 45 minutes depending on traffic and whether you take the Hardy Toll Road. That distance is the main reason visitors rent here rather than relying on rideshare.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Is the rental facility on the airport?
            </summary>
             <div className="faq-a">
              <p>
                Yes — a consolidated facility served by free shuttles from the ground transportation area of each terminal. All the major brands are in the one building.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Which toll system covers Houston?
            </summary>
             <div className="faq-a">
              <p>
                EZ TAG, run by the Harris County Toll Road Authority. The Sam Houston Tollway ring road and the Hardy Toll Road are the ones you are most likely to use from IAH, and both are electronic.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Should I rent at IAH or Hobby?
            </summary>
             <div className="faq-a">
              <p>
                Whichever you fly into. Both have proper rental operations; Hobby is closer to downtown and smaller, IAH has more inventory. There is rarely a reason to travel between the two to collect a car.
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
