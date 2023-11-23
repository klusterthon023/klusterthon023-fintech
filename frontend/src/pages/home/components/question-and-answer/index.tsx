import LeftSideContext from "./LeftSideContext";
import RightSideContext from "./RightSideContext";

function QuestionAndAnswer() {
  return (
    <section
      id="FAQ"
      style={gradientStyle}
      className="bg-faqs bg-opacity-100 container p-16 max-lg:p-8 w-full flex justify-between max-lg:justify-center max-lg:flex max-lg:flex-col max-lg:gap-10 items-center"
    >
      <LeftSideContext />
      <RightSideContext />
    </section>
  );
}

export default QuestionAndAnswer;

const gradientStyle = {
  background:
    "linear-gradient(82deg, #EEF5EC 0%, rgba(255, 255, 255, 0.52) 50%, rgba(107, 166, 255, 0.00) 100%)",
};
