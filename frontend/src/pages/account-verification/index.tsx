import logo from "../../assets/invoice-hub-logo.svg";
import VerificationFailed from "./components/verification-failed";
//import VerificationSucessfull from "./components/verification-sucessfull";

export default function VerifyAccount() {
  return (
    <main className=" container mx-auto lg:p-32 grid items-center justify-center">
      <div className=" pb-12">
        <img src={logo} alt="invoicehub" className="mx-auto" />
      </div>
      <div>
        <VerificationFailed />
      </div>
    </main>
  );
}
