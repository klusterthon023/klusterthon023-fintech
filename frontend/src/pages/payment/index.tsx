import { PaystackButton } from "react-paystack";
import { useEffect, useRef } from "react";

function PaymentPage() {
  const paystackButtonRef = useRef<any>(null);

  const componentProps = {
    email: "tsowafelix0@gmail.com",
    amount: 1000 * 100,
    metadata: {
      name: `Felix`,
      user: "12345",
      phone: "09032328670",
    },
    publicKey: "pk_test_0b1f344bf81fcc1c9d3d77e548eddc5f215a2b20",

    text: "Pay Now",
    // onSuccess: (res: any) => {
    //   mutate({
    //     house: houseId,
    //     transaction_ref: res.reference,
    //     payment_gateway: "paystack",
    //   });
    // },
  };
  useEffect(() => {
    if (paystackButtonRef.current) {
      paystackButtonRef.current.click();
    }
  }, []);

  return (
    <button ref={paystackButtonRef}>
      {/* @ts-ignore */}
      <PaystackButton {...componentProps} />
    </button>
  );
}

export default PaymentPage;
