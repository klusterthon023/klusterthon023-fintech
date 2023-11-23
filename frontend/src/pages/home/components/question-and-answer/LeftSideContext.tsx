import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Typography } from "../../../../design-system";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function LeftSideContext() {
  return (
    <div className="space-y-12 w-full">
      <div className="space-y-4">
        <Typography fontWeight={600} color="gray.100" variant="body4">
          QUESTIONS & ANSWERS
        </Typography>
        <Typography fontWeight={600} variant="h4">
          Frequently Asked Questions
        </Typography>
      </div>
      <div className="space-y-4">
        <Typography fontWeight={600}>Didn’t get an Answer?</Typography>
        <Typography variant="body4" color="gray.100">
          Reach out and we will answer you in less than 2 hours!
        </Typography>
      </div>
      <div className="flex gap-4 items-center">
        <Typography color="secondary.300">Leave us a Message</Typography>
        <FontAwesomeIcon
          icon={faArrowRight}
          className="text-secondary-300 mt-1.5"
        />
      </div>
    </div>
  );
}

export default LeftSideContext;
