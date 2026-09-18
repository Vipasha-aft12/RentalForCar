import './Band3.css';
export default function Band3() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2" id="faq-sat-airport">
            Renting at SAT
          </h2>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          At this airport
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              Are the rental cars close to the SAT terminals?
            </summary>
             <div className="faq-a">
              <p>
                Yes. San Antonio is a compact airport and the rental facility sits adjacent to the terminals, reached on foot or by a brief shuttle depending on which company and terminal. Collection is usually quick.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Are there tolls around San Antonio?
            </summary>
             <div className="faq-a">
              <p>
                Barely any. Unlike Dallas and Houston, San Antonio has no meaningful toll road network, so you can decline the toll programme unless you plan to drive up towards Austin on the tolled sections of SH 130.
              </p>
            </div>
           </details>
           <details>
             <summary>
              How far is the River Walk from the airport?
            </summary>
             <div className="faq-a">
              <p>
                About eight miles, or 15 to 20 minutes by road. It is close enough that some visitors skip the car for a short River Walk trip and rent only for a Hill Country day.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Can I drive a San Antonio rental to Austin?
            </summary>
             <div className="faq-a">
              <p>
                Easily — 80 minutes up I-35, and one of the most common trips from SAT. If you take the SH 130 toll bypass around Austin, that is one of the few places near San Antonio where tolls apply.
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
