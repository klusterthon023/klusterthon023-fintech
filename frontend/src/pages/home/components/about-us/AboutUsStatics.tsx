import { Typography } from "../../../../design-system";


export default function AboutUsStatics() {
    return (
        <div className="flex flex-wrap md:flex-nowrap flex-row gap-6 md:gap-2 justify-center md:justify-between">
            <div className="flex gap-3 md:!w-full">
                <img src="./src/assets/home/total.svg" alt="customers" />
                <div className="flex flex-col justify-between">
                    <Typography variant="h5" color="tertiary.300" fontWeight={600}>20k+</Typography>
                    <Typography color="gray.600" fontWeight={100}>Satisfied Customers</Typography>
                </div>
            </div>
            <div className="flex gap-3 md:!w-full !justify-end">
                <img src="./src/assets/home/customers.svg" alt="customers" />
                <div className="flex flex-col justify-between">
                    <Typography variant="h5" color="tertiary.300" fontWeight={600}>₦190M+</Typography>
                    <Typography color="gray.600" fontWeight={100}>Total Transactions</Typography>
                </div>
            </div>
        </div>
    )
}