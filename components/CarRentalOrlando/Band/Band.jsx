import './Band.css';
export default function Band() {
  return (
    <section className="band mint">
       <div className="wrap" style={{maxWidth: '900px'}}>
         <div className="section-head reveal">
           <p className="eyebrow">
            Questions
          </p>
           <h2 className="h-2">
            Renting a car in Orlando
          </h2>
           <p className="lede">
            The things worth knowing before you book, including who you are booking with and what leaves your account today.
          </p>
         </div>
         <h3 className="h-3" style={{marginBottom: '22px'}}>
          In Orlando
        </h3>
         <div className="faq" style={{marginBottom: '40px'}}>
           <details>
             <summary>
              Do the theme parks charge for parking on top of the rental?
            </summary>
             <div className="faq-a">
              <p>
                Yes, each park charges its own daily parking fee, separate from anything on your rental. Budget for it per day, and check whether your hotel runs a shuttle that makes the car unnecessary on park days.
              </p>
            </div>
           </details>
           <details>
             <summary>
              How heavily tolled is the drive around Orlando?
            </summary>
             <div className="faq-a">
              <p>
                Very. Central Florida runs on SunPass and most cash lanes have gone, including on the routes from the airport to the parks. Settle the toll programme question at the counter rather than discovering it later.
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
              Who am I actually booking with?
            </summary>
             <div className="faq-a">
              <p>
                RentalForCar is an independent car rental reservation service operated by Affluence Hospitality LLC. We are not a rental company and we do not own vehicles. Your car is supplied and operated by a licensed third-party rental company, and the rental agreement you sign at the counter is with them.
              </p>
            </div>
           </details>
           <details>
             <summary>
              What exactly is charged today, and what at the counter?
            </summary>
             <div className="faq-a">
              <p>
                Today: a deposit against the rental plus our service fee, both itemised before you pay. At the counter: the remaining rental balance, local taxes and airport fees, and any extras you add on arrival. Nothing is added after you book that was not shown to you.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Can I cancel, and what does it cost?
            </summary>
             <div className="faq-a">
              <p>
                Free within 24 hours of booking. After that a flat $50 fee applies and the rest of your deposit is refunded to the original payment method. No cancellation window is hidden in the small print.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Will I get the exact model in the photograph?
            </summary>
             <div className="faq-a">
              <p>
                You are guaranteed a vehicle in the class you booked. It may be that model or a comparable alternative, which is why every listing says "or similar". If you need a specific model for a specific reason, call and we will tell you honestly whether it can be confirmed.
              </p>
            </div>
           </details>
           <details>
             <summary>
              Do you take card details on the site?
            </summary>
             <div className="faq-a">
              <p>
                No. Card details are entered on a secure payment page, not in our forms, and we never handle or store card numbers ourselves. We will never ask for a full card number by email, chat or text.
              </p>
            </div>
           </details>
           <details>
             <summary>
              What happens if something goes wrong at the counter?
            </summary>
             <div className="faq-a">
              <p>
                Call us on the number at the top of the page with your booking reference. We deal with the rental company on your behalf — a vehicle class that is unavailable, a charge you did not agree to, or a booking they cannot find.
              </p>
            </div>
           </details>
         </div>
       </div>
     </section>
  );
}
