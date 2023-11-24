import SignUpImage from "./components/signup-image";
import SignUpForm from "./components/signup-form";
import { ToastContainer } from "react-toastify";

export default function Register() {
  return (
    <main className="grid lg:grid-cols-2 w-full min-h-screen">
      <SignUpForm />
      <SignUpImage />
      <ToastContainer />
    </main>
  );
}
