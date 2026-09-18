import './Band3.css';
export default function Band3() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2" id="faq-atl-airport">
            Renting at ATL
          </h2>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          At this airport
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              How do I reach the rental cars at ATL?
            </summary>
             <div className="faq-a">
              <p>
                The ATL SkyTrain runs from the Domestic Terminal to the Rental Car Center, free and every few minutes. If you arrive at the International Terminal, take the free inter-terminal shuttle or the plane train first.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Do I need a Peach Pass?
            </summary>
             <div className="faq-a">
              <p>
                Only for the express lanes on I-85 and I-75, which are optional — the free general lanes run alongside. Unlike Dallas or Orlando you can drive Atlanta comfortably without any toll device at all.
              </p>
            </div>
           </details>
           <details>
             <summary>
              When is Atlanta traffic worst?
            </summary>
             <div className="faq-a">
              <p>
                Roughly 7–9.30am and 4–7pm on weekdays, on I-285, I-75 and I-85. A 20-minute drive downtown can become 50. Landing outside those windows changes the trip more than any vehicle choice.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Is a car worth it if I am staying downtown?
            </summary>
             <div className="faq-a">
              <p>
                If you are downtown and Midtown only, MARTA plus walking will cover it and hotel parking is an added cost. Rent if you are visiting the suburbs, Stone Mountain, or heading out of state.
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
