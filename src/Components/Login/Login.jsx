import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./LoginForm";
import FormSignUp from "./FormSignUp";
import FormPasswordLost from "./FormPasswordLost";
import FormPasswordReset from "./FormPasswordReset";
import { UserContext } from "../../UserContext";

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="" element={<LoginForm />} />
        <Route path="sign-up" element={<FormSignUp />} />
        <Route path="password-lost" element={<FormPasswordLost />} />
        <Route path="password-reset" element={<FormPasswordReset />} />
      </Routes>
    </div>
  );
};

export default Login;
