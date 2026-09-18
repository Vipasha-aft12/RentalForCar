import './Band4.css';
export default function Band4() {
  return (
    <section className="band dark">
       <div className="wrap" style={{textAlign: 'center', maxWidth: '780px'}}>
         <p className="eyebrow" style={{justifyContent: 'center'}}>
          Jacksonville, FL
        </p>
         <h2 className="h-2">
          Book a car at JAX Airport
        </h2>
         <p className="lede" style={{margin: '12px auto 24px'}}>
          New booking, a change or a cancellation — talk to the desk, or search your dates and finish it online.
        </p>
         <div style={{display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap'}}>
           <a className="btn btn-primary" href="tel:+18778516014">
            Call (877) 851-6014
          </a>
           <a className="btn btn-ghost" href="/book/" data-link="">
            Search online
          </a>
         </div>
         <p className="card-note" style={{marginTop: '20px'}}>
          RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated by licensed third-party rental companies. We are not affiliated with Jacksonville International Airport.
        </p>
       </div>
     </section>
  );
}
