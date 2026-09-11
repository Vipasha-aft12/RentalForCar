import './Footer.css';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="wrap">
        <div className="ft-grid">
          <div>
            <div className="word">
              Rental
              <i>
                ForCar
              </i>
            </div>
            <p className="thesis">
              We book car rentals with third-party rental companies and read the counter fine print first — the card, the deposit and the age rule at your exact pick-up — so you drive away instead of arguing at the desk.
            </p>
            <a className="fcall" href="tel:+18778516014">
              +1 (877) 851-6014
            </a>
            <p className="thesis">
              Reservations 7 days a week ·
              <a href="mailto:support@rentalforcar.com" style={{color: '#c5d0c9'}}>
                support@rentalforcar.com
              </a>
            </p>
          </div>
          <div>
            <h4>
              Book
            </h4>
            <a href="/find-a-car/">
              Find a car
            </a>
            <a href="/car-rental/">
              Airport pick-up
            </a>
            <a href="/vehicles/">
              Vehicle types
            </a>
            <a href="/how-we-work/">
              How we work
            </a>
          </div>
          <div>
            <h4>
              Requirements
            </h4>
            <a href="/rental-requirements/">
              Rental requirements
            </a>
            <a href="/car-rental-with-debit-card/">
              Debit card
            </a>
            <a href="/car-rental-no-credit-card/">
              No credit card
            </a>
            <a href="/under-25-car-rental/">
              Under 25
            </a>
            <a href="/car-rental-deposit-requirements/">
              Deposits
            </a>
          </div>
          <div>
            <h4>
              Company
            </h4>
            <a href="/about/">
              About
            </a>
            <a href="/contact/">
              Contact
            </a>
            <a href="/privacy-policy/">
              Privacy
            </a>
            <a href="/terms-and-conditions/">
              Terms
            </a>
            <a href="/cancellation-and-refunds/">
              Cancellation
            </a>
          </div>
        </div>
        <div className="ft-legal">
          RentalForCar is an independent car rental agency and booking agent operated by Affluence Hospitality LLC, 1621 Central Ave, Cheyenne, WY 82001. We are not a rental car company, we do not own or operate a vehicle fleet, and we are not affiliated with or endorsed by any rental brand. Any amount paid to RentalForCar at booking is applied toward your rental; deposits and local charges are handled by the rental company at the counter.
        </div>
      </div>
    </footer>
  );
}
