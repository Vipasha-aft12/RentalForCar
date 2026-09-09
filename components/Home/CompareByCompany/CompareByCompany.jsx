'use client';

import { useRef } from 'react';
import { COMPANIES } from '@/lib/companies';
import './CompareByCompany.css';

export default function CompareByCompany() {
  const trackRef = useRef(null);

  const scrollByCards = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('.cmp-card');
    const step = card ? card.offsetWidth + 18 : 320;
    el.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <section className="sec tint cmp">
      <div className="wrap">
        <div className="cmp-head">
          <div>
            <span className="eyebrow">By brand</span>
            <h2>Compare a rental company by name</h2>
            <p className="lede">
              Most people arrive with a brand already in mind. Each page below sets out what that
              company is known for, the classes travellers ask us about most, and the counter terms
              worth settling before you pay.
            </p>
            <p className="muted cmp-note">
              RentalForCar is an independent travel agency. We are not any of these companies, we are
              not affiliated with or endorsed by them, and we cannot alter a booking one of them
              already holds. We take new bookings only.
            </p>
          </div>
          <div className="cmp-nav" aria-hidden="true">
            <button type="button" className="cmp-arrow" onClick={() => scrollByCards(-1)} aria-label="Previous companies">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button type="button" className="cmp-arrow" onClick={() => scrollByCards(1)} aria-label="Next companies">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <div className="cmp-track" ref={trackRef}>
          {COMPANIES.map((c) => (
            <a key={c.slug} className="cmp-card" href={`/${c.slug}/`}>
              <span className="cmp-badge" aria-hidden="true">{c.letter}</span>
              <span className="cmp-body">
                <span className="cmp-name">{c.name}</span>
                <span className="cmp-blurb">{c.blurb}</span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
