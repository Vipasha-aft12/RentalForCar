import './MobileCallBar.css';

export default function MobileCallBar() {
  return (
    <div className="mbar">
      <div className="mbar-trust">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2 4 6v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V6z"></path>
          <path d="M9 12l2 2 4-4"></path>
        </svg>
        Independent agency · real people · 7 days a week
      </div>
      <a className="callpill" href="tel:+18557619153">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1l-2.3 2.2Z"></path>
        </svg>
        +1 (855) 761-9153
      </a>
    </div>
  );
}
