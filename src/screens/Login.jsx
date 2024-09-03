import { SignIn } from "@clerk/clerk-react";
import Card from "../Card";

export default function Login() {
  return (
    <div className="max-lg:container lg:w-[669px] lg:mx-auto pt-[72px] ">
      <SignIn />
    </div>
  );
}
