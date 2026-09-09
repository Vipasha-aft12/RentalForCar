import { getPageMeta } from '@/lib/seo';
import DepositPayment from '@/components/DepositAndPaymentPolicy/DepositPayment/DepositPayment';
import AtBooking from '@/components/DepositAndPaymentPolicy/AtBooking/AtBooking';
import OneCallNoCounterSurprises from '@/components/DepositAndPaymentPolicy/OneCallNoCounterSurprises/OneCallNoCounterSurprises';

export function generateMetadata() {
  return getPageMeta('/deposit-and-payment-policy/');
}

export default function DepositAndPaymentPolicyPage() {
  return (
    <main>
      <DepositPayment />
      <AtBooking />
      <OneCallNoCounterSurprises />
    </main>
  );
}
