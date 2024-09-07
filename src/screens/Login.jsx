import { SignIn } from "@clerk/clerk-react";
import Card from "../Card";

export default function Login() {
  return (
    <div className="flex justify-center items-center h-screen  ">
      <SignIn signUpUrl="/register" />
    </div>
  );
}
