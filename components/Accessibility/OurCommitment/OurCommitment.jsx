import './OurCommitment.css';
export default function OurCommitment() {
  return (
    <section className="sec">
      <div className="wrap prose">
        <h2>
          Our commitment
        </h2>
        <p>
          We aim to meet WCAG 2.1 AA: readable text and colour contrast, keyboard-operable controls, labelled form fields, and content that works with screen readers. Accessibility is ongoing work, not a box we’ve ticked once.
        </p>
        <h2>
          Tell us if something doesn’t work
        </h2>
        <p>
          If any part of this site is hard to use with assistive technology, email
          <a href="mailto:support@rentalforcar.com">
            support@rentalforcar.com
          </a>
          or call
          <a href="tel:+18778516014">
            +1 (877) 851-6014
          </a>
          and we’ll help directly and fix it. If you’d rather not use the website at all, you can do the entire booking by phone.
        </p>
        <div className="disclose">
          RentalForCar is an independent booking agent, not a rental car company, and is not affiliated with any rental brand.  Rates and availability come from the rental companies; deposits and local charges are handled at the counter.
        </div>
      </div>
    </section>
  );
}
