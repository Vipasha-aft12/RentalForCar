import '../car-rental-theme.css';
import '../reveal-fix.css';
import CrSprite from '@/components/carrental/CrSprite/CrSprite';

export default function CarRentalShell({ children }) {
  return (
    <div className="crx">
      <CrSprite />
      <main>{children}</main>
    </div>
  );
}
