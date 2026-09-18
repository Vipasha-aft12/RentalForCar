import './Band3.css';
export default function Band3() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2" id="faq-ord-airport">
            Renting at ORD
          </h2>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          At this airport
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              Where are the rental cars at O’Hare?
            </summary>
             <div className="faq-a">
              <p>
                In the Multi-Modal Facility, reached by the free Airport Transit System train from any terminal. All the brands are in the one building, alongside the regional bus and train connections.
              </p>
            </div>
           </details>
           <details>
             <summary>
              How do Illinois tolls work now that cash has gone?
            </summary>
             <div className="faq-a">
              <p>
                Entirely electronically. Illinois tollways removed cash collection in 2020 and there are no booths to pay at. Either take the rental toll programme, or pay online within the stated window after each trip, or expect violation notices with fees attached.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Is a car useful in Chicago itself?
            </summary>
             <div className="faq-a">
              <p>
                Rarely. The Blue Line runs from O’Hare into the Loop, the city has dense transit and downtown parking is expensive. Rent for the trips out — Milwaukee, Madison, Michigan’s lakeshore, Starved Rock.
              </p>
            </div>
           </details>
           <details>
             <summary>
              What about winter driving from O’Hare?
            </summary>
             <div className="faq-a">
              <p>
                Take it seriously between December and March. Ask the counter what the vehicle is equipped with, allow far more time than the map suggests, and remember that a cancelled flight and a closed interstate often happen on the same day.
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
