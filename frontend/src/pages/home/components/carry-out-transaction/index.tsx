import LeftSideContext from "./LeftSideContext";
import RightSideContext from "./RightSideContext";

function CarryOutTractions() {
  return (
    <section
      style={gradientStyle}
      className="py-8 pb-12 px-4 bg-gradient mt-[11%]"
    >
      <div className="container mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 items-center gap-4">
        <LeftSideContext />
        <RightSideContext />
      </div>
    </section>
  );
}

export default CarryOutTractions;

const gradientStyle = {
  background:
    "linear-gradient(82deg, #EEF5EC 36.25%, rgba(255, 255, 255, 0.52) 70.33%, rgba(150, 192, 255, 0.75) 100%)",
};
