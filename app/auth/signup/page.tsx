import SignupFormSection from "@/containers/auth-page/signup-page/form-section";
import React, { FC } from "react";

interface SignupPageProps {}

const SignupPage: FC<SignupPageProps> = ({}) => {
  return (
    <main>
      <SignupFormSection />
    </main>
  );
};

export default SignupPage;
