import './Band3.css';
export default function Band3() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2" id="faq-sea-airport">
            Renting at SEA
          </h2>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          At this airport
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              How do I reach the rental cars at Sea-Tac?
            </summary>
             <div className="faq-a">
              <p>
                A free shuttle from the terminal to the Consolidated Rental Car Facility, running around the clock. All the major brands are in the one building, so the counter queue is the only variable.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Which Seattle roads are tolled?
            </summary>
             <div className="faq-a">
              <p>
                The SR 520 bridge across Lake Washington and the SR 99 tunnel under downtown are both all-electronic with no cash option. The I-405 express lanes are optional. A Good To Go! pass or the rental toll programme covers them.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Do I need a car if I am staying in Seattle?
            </summary>
             <div className="faq-a">
              <p>
                Not for the city itself — Link light rail runs from the airport to downtown and the core is walkable. Rent for Rainier, the Olympics, the wine country around Woodinville or a ferry trip to the islands.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Can I take a rental car on a Washington State Ferry?
            </summary>
             <div className="faq-a">
              <p>
                Generally yes, and it is one of the best reasons to have a car here. Check your rental agreement for any restriction on ferries, arrive early in summer because vehicle queues form, and expect to pay the ferry fare separately.
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
