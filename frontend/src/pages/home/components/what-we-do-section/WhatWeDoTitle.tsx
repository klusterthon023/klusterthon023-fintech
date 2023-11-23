import { Typography } from "../../../../design-system";


export default function WhatWeDoTitle() {
    return (
        <div className="grid gap-10">
            <div className="flex items-center flex-col gap-4">
            <Typography color="secondary.300" className=" uppercase text-center">WHAT WE DO</Typography>
            <Typography variant="h3" className="!max-w-[28ch] text-center">Access the Smartest Payment Solution at Your Fingertips</Typography>
            </div>
        </div>
    )
}