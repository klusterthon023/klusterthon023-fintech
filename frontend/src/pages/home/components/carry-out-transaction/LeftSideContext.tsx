import { Typography } from "../../../../design-system";
import paymentIcon from "../../../../assets/home/icon _secure payment.svg";
import foriegnFriendIcon from "../../../../assets/home/icon _foreigner friendly.svg";
import supportIcon from "../../../../assets/home/icon _support.svg";

function LeftSideContext() {
  return (
    <div>
      <Typography className="!mb-12" variant="h5">
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
              <Typography color="gray.300" variant="body4">
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
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al",
  },
  {
    id: 2,
    icon: foriegnFriendIcon,
    title: "User Friendly",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al",
  },
  {
    id: 3,
    icon: supportIcon,
    title: "Best Support",
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al",
  },
];

export default LeftSideContext;
