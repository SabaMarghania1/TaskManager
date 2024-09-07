import { SignUp } from "@clerk/clerk-react";

export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp signInUrl="/login" />
    </div>
  );
}
