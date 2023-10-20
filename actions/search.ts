"use server";


import { redirect } from "next/navigation";


const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    "http://localhost:3000/";

  // Make sure to include https:// when not localhost.
  url = url.includes("http") ? url : `https://${url}`;
  // Make sure to including trailing /.
  url = url.charAt(url.length - 1) === "/" ? url : `${url}/`;
  return url;
};

export const searchHandler = async (formData: FormData) => {
  const key = formData.get("searchKey");
  return redirect(getURL() + "/search?search=" + key);
};
