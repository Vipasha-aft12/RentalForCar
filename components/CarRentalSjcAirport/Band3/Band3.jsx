import './Band3.css';
export default function Band3() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2" id="faq-sjc-airport">
            Renting at SJC
          </h2>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          At this airport
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              How close are the rental cars to the SJC terminals?
            </summary>
             <div className="faq-a">
              <p>
                Close. The rental garage sits by the terminals, reached on foot or by a brief shuttle depending on the company — noticeably faster than the AirTrain ride at SFO.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Is SJC better than SFO for renting a car?
            </summary>
             <div className="faq-a">
              <p>
                For Silicon Valley, Santa Cruz and the drive south, usually yes: less traffic on exit, no bridge tolls needed and a quicker collection. For the city itself and wine country, SFO is better placed.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Do I need FasTrak from San Jose?
            </summary>
             <div className="faq-a">
              <p>
                Only if you cross a Bay Area bridge, all of which are cashless. Staying in the valley or heading south on Highway 1 involves no tolls at all, so many SJC renters can skip the toll programme.
              </p>
            </div>
           </details>
           <details>
             <summary>
              What is the drive to Big Sur like from San Jose?
            </summary>
             <div className="faq-a">
              <p>
                Around two hours to Carmel and then Highway 1 south from there. It is one of the great American drives and entirely dependent on having a car. Check for road closures on Highway 1 before setting out, as landslides close sections for long periods.
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
