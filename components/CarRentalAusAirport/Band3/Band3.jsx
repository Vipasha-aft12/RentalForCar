import './Band3.css';
export default function Band3() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2" id="faq-aus-airport">
            Renting at AUS
          </h2>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          At this airport
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              How long does it take to collect a car at AUS?
            </summary>
             <div className="faq-a">
              <p>
                Twenty to thirty minutes in normal conditions — a short shuttle then the counter. During SXSW, ACL, F1 or a UT home game, allow considerably more and expect a queue.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Do I need a toll tag in Austin?
            </summary>
             <div className="faq-a">
              <p>
                It helps. The 183A, the 290 toll road and parts of SH 45 are electronic with no cash option. If you are driving north or using the bypasses, take the toll programme or accept plate billing with fees.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Will I get a car during SXSW or ACL?
            </summary>
             <div className="faq-a">
              <p>
                Only if you book well ahead. Those weeks clear out Austin inventory and rates rise accordingly. If your dates land on a festival or a home game, reserve as early as you can and call if the classes you want are showing as unavailable.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Is Austin walkable enough to skip the car?
            </summary>
             <div className="faq-a">
              <p>
                Downtown and South Congress, yes. Beyond that Austin is spread out with thin transit, and the Hill Country trips that most visitors want to make need a vehicle.
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
