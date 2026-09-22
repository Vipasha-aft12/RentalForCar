'use client';

import { useState, useEffect, useRef } from 'react';
import './CallModal.css';

const PHONE_DISPLAY = '(877) 851-6014';
const PHONE_HREF = 'tel:+18778516014';
const AUTO_OPEN_MS = 8000; // auto-open delay after page load (mobile only)

const OPTIONS = [
  { intent: 'new-booking', label: 'New booking' },
  { intent: 'change', label: 'Change a booking' },
  { intent: 'cancel', label: 'Cancel a booking' },
  { intent: 'protection', label: 'Protection & extras' },
];

export default function CallModal() {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  // Auto-open on mobile after a short delay, every page load.
  useEffect(() => {
    const isMobile = typeof window !== 'undefined'
      && window.matchMedia && window.matchMedia('(max-width: 767px)').matches;
    if (!isMobile) return;
    const t = setTimeout(() => setOpen(true), AUTO_OPEN_MS);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (closeRef.current) closeRef.current.focus();
    try {
      if (window.dataLayer) window.dataLayer.push({ event: 'call_modal_open' });
    } catch (e) {}
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      {/* Mobile-only floating trigger */}
      <button
        type="button"
        className="cmx-fab"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-label="Call to book"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.9 9.8a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
        </svg>
        <span>Call to book</span>
      </button>

      {/* Modal */}
      <div
        className={`cmx-backdrop${open ? ' is-open' : ''}`}
        hidden={!open}
        onClick={(e) => {
          if (e.target.classList.contains('cmx-backdrop')) setOpen(false);
        }}
      >
        <div className="cmx" role="dialog" aria-modal="true" aria-labelledby="cmx-h" aria-describedby="cmx-d">
          <button ref={closeRef} className="cmx-close" type="button" onClick={() => setOpen(false)} aria-label="Close">
            ×
          </button>

          <div className="cmx-head">
            <span className="cmx-mark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 13l1.5-4.5A2 2 0 0 1 8.4 7h7.2a2 2 0 0 1 1.9 1.5L19 13" />
                <path d="M5 13h14v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H8v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4Z" />
                <circle cx="7.5" cy="15.5" r="1" /><circle cx="16.5" cy="15.5" r="1" />
              </svg>
            </span>
            <div>
              <div className="cmx-title">
                <h2 id="cmx-h">RentalForCar</h2>
                <span className="cmx-live"><i></i> Team online</span>
              </div>
              <p className="cmx-sub" id="cmx-d">Speak to a rental specialist about your booking.</p>
            </div>
          </div>

          <div className="cmx-points">
            <span><b>Open 24/7</b></span>
            <span><b>No fee to call</b></span>
            <span><b>A real person, not a bot</b></span>
          </div>

          <p className="cmx-lede">
            Rates, availability and the total due at the counter — gone through with you on the call before
            anything is booked.
          </p>

          <div className="cmx-grid">
            {OPTIONS.map((o) => (
              <a key={o.intent} className="cmx-opt" href={PHONE_HREF} data-cm-intent={o.intent}>
                {o.label}
              </a>
            ))}
          </div>

          <div className="cmx-callrow">
            <a className="cmx-btn" href={PHONE_HREF} data-cm-intent="main">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L7.9 9.8a16 16 0 0 0 6 6l1.4-1.2a2 2 0 0 1 2.1-.5c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2Z" />
              </svg>
              <span className="cmx-num">{PHONE_DISPLAY}</span>
            </a>
            <p className="cmx-fine">
              RentalForCar is an independent car rental reservation service. Vehicles are supplied and operated
              by licensed third-party rental companies. Rates depend on vehicle, location and dates, and are
              confirmed with the rental company before you book. <a href="/terms-and-conditions/">Booking terms</a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
