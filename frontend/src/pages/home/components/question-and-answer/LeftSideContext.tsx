import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "../../../../design-system";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import orangeLine from "../../../../assets/home/faq-orange-line.svg";

function LeftSideContext() {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <Typography fontWeight={600} color="gray.200" variant="body3">
          QUESTIONS & ANSWERS
        </Typography>
        <div className="relative">
          <Typography
            fontWeight={600}
            variant="h4"
            className="!z-20 !text-[36px] relative"
          >
            Frequently Asked Questions
          </Typography>
          <img
            src={orangeLine}
            alt=""
            className=" absolute left-36 md:left-[20%] top-6 md:top-[30%] lg:top-[60%] z-0"
          />
        </div>
      </div>
      <div className="space-y-4">
        <Typography variant="body1" fontWeight={600}>
          Didn’t get an Answer?
        </Typography>
        <Typography variant="body4" color="gray.100">
          Reach out and we will answer you in less than 2 hours!
        </Typography>
      </div>
      <div className="flex gap-4 items-center">
        <Typography variant="body3" color="secondary.300">
          Leave us a Message
        </Typography>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-secondary-300 mt-1.5"
        />
      </div>
    </div>
  );
}

export default LeftSideContext;
