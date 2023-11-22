import LeftSideContext from "./LeftSideContext";
import RightSideContext from "./RightSideContext";

function CarryOutTractions() {
  return (
    <section
      style={gradientStyle}
      className="md:relative p-16 mt-40 flex max-md:flex-col max-md:gap-10 justify-between items-center"
    >
      <div className="container mx-auto">
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
