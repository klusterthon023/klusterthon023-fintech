import logo from "../../../../assets/home/human_illustration.svg";

function RightSideContext() {
  return (
    <div
      data-aos="zoom-in-left"
      data-aos-duration="5000"
      className="lg:absolute -top-14 right-16 max-lg:mt-10 flex max-lg:justify-center items-center"
    >
      <img src={logo} alt="logo" className="w-[427px] z-10" />
    </div>
  );
}

export default RightSideContext;
