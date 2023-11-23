import { Divider, Typography } from "../../design-system";
import FooterContext from "./FooterContext";
import SupportBrands from "./SupportBrands";

function Footer() {
  return (
    <div className="px-16 max-md:px-8 pt-12 pb-9">
      <SupportBrands />
      <Divider />
      <FooterContext />
      <Divider className="my-9" />
      <div className="text-center">
        <Typography color="gray.100" variant="body4">
          &copy; {new Date().getFullYear()} All right reserved.
        </Typography>
      </div>
    </div>
  );
}

export default Footer;
