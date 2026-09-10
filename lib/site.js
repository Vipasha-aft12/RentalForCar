// Site-wide constants ported from the design (footer, header, legal identity).
// Edit here once; consumed by Header, Footer, MobileCallBar, JSON-LD.

export const PHONE_DISPLAY = '+1 (855) 761-9153';
export const PHONE_HREF = 'tel:+18557619153';
export const EMAIL = 'support@rentalforcar.com';

export const LEGAL = {
  brand: 'RentalForCar',
  operator: 'Affluence Hospitality LLC',
  address: '1621 Central Ave, Cheyenne, WY 82001',
  disclaimer:
    'RentalForCar is an independent car rental agency and booking agent operated by ' +
    'Affluence Hospitality LLC, 1621 Central Ave, Cheyenne, WY 82001. We are not a ' +
    'rental car company, we do not own or operate a vehicle fleet, and we are not ' +
    'affiliated with or endorsed by any rental brand. Any amount paid to RentalForCar at ' +
    'booking is applied toward your rental; deposits and local charges are handled by the ' +
    'rental company at the counter.',
};

// Primary header navigation (from the design header)
export const NAV = [
  { href: '/vehicles/', label: 'Vehicles' },
  { href: '/car-rental/', label: 'Airports' },
  { href: '/rental-requirements/', label: 'Requirements' },
  { href: '/how-we-work/', label: 'How we work' },
  { href: '/about/', label: 'About' },
];

// Footer link groups (from the design footer)
export const FOOTER_GROUPS = [
  {
    heading: 'Book',
    links: [
      { href: '/find-a-car/', label: 'Find a car' },
      { href: '/car-rental/', label: 'Airport pick-up' },
      { href: '/vehicles/', label: 'Vehicle types' },
      { href: '/how-we-work/', label: 'How we work' },
    ],
  },
  {
    heading: 'Requirements',
    links: [
      { href: '/rental-requirements/', label: 'Rental requirements' },
      { href: '/car-rental-with-debit-card/', label: 'Debit card' },
      { href: '/car-rental-no-credit-card/', label: 'No credit card' },
      { href: '/under-25-car-rental/', label: 'Under 25' },
      { href: '/car-rental-deposit-requirements/', label: 'Deposits' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { href: '/about/', label: 'About' },
      { href: '/contact/', label: 'Contact' },
      { href: '/privacy-policy/', label: 'Privacy' },
      { href: '/terms-and-conditions/', label: 'Terms' },
      { href: '/cancellation-and-refunds/', label: 'Cancellation' },
    ],
  },
];
