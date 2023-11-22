import { Typography } from "../../../../design-system";
import AboutUsStatics from "./AboutUsStatics";


export default function AboutUsText() {
    return (
        <div className="flex flex-col gap-12">
            <div className="grid gap-4">
                <Typography color="secondary.300" className=" uppercase">ABOUT US</Typography>
                <Typography variant="h3">We Are First of a Kind in Payment Solution Implementation</Typography>
            </div>
            <div className="flex flex-col gap-4">
                <Typography color="gray.300">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore </Typography>
                <Typography color="gray.300">Ut enim ad minima veniam, quis nostrum exercitationem
                ullam corporis suscipit laboriosam, nisi ut al</Typography>
            </div>
            <AboutUsStatics />
        </div>
    )
}