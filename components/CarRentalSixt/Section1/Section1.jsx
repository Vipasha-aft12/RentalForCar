import './Section1.css';
export default function Section1() {
  return (
    <div style={{background: '#FBEDEA', borderBottom: '1px solid #f2c9c0', color: '#7a2a1a'}}>
      <div className="wrap" style={{padding: '12px 22px', fontSize: '14px', fontWeight: '600', display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A33520" strokeWidth="2" strokeLinecap="round" style={{flex: 'none', marginTop: '1px'}}>
          <path d="M12 9v4M12 17h.01M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"></path>
        </svg>
        <span>
          RentalForCar is an independent travel agency. We are
          <b>
            not Sixt
          </b>
          and are not affiliated with, endorsed by, or authorized to represent Sixt. This is not Sixt’s website.
        </span>
      </div>
    </div>
  );
}
