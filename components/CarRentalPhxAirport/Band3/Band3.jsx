import './Band3.css';
export default function Band3() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2" id="faq-phx-airport">
            Renting at PHX
          </h2>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          At this airport
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              How do I get to the PHX Rental Car Center?
            </summary>
             <div className="faq-a">
              <p>
                The PHX Sky Train, free from both terminals, runs directly to the Rental Car Center. It is a train rather than a bus, so it is unaffected by airport road traffic — usually quicker and more predictable than a shuttle.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Are there tolls to worry about in Arizona?
            </summary>
             <div className="faq-a">
              <p>
                Essentially none. Arizona runs no significant toll roads, so you can decline the rental toll programme here with confidence — unusual among the big sun-belt airports.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Can I drive a Phoenix rental to the Grand Canyou or Sedona?
            </summary>
             <div className="faq-a">
              <p>
                Yes, and both are standard day trips — Sedona around two hours, the South Rim around three and a half. Check the vehicle over before a long desert drive and carry water; mobile coverage is patchy in stretches.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Does summer heat affect what I should rent?
            </summary>
             <div className="faq-a">
              <p>
                It affects how you use it. Any modern rental will have working air conditioning, but parking in shade, a windscreen shade and never leaving anyone or anything in the car matter far more in July in Phoenix than the class of vehicle.
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
