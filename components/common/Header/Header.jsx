import './Header.css';

export default function Header() {
  return (
    <header className="hd">
      <div className="wrap">
        <a className="brand" href="/">
          <svg viewBox="0 0 40 40" width="30" height="30" aria-hidden="true">
            <rect width="40" height="40" rx="11" fill="#C7F36B"></rect>
            <g transform="translate(8 8)" fill="none" stroke="#101820" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
              <circle cx="7" cy="17" r="2"></circle>
              <circle cx="17" cy="17" r="2"></circle>
              <path d="M9 17h6"></path>
            </g>
          </svg>
          <span className="word">
            Rental
            <i>
              ForCar
            </i>
          </span>
        </a>
        <nav className="nav">
          <a href="/vehicles/">
            Vehicles
          </a>
          <a href="/car-rental/">
            Airports
          </a>
          <a href="/rental-requirements/">
            Requirements
          </a>
          <a href="/how-we-work/">
            How we work
          </a>
          <a href="/about/">
            About
          </a>
        </nav>
        <span className="spacer"></span>
        <a className="callpill" href="tel:+18557619153">
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z"></path>
          </svg>
          +1 (855) 761-9153
        </a>
      </div>
    </header>
  );
}
