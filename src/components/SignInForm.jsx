import React from "react";
import { SignIn } from "@clerk/clerk-react";

const SignInForm = () => {
  return (
    <div className="">
      <SignIn
        path="/login"
        signUpUrl="/register"
        routing="path"
        appearance={{
          elements: {
            main: "flex flex-col-reverse",
            formFieldInput: "h-[38px]",
            card: "!bg-transparent",
            headerSubtitle: "hidden",
            socialButtonsBlockButton__google:
              "h-[38px] rounded-[30px] !border-[1px] !border-[#CFD3D9] hover:bg-transparent !shadow-none",
            formButtonPrimary:
              "bg-[#333] h-[38px] rounded-[30px] hover:bg-[#555] text-sm",
          },
        }}
      />
    </div>
  );
};

export default SignInForm;
