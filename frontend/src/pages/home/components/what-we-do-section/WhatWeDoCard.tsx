import { Typography } from "../../../../design-system";



export default function WhatWeDoCard() {
    return (
        <div className="relative flex flex-col justify-between gap-16 lg:gap-2 lg:flex-row">
            <img src="./src/assets/home/arrow-down.svg" alt="" className=" absolute left-[28%] top-[65%] hidden xl:block" />
            <img src="./src/assets/home/arrow-up.svg" alt="" className=" absolute left-[60%] top-[65%] hidden xl:block" />
            <div className="grid gap-6 text-center lg:max-w-[350px]">
                <img src="./src/assets/home/payment.svg"  alt="" className="mx-auto" />
                <Typography variant="h4">Payment Solution</Typography>
                <Typography className="lg:max-w-[40ch]">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</Typography>
            </div>
            <div className="grid gap-6 text-center lg:max-w-[350px] lg:transform lg:translate-y-[10rem] lg:mb-4">
                <img src="./src/assets/home/search.svg"  alt="" className="mx-auto" />
                <Typography variant="h4">Invoice Tracking</Typography>
                <Typography className="lg:max-w-[40ch]">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</Typography>
            </div>
            <div className="grid gap-6 text-center lg:max-w-[350px]">
                <img src="./src/assets/home/group.svg"  alt="" className="mx-auto" />
                <Typography variant="h4">Client Management</Typography>
                <Typography className="lg:max-w-[40ch]">Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut al</Typography>
            </div>
        </div>
    )
}