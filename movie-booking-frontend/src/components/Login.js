import React, { useState } from "react";
import { login } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../i18n";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { t } = useTranslation();

  const validateForm = () => {
    const newErrors = {};
    if (!username) newErrors.username = t("UsernameNotEmpty");
    if (!password) {
      newErrors.password = t("PasswordNotEmpty");
    } else if (password.length < 8) {
      newErrors.password = t("PasswordMinLength");
    }
    return newErrors;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    try {
      const response = await login({ username, password });
      localStorage.setItem("username", response.username);

      toast.success(t("LoginSuccessfully"), {
        position: "top-right",
      });
      setTimeout(() => navigate("/"), 2500);
    } catch (error) {
      toast.error(t("LoginFailed"), {
        position: "top-right",
      });
    }
  };
  const goToRegister = async (e) => {
    e.preventDefault();
    navigate("/register");
  };
  const forgotPassword = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="container-login">
      <h1 id="login">{t("Login")}</h1>
      <div className="image"></div>
      <form className="login" onSubmit={handleSubmit}>
        <input
          className="formLogin"
          type="text"
          placeholder={t("UserName")}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p className="error">{errors.username}</p>}
        <input
          className="formLogin"
          type="password"
          placeholder={t("Password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit">{t("Login")}</button>
        <p>
          Bạn chưa có tài khoản!{" "}
          <a href="/" onClick={goToRegister}>
            {t("Register")}
          </a>
          <a href="/" id="forgotPass" onClick={forgotPassword}>
            {t("ForgotPassword")}
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;
