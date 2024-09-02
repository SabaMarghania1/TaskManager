import { Link, Navigate } from "react-router-dom";
import Input from "../components/Input";
import Card from "../Card";

export default function Login() {
  return (
    <div>
      <Card />
      <div className="max-lg:container lg:w-[669px] lg:mx-auto pt-[72px] ">
        <div className="w-[79px] h-[79px] bg-blue-circle rounded-full  mb-[32px] mx-auto"></div>
        <h2 className="text-[32px] text-[#0059AC] font-medium mb-12 text-center">
          Sign In
        </h2>
        <form className="flex  flex-col ">
          <fieldset className="">
            <Input
              type="email"
              id="email"
              placeholder="Enter your username or Email"
              required
            />
            <Input
              type="password"
              id="password"
              placeholder="Enter your Password"
              required
            />
          </fieldset>
          <Link
            to="/forgetPassword"
            className="text-[13px] text-[#252931] mb-6"
          >
            Forgot password?
          </Link>

          <Link
            to="/AppLayout"
            role="button"
            className="w-full bg-[#477EE7] p-4 text-center rounded-[30px] font-bold text-white"
          >
            Sign In
          </Link>
          <div className="flex items-center justify-center my-8">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-500">Or</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <Link
            to="/"
            role="button"
            className="w-full p-4 text-center rounded-[30px] font-normal text-[#252931] border border-[#CFD3D9] border-solid flex justify-center gap-3 items-center mb-8"
          >
            <img src="/flat-color-icons_google.svg" alt="google icon" /> Sign in
            with google
          </Link>

          <span className="text-center">
            Don't have an account?{" "}
            <Link to="/register" className="underline">
              Sign up
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}
