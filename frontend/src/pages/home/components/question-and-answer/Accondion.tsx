import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { Typography } from "../../../../design-system";

const Accordion = ({ question, answers, open, toggleOpenAccordion }: any) => {
  return (
    <motion.div className="w-full border border-gray-100 rounded-xl shadow-lg p-5">
      <motion.div className="flex justify-between items-center gap-6">
        <Typography fontWeight={600} variant={"body1"}>
          {question}
        </Typography>
        <FontAwesomeIcon
          icon={open ? faMinus : faPlus}
          fontSize={16}
          onClick={toggleOpenAccordion}
          className="!text-gray-100 cursor-pointer"
        />
      </motion.div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-4"
          >
            <Typography variant={"body3"} color={"gray.100"}>
              {answers}
            </Typography>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Accordion;
