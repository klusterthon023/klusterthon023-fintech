import SignUpImage from "../register/components/signup-image";
import SignUpForm from "./components/signup-form";


export default function Register() {
    return (
        <main className="grid lg:grid-cols-2 w-full h-screen">
          <SignUpForm />
          <SignUpImage />
        </main>
    )
}