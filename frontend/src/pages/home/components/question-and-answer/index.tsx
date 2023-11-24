import LeftSideContext from "./LeftSideContext";
import RightSideContext from "./RightSideContext";

function QuestionAndAnswer() {
  return (
    <section id="FAQ" style={gradientStyle} className="">
      <div
        className="container mx-auto px-4 md:px-0 py-16 max-lg:py-8 w-full max-lg:justify-center
       max-lg:gap-10 items-center flex flex-col md:flex-row justify-between "
      >
        <LeftSideContext />
        <RightSideContext />
      </div>
    </section>
  );
}

export default QuestionAndAnswer;

const gradientStyle = {
  background:
    "linear-gradient(82deg, #EEF5EC 0%, rgba(255, 255, 255, 0.52) 50%, rgba(107, 166, 255, 0.00) 100%)",
};
