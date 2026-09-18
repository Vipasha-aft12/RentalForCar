import './Band3.css';
export default function Band3() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2" id="faq-phl-airport">
            Renting at PHL
          </h2>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          At this airport
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              Are the rental cars at PHL walkable from the terminal?
            </summary>
             <div className="faq-a">
              <p>
                No. The rental facility is off-terminal and reached by a free shuttle from the Commercial Transportation area outside baggage claim. Allow fifteen minutes from the carousel to the counter, more with checked bags and a family.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Which toll device do I need driving out of Philadelphia?
            </summary>
             <div className="faq-a">
              <p>
                E-ZPass covers Pennsylvania, New Jersey, Delaware and New York, so one device handles almost any route you are likely to drive from PHL. The rental company will offer their own transponder with a daily fee — worth doing the arithmetic on short rentals.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Is it cheaper to rent away from the airport?
            </summary>
             <div className="faq-a">
              <p>
                Sometimes, because airport concession fees are added to on-airport rentals. Against that you pay for the trip into the city and you collect during counter opening hours rather than at any time. On a rental of three days or more the airport premium is usually worth the convenience.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Can I drive a PHL rental into New York City?
            </summary>
             <div className="faq-a">
              <p>
                Yes, though read the agreement on geographic restrictions. Manhattan south of 60th Street now has a congestion charge on top of bridge and tunnel tolls, and it is billed through the same electronic system.
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
