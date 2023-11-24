import { Divider, Typography } from "../../design-system";
import FooterContext from "./FooterContext";
import SupportBrands from "./SupportBrands";

function Footer() {
  return (
    <div className="px-4 pt-12 pb-9">
      <SupportBrands />
      <Divider />
      <div className=" container mx-auto">
        <FooterContext />
        <Divider className="my-9" />
        <div className="text-center">
          <Typography color="gray.100" variant="body4">
            &copy; {new Date().getFullYear()} All right reserved.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Footer;
