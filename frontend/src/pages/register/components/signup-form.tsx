import { Button, Typography } from "../../../design-system";
import RegisterForm from "./form";


export default function SignUpForm() {
    return (
        <div className="bg-[#F0F0F4] py-4 px-1 md:p-16">
            <div className="text-2xl font-bold text-white bg-black py-3 px-[14px] w-[95px] h-[53px]
            flex items-center justify-center rounded-[8px] mb-16">
                LOGO
            </div>
            <section className="grid gap-6 px-4 md:px-16">
                <div>
                <Typography className="!text-[28px] !font-semibold text-center">Sign up for an account</Typography>
                <Typography className="text-center !text-[#58587E] !text-sm">Manage your online payment transaction better.</Typography>
                </div>
                <div className="flex flex-col md:flex-col xl:flex-row gap-6 justify-between">
                    <Button className="!bg-white !w-full !text-black">
                        <img src="./src/assets/auth/FaGoogle.svg" alt="google" />
                         Sign in with Google
                    </Button>
                    <Button className="!bg-white !w-full !text-black">
                         <img src="./src/assets/auth/FaApple.svg" alt="apple" />
                        Sign in with Apple
                    </Button>
                </div>
                <div className="flex items-center">
                    <div className="border-t-[1px] border-gray-100 w-full"></div>
                    <Typography className="!w-full text-center !text-[#58587E] !text-sm">or continue with</Typography>
                    <div className="border-t-[1px] border-gray-100 w-full"></div>
                </div>
                <RegisterForm />
            </section>
        </div>
    )
}