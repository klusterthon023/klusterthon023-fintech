import { Typography } from "../../../../design-system";


export default function Features() {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="mx-auto flex flex-col gap-6 md:max-w-[350px] p-6 justify-center items-stretch">
                <img src="./src/assets/home/payment-managment.svg" alt="" className=" mx-auto" />
                <Typography className="!text-xl !font-semibold !mx-auto">Payment Management</Typography>
                <Typography color="gray.300" className="!text-center !text-base">Ut enim ad minima veniam, quis nostrum exercitationem
                ullam corporis suscipit laboriosam, nisi ut al</Typography>
                <img src="./src/assets/home/features-arrow.svg" alt="" className=" mx-auto" />
            </div>
            <div className="mx-auto flex flex-col gap-6 md:max-w-[350px] p-6 justify-center items-stretch">
                <img src="./src/assets/home/tracking.svg" alt="" className=" mx-auto" />
                <Typography className="!text-xl !font-semibold !mx-auto">Invoice Tracking</Typography>
                <Typography color="gray.300" className="!text-center !text-base">Ut enim ad minima veniam, quis nostrum exercitationem
                ullam corporis suscipit laboriosam, nisi ut al</Typography>
                <img src="./src/assets/home/features-arrow.svg" alt="" className=" mx-auto" />
            </div>
            <div className="mx-auto flex flex-col gap-6 md:max-w-[350px] p-6 justify-center items-stretch">
                <img src="./src/assets/home/payment-tracking.svg" alt="" className=" mx-auto" />
                <Typography className="!text-xl !font-semibold !mx-auto">Integrated Payments</Typography>
                <Typography color="gray.300" className="!text-center !text-base">Ut enim ad minima veniam, quis nostrum exercitationem
                ullam corporis suscipit laboriosam, nisi ut al</Typography>
                <img src="./src/assets/home/features-arrow.svg" alt="" className=" mx-auto" />
            </div>
            <div className="mx-auto flex flex-col gap-6 md:max-w-[350px] p-6 justify-center items-stretch">
                <img src="./src/assets/home/dashboard.svg" alt="" className=" mx-auto" />
                <Typography className="!text-xl !font-semibold !mx-auto">Personal Dashboard</Typography>
                <Typography color="gray.300" className="!text-center !text-base">Ut enim ad minima veniam, quis nostrum exercitationem
                ullam corporis suscipit laboriosam, nisi ut al</Typography>
                <img src="./src/assets/home/features-arrow.svg" alt="" className=" mx-auto" />
            </div>
            <div className="mx-auto hidden md:flex flex-col gap-6 md:max-w-[350px] p-6 justify-center items-stretch">
                <img src="./src/assets/home/object.svg" alt="" className=" mx-auto" />
            </div>
            <div className="mx-auto flex flex-col gap-6 md:max-w-[350px] p-6 justify-center items-stretch">
                <img src="./src/assets/home/client-mangament.svg" alt="" className=" mx-auto" />
                <Typography className="!text-xl !font-semibold !mx-auto">Client Management</Typography>
                <Typography color="gray.300" className="!text-center !text-base">Ut enim ad minima veniam, quis nostrum exercitationem
                ullam corporis suscipit laboriosam, nisi ut al</Typography>
                <img src="./src/assets/home/features-arrow.svg" alt="" className=" mx-auto" />
            </div>
        </div>
    )
}