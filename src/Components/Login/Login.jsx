import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm";
import FormSignUp from "./FormSignUp";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";
import LoginPasswordForgot from "./LoginPasswordForgot";
import LoginPasswordReset from "./LoginPasswordReset";
import Head from "../Helper/Head";

const Login = () => {
  const { login } = React.useContext(UserContext);
  if (login === true) return <Navigate to="/conta" />;
  return (
    <section className={styles.login}>
      <Head title="Login" description="Faça login para acessar sua conta" />
      <div className={styles.forms}>
        <Routes>
          <Route path="" element={<LoginForm />} />
          <Route path="sign-up" element={<FormSignUp />} />
          <Route path="password-forgot" element={<LoginPasswordForgot />} />
          <Route path="password-reset" element={<LoginPasswordReset />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
