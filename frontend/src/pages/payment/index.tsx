import { PaystackButton } from "react-paystack";

function PaymentPage() {
  const componentProps = {
    email: "tsowafelix0@gmail.com",
    amount: 1000 * 100,
    metadata: {
      name: `Felix`,
      user: "12345",
      phone: "09032328670",
    },
    publicKey: "",
    text: "Pay Now",
    // onSuccess: (res: any) => {
    //   mutate({
    //     house: houseId,
    //     transaction_ref: res.reference,
    //     payment_gateway: "paystack",
    //   });
    // },
  };

  return (
    <div>
      <PaystackButton
        className="ant-btn ant-btn-primary ant-btn-lg ant-btn-block mb-5"
        {...componentProps}
      />
    </div>
  );
}

export default PaymentPage;
