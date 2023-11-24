import logo from "../../../../assets/home/human_illustration.svg";

function RightSideContext() {
  return (
    <div
      data-aos="zoom-in-left"
      data-aos-duration="5000"
      className="lg:mt-[-12%] mx-auto md:mx-0 !w-full flex justify-end"
    >
      <img src={logo} alt="" className="w-full md:w-[500px]" />
    </div>
  );
}

export default RightSideContext;
