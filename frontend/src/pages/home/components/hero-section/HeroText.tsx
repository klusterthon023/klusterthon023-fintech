import { Button, Typography } from "../../../../design-system";
import HeroAvatars from "./HeroAvatars";


export default function HeroText() {
    return (
        <section className="relative grid gap-12">
            <img src="./src/assets/home/decorator.svg" alt=""
            className=" absolute bottom-[-0%] left-[90%] hidden lg:block" />
            <div className="grid gap-4">
            <div className="flex gap-3 items-center">
                <Typography color="secondary.300" fontWeight={500}>SIMPLE</Typography>
                <div className="w-[5px] h-[5px] rounded-full bg-[#73AE64]"></div>
                <Typography color="secondary.300" fontWeight={500}>TRANSPARENT</Typography>
                <div className="w-[5px] h-[5px] rounded-full bg-[#73AE64]"></div>
                <Typography color="secondary.300" fontWeight={500}>SECURE</Typography>
            </div>
            <div className="">
                <Typography className="!w-full !text-4xl md:!text-6xl" variant="h1">The Efficient Way to Manage your
                <Typography className="!w-full !text-4xl md:!text-6xl" variant="h1" color="tertiary.300">Online Payment</Typography> Transaction</Typography>
            </div>
            </div>
            <div>
                <Typography>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma
                </Typography>
            </div>
            <div className="relative">
                <div className="absolute left-[3px] top-[7px] bg-black w-[180px] h-[35px] rounded-lg z-10"></div>
                <Button color="tertiary" className="z-30 relative">Open a Free Account</Button>
            </div>

            <HeroAvatars />
        </section>
    )
}