import { Button, Typography } from "../../../design-system";
import tokenExpired from "../../../assets/account-verification/expired-token.svg";
import { Link } from "react-router-dom";
import { RouteNames } from "../../../routers/interface";

export default function VerificationFailed() {
  return (
    <main className=" container mx-auto lg:p-32 grid items-center justify-center">
      <section className="mx-auto">
        <div className="flex flex-col justify-center items-center gap-6">
          <img src={tokenExpired} alt="" />
          <Typography variant="h5">
            This verification link has expired
          </Typography>

          <Typography variant="body4" color="gray.300" className="text-center">
            <span className=" font-semibold">Hold on</span>, you can request for
            a new link on your{"  "}
            <span className=" font-semibold">
              Invoice<span className="text-[#F27E3B] text-sm">Hub</span>
            </span>{" "}
            account
          </Typography>
          <Button>
            <Link to={RouteNames.SIGN_IN}>Go to your account</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
