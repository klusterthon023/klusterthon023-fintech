import logo1 from "../../assets/home/support-brand-logo-1.svg";
import logo2 from "../../assets/home/support-brand-logo-2.svg";
import logo3 from "../../assets/home/support-brand-logo-3.svg";
import logo4 from "../../assets/home/support-brand-logo-4.svg";
import logo5 from "../../assets/home/support-brand-logo-5.svg";

function SupportBrands() {
  return (
    <div className="flex justify-between items-center max-md:px-8 px-16 pb-16 pt-9">
      {LOGOS.map((logo, index) => (
        <img
          data-aos="zoom-out-down"
          data-aos-duration={`${index + 1}000`}
          className="h-12 max-md:h-8 max-sm:h-5"
          key={index}
          src={logo}
          alt="logo"
        />
      ))}
    </div>
  );
}

export default SupportBrands;

const LOGOS = [logo1, logo2, logo3, logo4, logo5];
