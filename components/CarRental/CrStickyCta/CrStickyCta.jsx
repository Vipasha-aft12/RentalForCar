export default function CrStickyCta() {
  return (
    <div className="sticky-cta" data-sticky="">
       <a className="btn btn-ghost" href="tel:+18778516014" aria-label="Call RentalForCar">
        <svg width="18" height="18" aria-hidden="true">
          <use href="#i-phone" xlinkHref="#i-phone"></use>
        </svg>
        Call
      </a>
       <a className="btn btn-primary" href="/book/" data-link="">
        Book a car
      </a>
     </div>
  );
}
