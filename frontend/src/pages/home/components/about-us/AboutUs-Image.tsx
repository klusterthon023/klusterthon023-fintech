import logo from "../../../../assets/home/about-us-img.svg";

export default function AboutUsImage() {
  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="5000"
      className="lg:mt-[-10%] mx-auto md:mx-0"
    >
      <img src={logo} alt="" className="w-[427px]" />
    </div>
  );
}
