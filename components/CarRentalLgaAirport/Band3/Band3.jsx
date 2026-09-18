import './Band3.css';
export default function Band3() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2" id="faq-lga-airport">
            Renting at LGA
          </h2>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          At this airport
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              Should I rent a car at LaGuardia at all?
            </summary>
             <div className="faq-a">
              <p>
                Only if you are leaving the city. For a Manhattan trip the subway goes everywhere and the car becomes an expensive parking problem. If the Hudson Valley or Long Island is on the plan, collect the car on the morning you head out rather than on arrival.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Are LGA rentals on the airport?
            </summary>
             <div className="faq-a">
              <p>
                No. Unlike JFK, LaGuardia has no consolidated on-airport rental centre. Companies run shuttles from the terminal ground transportation level to nearby branches, so build in extra time both ways.
              </p>
            </div>
           </details>
           <details>
             <summary>
              What is the Manhattan congestion charge and will I pay it?
            </summary>
             <div className="faq-a">
              <p>
                A charge applied to vehicles entering Manhattan below 60th Street. It is collected electronically and is separate from bridge and tunnel tolls. If your route takes you into lower or midtown Manhattan, expect it on the rental bill or through the toll programme.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Is JFK a better airport to rent from?
            </summary>
             <div className="faq-a">
              <p>
                Generally yes, if the flights work. JFK has a consolidated rental centre reached by AirTrain, more vehicles on site and longer counter hours. We have a separate guide for renting at JFK.
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
