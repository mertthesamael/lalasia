"use client";
import PrimaryButton from "@/components/Buttons/PrimaryButton";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <main>
      <section className="flex w-full justify-center">
        <div className="flex text-center flex-col py-10 md:py-28 items-center  gap-8 md:gap-24 w-full max-w-screen-xl mx-5 md:mx-20">
          <h1 className="text-black max-w-[50rem] text-2xl  md:text-6xl font-bold">
            Opps.. Looks like you have been lost.
          </h1>
          <h1 className="text-secondaryColor max-w-[50rem] text-2xl  md:text-6xl font-bold">
            4 0 4
          </h1>
          <PrimaryButton
            onClick={() => router.push("/")}
            text="Home Page"
          ></PrimaryButton>
        </div>
      </section>
    </main>
  );
}
