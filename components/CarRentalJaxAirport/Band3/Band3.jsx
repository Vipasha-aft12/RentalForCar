import './Band3.css';
export default function Band3() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2" id="faq-jax-airport">
            Renting at JAX
          </h2>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          At this airport
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              Do I need a shuttle to reach the rental cars at JAX?
            </summary>
             <div className="faq-a">
              <p>
                No. The counters and the cars are on the ground floor of the parking garage directly opposite the terminal, a short covered walk from baggage claim. It is one of the quickest collections in the state.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Will I need a toll transponder in Jacksonville?
            </summary>
             <div className="faq-a">
              <p>
                Not much for local driving. It matters if you head south — central Florida is heavily tolled on SunPass and most cash lanes have gone, so decide on the rental toll programme if Orlando or the Space Coast is on the itinerary.
              </p>
            </div>
           </details>
           <details>
             <summary>
              How far are the beaches from the airport?
            </summary>
             <div className="faq-a">
              <p>
                Jacksonville Beach and Neptune Beach are 35 to 45 minutes; Amelia Island about 30 minutes north; Ponte Vedra slightly further south. All of them are difficult without a car.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Is JAX a good airport for a one-way rental into Georgia or Orlando?
            </summary>
             <div className="faq-a">
              <p>
                It works, and one-way rentals between Florida and Georgia are common. Expect a one-way fee that varies by company and route — worth asking for it as a separate figure when you call.
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
