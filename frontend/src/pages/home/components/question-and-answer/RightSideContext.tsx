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
    question: "How do I get started using InvoiceHub?",
    answers:
      "Simply sign up, create your account and begin managing payments seamlessly with our intuitive platform’s use-friendly interface.",
  },
  {
    id: 2,
    question: "Can I create and send invoices to my clients?",
    answers:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 3,
    question: "Is there a limit on number of clients  I can manage?",
    answers:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    id: 4,
    question: "Can I set up recurring invoices for regular payments?",
    answers:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];
