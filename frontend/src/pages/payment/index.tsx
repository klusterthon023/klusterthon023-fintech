import { PaystackButton } from "react-paystack";
import logo from "../../assets/invoice-hub-logo.svg";
import payment_illustration from "../../assets/payment_illustration.svg";
import { Typography } from "../../design-system";
import { useMutation, useQuery } from "react-query";
import { getAllInvoices, paymentForInvoice } from "./payment-api";
import { useSearchParams } from "react-router-dom";
import AppLoadingState from "../../components/loader/AppLoader";
import { useEffect, useState } from "react";
import { useAppContext } from "../../contexts";

const paystackPublicKey = import.meta.env
  .VITE_APP_PAYSTACK_PAYMENT_API_PUBLIC_KEY;

function PaymentPage() {
  const [searchParams] = useSearchParams();
  const amount = searchParams.get("amount") || "";
  const name = searchParams.get("to") || "";
  const email = searchParams.get("for") || "";
  const token = searchParams.get("token") || "";
  const paymentToken = searchParams.get("paymentToken") || "";

  const [successMessage, setSuccessMessage] = useState("");

  const { mutateAsync, isSuccess, isLoading } = useMutation(paymentForInvoice, {
    onSuccess(data: any) {
      setSuccessMessage(data?.message);
    },
  });

  const { refetchInvoice } = useAppContext();

  const {
    data,
    isLoading: dataLoading,
    refetch,
  } = useQuery(["getAllInvoices"], getAllInvoices);

  const invoice = data?.data?.find((invoice) => invoice.paymentToken === token);

  const componentProps = {
    email: email!,
    amount: Number(amount!) * 100,
    metadata: {
      name: name!,
      phone: "",
    },
    publicKey: String(paystackPublicKey) || "",
    text: "Pay Now",
    onSuccess: () => {
      mutateAsync(paymentToken!);
      refetchInvoice();
    },
  };

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  if (isLoading) return <AppLoadingState isLoading={isLoading} />;

  return (
    <div className="flex flex-col mx-auto max-sm:px-4 justify-center items-center min-h-screen">
      <img src={logo} className="mb-10" />
      <img src={payment_illustration} className="mb-8" />

      <div className="w-[444px] max-sm:w-[300px] mb-8">
        {invoice?.status === "Pending" && !dataLoading && (
          <>
            <Typography variant="body4" color="gray.400" fontWeight={600}>
              Payment Information
            </Typography>
            <div className="flex justify-between items-center mt-4">
              <Typography variant="body3">Payment to</Typography>
              <Typography variant="body3" fontWeight={600}>
                InvoiceHub Initiative
              </Typography>
            </div>
            <div className="flex justify-between items-center mt-2">
              <Typography variant="body3">Business Name</Typography>
              <Typography variant="body3" fontWeight={600}>
                {name}
              </Typography>
            </div>
            <div className="flex justify-between items-center mt-2">
              <Typography variant="body3">Email</Typography>
              <Typography variant="body3" fontWeight={600}>
                {email}
              </Typography>
            </div>
            <div className="flex justify-between items-center mt-2">
              <Typography variant="body3">Grand Total</Typography>
              <Typography variant="body3" fontWeight={600}>
                ₦{amount}
              </Typography>
            </div>
          </>
        )}
        {(invoice?.status === "Paid" || !invoice) && !dataLoading && (
          <div className="flex text-center justify-center items-center mt-4">
            <Typography variant="body1" fontWeight={600}>
              {successMessage ||
                "Invoice has already been paid, please check your email for payment receipts."}
            </Typography>
          </div>
        )}
      </div>
      <div className="mt-3">
        {!isSuccess && invoice?.status === "Pending" && (
          <>
            {/* @ts-ignore */}
            <PaystackButton
              {...componentProps}
              className="h-12 bg-primary-400 hover:bg-primary-500 outline-none border-none text-white rounded-lg px-5 flex justify-center text-center items-center py-4"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default PaymentPage;
