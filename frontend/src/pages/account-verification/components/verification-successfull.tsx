import { Button, Typography } from "../../../design-system";
import tokenVerified from "../../../assets/account-verification/successful-verification.svg";
import { RouteNames } from "../../../routers/interface";
import { Link } from "react-router-dom";

export default function VerificationSucessfull() {
  return (
    <main className=" container mx-auto lg:p-32 grid items-center justify-center">
      <section className="mx-auto">
        <div className="flex flex-col justify-center items-center gap-6">
          <img src={tokenVerified} alt="" />
          <Typography variant="h5">Your account has been verified</Typography>

          <Typography variant="body4" color="gray.300" className="text-center">
            You can now enjoy all the features on{"  "}
            <span className=" font-semibold">
              Invoice<span className="text-[#F27E3B] text-sm">Hub</span>
            </span>
          </Typography>
          <Button>
            <Link to={RouteNames.SIGN_IN}>Go to your account</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
