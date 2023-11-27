import { Typography } from "../../../../design-system";
import paymentIcon from "../../../../assets/home/icon _secure payment.svg";
import foriegnFriendIcon from "../../../../assets/home/icon _foreigner friendly.svg";
import supportIcon from "../../../../assets/home/icon _support.svg";

function LeftSideContext() {
  return (
    <div className="w-full">
      <Typography className="!mb-12 pt-3" variant="h4">
        Carry Out Transaction at a Touch
      </Typography>
      <div className="flex flex-col gap-9">
        {LIST.map(({ id, icon, title, description }) => (
          <div className="flex items-center gap-6" key={id}>
            <img src={icon} alt="" className="w-16" />
            <div className="flex flex-col  gap-6">
              <Typography color="gray.300" fontWeight={600} variant="body1">
                {title}
              </Typography>
              <Typography
                color="gray.300"
                variant="body4"
                className="md:!max-w-[30ch] lg:!max-w-[60ch]"
              >
                {description}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const LIST = [
  {
    id: 1,
    icon: paymentIcon,
    title: "Secure",
    description:
      "Robust encryption, authentication, and security measures, ensuring data privacy and confidentiality",
  },
  {
    id: 2,
    icon: foriegnFriendIcon,
    title: "User Friendly",
    description:
      "Intuitive and accessible personal dashboard designed for easy navigation, seamless interaction, and effortless task management",
  },
  {
    id: 3,
    icon: supportIcon,
    title: "Best Support",
    description:
      "Top-tier customer services available ensuring optimal functionality and resolving issues promptly for users",
  },
];

export default LeftSideContext;
