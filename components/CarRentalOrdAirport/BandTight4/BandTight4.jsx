import './BandTight4.css';
export default function BandTight4() {
  return (
    <section className="band-tight">
       <div className="wrap">
         <div className="book-card" style={{maxWidth: '760px', margin: '0 auto', textAlign: 'center'}}>
           <h2 className="h-3">
            Want us to check ORD for your dates?
          </h2>
           <p className="card-note" style={{margin: '8px 0 18px'}}>
            Tell the desk your dates and the class you want and we will check what our rental partners have at O'Hare Airport, with the deposit and the counter balance quoted separately.
          </p>
           <a className="btn btn-primary" href="tel:+18778516014">
            Call (877) 851-6014
            <svg className="arrow" width="18" height="18" aria-hidden="true">
              <use href="#i-car" xlinkHref="#i-car"></use>
            </svg>
          </a>
         </div>
       </div>
     </section>
  );
}
