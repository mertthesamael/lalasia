import Brand from "@/components/Brand";
import LoginForm from "@/components/Forms/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";

interface LoginFormSectionProps {}

const LoginFormSection: FC<LoginFormSectionProps> = ({}) => {
  return (
    <section className="w-full flex justify-center">
      <div className="flex flex-col  py-10 md:py-28 items-center justify-center gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20">
        <div className="p-4  w-full md:max-w-[50rem] gap-4 h-[40rem] flex flex-col md:flex-row rounded-lg shadow-lg">
          <div className="w-full h-full  overflow-hidden relative bg-gray-400 rounded-md">
            <Image
              src="/loginBanner.png"
              fill
              alt="lalasia login"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="w-full h-full flex flex-col items-center justify-evenly py-15 px-5 gap-9 rounded-md">
            <Brand />
            <LoginForm />
            <div className="flex">
              <p className="text-textColor ">
                Dont have an account?{" "}
                <Link
                  className="text-primaryColor font-medium"
                  href={"/auth/signup"}
                >
                  Sign up
                </Link>{" "}
                now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginFormSection;
