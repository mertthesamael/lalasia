"use client"
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import React, { FC } from "react";
import { signupHandler } from "@/actions/auth";
import { toast } from "react-toastify";

interface SignupFormProps {}
const SignupForm: FC<SignupFormProps> = ({}) => {

  const clientAction = async(formData:FormData) => {
    const data = await signupHandler(formData)
    console.log(data)
    if(data?.error){
      toast.error(data.error.message)
    }
}
  return (
    <form
      action={clientAction}
      className="w-full h-max flex flex-col items-center gap-6 bg-transparent"
    >
      <input
        type="text"
        name="email"
        placeholder="e-mail"
        className="placeholder:font-medium bg-transparent w-full border text-black py-1 px-2 focus:outline-primaryColor/80 rounded-sm"
      ></input>
      <input
        type="password"
        name="password"
        placeholder="password"
        className="placeholder:font-medium bg-transparent w-full border text-black py-1 px-2 focus:outline-primaryColor/80 rounded-sm"
      ></input>
      <input
        type="text"
        placeholder="password"
        className="placeholder:font-medium bg-transparent w-full border text-black py-1 px-2 focus:outline-primaryColor/80 rounded-sm"
      />
      <PrimaryButton type="submit" text="Signup" className="font-medium" />
    </form>
  );
};

export default SignupForm;
