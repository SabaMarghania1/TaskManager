import { SignUp } from "@clerk/clerk-react";

export default function Register() {
  return (
    <div className="flex justify-center items-center h-screen">
      <SignUp routing="path" path="/register" signInUrl="/login" />
    </div>
  );
}
