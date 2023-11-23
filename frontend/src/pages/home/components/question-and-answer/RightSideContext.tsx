import { useState } from "react";
import Accordion from "./Accondion";

function RightSideContext() {
  const [activeAccordionId, setActiveAccordionId] = useState<null | number>(
    null
  );

  const toggleAccordion = (id: number) => {
    return activeAccordionId === id
      ? setActiveAccordionId(null)
      : setActiveAccordionId(id);
  };

  return (
    <div className="w-full">
      {LIST_FAQS.map((item, index) => {
        return (
          <div
            data-aos="fade-left"
            data-aos-duration={`${index + 5}000`}
            key={item.id}
            className="mt-5 flex flex-col gap-5"
          >
            <Accordion
              {...item}
              open={activeAccordionId === item.id}
              toggleOpenAccordion={() => toggleAccordion(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
}

export default RightSideContext;

const LIST_FAQS = [
  {
    id: 1,
    question: "Lorem ipsum dolor sit met",
    answers:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 2,
    question: "Lorem ipsum dolor sit met",
    answers:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    question: "Lorem ipsum dolor sit met",
    answers:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    question: "Lorem ipsum dolor sit met",
    answers:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
