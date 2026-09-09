import './WhatWeCollect.css';
export default function WhatWeCollect() {
  return (
    <section className="sec">
      <div className="wrap prose">
        <h2>
          What we collect
        </h2>
        <p>
          The trip and contact details you give us to arrange a rental — name, email, phone, pick-up city, dates and car preferences — plus basic technical data such as your device and the pages you view.
        </p>
        <h2>
          How we use it
        </h2>
        <p>
          To arrange and confirm your rental with the rental company, to contact you about your booking, to provide support, and to improve the service. We do not sell your personal information.
        </p>
        <h2>
          Sharing
        </h2>
        <p>
          We share only what’s needed to complete your booking with the relevant rental company and our payment and service providers, and where required by law.
        </p>
        <h2>
          Your choices
        </h2>
        <p>
          Ask us to access, correct or delete your information, or to stop marketing contact, by emailing
          <a href="mailto:support@rentalforcar.com">
            support@rentalforcar.com
          </a>
          .
        </p>
        <p className="muted">
          RentalForCar is operated by Affluence Tour and Travels LLC. This page is a general summary, not legal advice.
        </p>
      </div>
    </section>
  );
}
