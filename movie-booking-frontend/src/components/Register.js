import React, { useState } from "react";
import { register, checkUsernameExists } from "../services/auth";
import { useNavigate } from "react-router-dom";
import "../styles/register.scss";
import { useTranslation } from "react-i18next";
import "../i18n";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const { t } = useTranslation();


  const validateForm = async () => {
    const newErrors = {};
    if (!username) {
      newErrors.username = t("UsernameNotEmpty");
    }
  
    if (!email) newErrors.email = t("EmailNotEmpty");
    if (!password) {
      newErrors.password = t("PasswordNotEmpty");
    } else if (password.length < 8) {
      newErrors.password = t("PasswordMinLength");
    }

    const usernameExists = await checkUsernameExists(username);
    if (usernameExists) {
      newErrors.username = t("UsernameAlreadyExists");
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = await validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }


    try {
      await register({ username, email, password });
      toast.success(t("RegisterSuccessfully"), {
        position: "top-right",
      });
      setTimeout(() => navigate("/login"), 2500);
    } catch (err) {
      if (err.response && err.response.data && err.response.data.error) {
        toast.error(t("RegisterFailed"), {
          position: "top-right",
        });
      } else {
        toast.error(t("RegisterFailed"), {
          position: "top-right",
        });
      }
    }
  };
  const goToLogin = async (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className="container-register">
      <h1 id="register">{t("Register")}</h1>
      <div className="image"></div>
      <form className="register" onSubmit={handleSubmit}>
        <input
          className="formRegister"
          type="text"
          placeholder={t("UserName")}
          value={username}
          onChange={(e) => setUserName(e.target.value)}
        />
        {errors.username && <p className="error">{errors.username}</p>}
        <input
          className="formRegister"
          type="email"
          placeholder={t("Email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          className="formRegister"
          type="password"
          placeholder={t("Password")}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p className="error">{errors.password}</p>}
        <button type="submit">{t("Register")}</button>
        <p>
          Bạn đã có tài khoản!{" "}
          <a href="/" onClick={goToLogin}>
            Đăng nhập
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
