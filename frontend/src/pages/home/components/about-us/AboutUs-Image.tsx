import logo from "../../../../assets/home/about-us-img.svg";

export default function AboutUsImage() {
  return (
    <div
      data-aos="zoom-in-right"
      data-aos-duration="5000"
      className="lg:mt-[-12%] mx-auto md:mx-0 !w-full"
    >
      <img src={logo} alt="" className="w-full md:w-[500px]" />
    </div>
  );
}
