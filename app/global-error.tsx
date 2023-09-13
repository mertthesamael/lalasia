"use client";

import PrimaryButton from "@/components/Buttons/PrimaryButton";
import { useRouter } from "next/router";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  return (
    <html>
      <body>
        <h2>Something went wrong!</h2>
        <PrimaryButton onClick={() => reset()} text="Try Again" />
        <PrimaryButton
          onClick={() => router.push("/")}
          text="Back to Home Page"
        />
      </body>
    </html>
  );
}
