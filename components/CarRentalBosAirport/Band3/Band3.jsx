import './Band3.css';
export default function Band3() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2" id="faq-bos-airport">
            Renting at BOS
          </h2>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          At this airport
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              Is there one rental centre at Logan?
            </summary>
             <div className="faq-a">
              <p>
                Yes. Logan consolidated its rental companies into a single Rental Car Center served by free shuttles from all four terminals, which replaced the old arrangement of separate off-airport branches.
              </p>
            </div>
           </details>
           <details>
             <summary>
              How do Massachusetts tolls work?
            </summary>
             <div className="faq-a">
              <p>
                All electronically. The booths are gone from the Mass Pike and the harbour tunnels, and crossings are read from gantries. E-ZPass covers it, as does the rental toll programme; without either the plate is billed with an added fee.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Should I keep a rental car while staying in Boston?
            </summary>
             <div className="faq-a">
              <p>
                Usually not. The T reaches most of what visitors want, streets are difficult, and overnight parking is costly. The common pattern is to see Boston without a car and collect one on the morning you leave for the Cape or New Hampshire.
              </p>
            </div>
           </details>
           <details>
             <summary>
              When is the best time for a New England driving trip from Logan?
            </summary>
             <div className="faq-a">
              <p>
                Late September into mid-October for foliage, which is also when vehicles and hotels are hardest to get. Book early for those weeks — it is the peak of the year for rentals across the region.
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
