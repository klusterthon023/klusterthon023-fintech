import { Typography } from "../../../../design-system";
import avatar1 from "../../../../assets/home/avatar1.svg";
import avatar2 from "../../../../assets/home/avatar2.svg";
import avatar3 from "../../../../assets/home/avatar3.svg";
import avatar4 from "../../../../assets/home/avatar4.svg";

export default function HeroAvatars() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center">
        <img src={avatar1} alt="" />
        <img src={avatar2} alt="" className=" ml-[-10px]" />
        <img src={avatar3} alt="" className=" ml-[-10px]" />
        <img src={avatar4} alt="" className=" ml-[-10px]" />
      </div>
      <div>
        <Typography variant="body4">4k+ Active Users</Typography>
      </div>
    </div>
  );
}
