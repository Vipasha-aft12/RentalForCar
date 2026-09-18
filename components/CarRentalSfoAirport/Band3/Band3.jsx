import './Band3.css';
export default function Band3() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2" id="faq-sfo-airport">
            Renting at SFO
          </h2>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          At this airport
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              How do I get to the SFO Rental Car Center?
            </summary>
             <div className="faq-a">
              <p>
                Take the AirTrain Blue line from any terminal. It is free, runs 24 hours and goes directly to the Rental Car Center where every brand is located.
              </p>
            </div>
           </details>
           <details>
             <summary>
              How do bridge tolls work if I am renting?
            </summary>
             <div className="faq-a">
              <p>
                All Bay Area bridges are cashless. With FasTrak or the rental toll programme the crossing is billed electronically; without one the plate is photographed and billed with the rental company administration fee added. The Golden Gate in particular has no cash option at all.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Do I need a car in San Francisco itself?
            </summary>
             <div className="faq-a">
              <p>
                Often not. BART from SFO reaches downtown directly, the city is compact and parking is costly. The strong case for renting is the trips out — Napa, Sonoma, Half Moon Bay, Monterey and Yosemite.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Is SFO or Oakland better for renting?
            </summary>
             <div className="faq-a">
              <p>
                SFO has the larger consolidated centre and more inventory. Oakland can be quicker to leave and is better placed for the east bay. For most visitors heading to the city or the wine country, SFO is simpler.
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
