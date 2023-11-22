import { Typography } from "../../../../design-system";


export default function HeroAvatars() {
    return (
        <div className="flex items-center gap-4">
            <div className="flex items-center">
            <img src="./src/assets/home/avatar1.svg" alt="" />
            <img src="./src/assets/home/avatar2.svg" alt="" className=" ml-[-10px]" />
            <img src="./src/assets/home/avatar3.svg" alt="" className=" ml-[-10px]"/>
            <img src="./src/assets/home/avatar4.svg" alt="" className=" ml-[-10px]" />
            </div>
            <div>
                <Typography>4k+ Active Users</Typography>
            </div>
        </div>
    )
}