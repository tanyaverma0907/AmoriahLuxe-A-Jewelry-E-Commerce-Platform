import React from "react";
import LeftPanel from "../components/auth/LeftPanel";
import LoginForm from "../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex bg-[#f8f5f1]">

      <LeftPanel />

      <LoginForm />

    </div>
  );
};

export default LoginPage;