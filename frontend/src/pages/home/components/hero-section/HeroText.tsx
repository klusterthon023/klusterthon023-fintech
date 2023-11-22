import { Button, Typography } from "../../../../design-system";
import HeroAvatars from "./HeroAvatars";


export default function HeroText() {
    return (
        <section className="grid gap-12">
            <div className="grid gap-2">
            <div className="flex gap-3 items-center">
                <Typography color="secondary.200" fontWeight={500}>SIMPLE</Typography>
                <Typography color="secondary.200" fontWeight={500} className="justify-self-center">.</Typography>
                <Typography color="secondary.200" fontWeight={500}>TRANSPARENT</Typography>
                <Typography color="secondary.200" fontWeight={500}>.</Typography>
                <Typography color="secondary.200" fontWeight={500}>SECURE</Typography>
            </div>
            <div className="">
                <Typography className="w-full" variant="h1">The Efficient Way to Manage your
                <Typography className="w-full" variant="h1" color="tertiary.300">Online Payment</Typography> Transaction</Typography>
            </div>
            </div>
            <div>
                <Typography>
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur ma
                </Typography>
            </div>
            <div className="relative">
                <Button color="tertiary" className="absolute z-30 left-0 bottom-[10px]">Open a Free Account</Button>
                <Button color="secondary" className="z-0">Open a Free Account</Button>
            </div>
            <HeroAvatars />
        </section>
    )
}