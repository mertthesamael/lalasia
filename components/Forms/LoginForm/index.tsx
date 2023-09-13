"use client";
import { loginHandler } from "@/actions/auth";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { toast } from "react-toastify";
import React, { FC } from "react";
import { useUserStore } from "@/store/useUserStore";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { GoogleIcon } from "@/components/Icons/Google";

interface LoginFormProps {}
const getURL = () => {
  let url =
    process.env.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000/";

  // Make sure to include https:// when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to including trailing /.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
};
const LoginForm: FC<LoginFormProps> = ({}) => {
  const router = useRouter();
  const { handleUser, user } = useUserStore();
  const clientAction = async (formData: FormData) => {
    const data = await loginHandler(formData);
    //BURAYA BAKCAM ??
    if (data) {
      console.log(data);
      if (data.error) {
        return toast.error(data.error);
      }
      handleUser(data.user);
      router.push("/");
      toast.success(
        `Successfully signed in, welcome ${data.user?.displayName}`
      );
    }
  };
  const signInGoogle = async () => {
    const supabase = createClientComponentClient();
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${getURL()}auth/callback`,
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
      },
    });

    return {
      data: data,
      error: error,
    };
  };
  return (
    <form
      action={clientAction}
      className="w-full h-max flex flex-col items-center gap-6 bg-transparent"
    >
      <div className="flex gap-6 items-center">
        <GoogleIcon className="w-10" />
        <h1
          onClick={() => {
            let data = signInGoogle();
            console.log(data);
          }}
          className="text-lg text-black cursor-pointer"
        >
          Sign in with Google
        </h1>
      </div>
      <input
        name="email"
        type="text"
        placeholder="e-mail"
        className="placeholder:font-medium bg-transparent w-full border text-black py-1 px-2 focus:outline-primaryColor/80 rounded-sm"
      ></input>
      <input
        name="password"
        type="password"
        placeholder="password"
        className="placeholder:font-medium bg-transparent w-full border text-black py-1 px-2 focus:outline-primaryColor/80 rounded-sm"
      ></input>
      <PrimaryButton type="submit" text="Login" className="font-medium" />
    </form>
  );
};

export default LoginForm;
