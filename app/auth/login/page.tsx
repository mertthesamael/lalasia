import LoginFormSection from "@/containers/auth-page/login-page/form-section";
import AuthFormSection from "@/containers/auth-page/login-page/form-section";
import React, { FC } from "react";

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
  return (
    <main>
      <LoginFormSection />
    </main>
  );
};

export default LoginPage;
