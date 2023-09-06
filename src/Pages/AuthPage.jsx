import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import cn from "classnames";

const AuthForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState("Email не может быть пустым");
  const [passwordError, setPasswordError] = useState(
    "Пароль не может быть пустым"
  );
  const [ifValidForm, setIfValidForm] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (emailError || passwordError) {
      setIfValidForm(false);
    } else {
      setIfValidForm(true);
    }
  }, [email, password]);

  const blurHandler = (e) => {
    switch (e.target.id) {
      case "authLogin":
        setEmailDirty(true);
        break;
      case "authPassword":
        setPasswordDirty(true);
        break;
    }
  };

  const emailHandler = (e) => {
    setEmailDirty(false);
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный Email");
    } else {
      setEmailError("");
    }
  };

  const passwordlHandler = (e) => {
    setPasswordDirty(false);
    setPassword(e.target.value);
    if (e.target.value.length < 3) {
      setPasswordError("Пароль должен быть более 3 символов");
      if (!e.target.value) {
        setPasswordError("Пароль не может быть пустым");
      }
    } else {
      setPasswordError("");
    }
  };

  const loginHandler = () => {
    if (ifValidForm) {
      localStorage.setItem("isAuth", "true");
      navigate("/");
    }
  };
  const classErrorEmail = cn({
    error: emailDirty && emailError,
    "": !(emailDirty && emailError),
  });
  const classErrorPassword = cn({
    error: passwordDirty && passwordError,
    "": !(passwordDirty && emailError),
  });

  return (
    <div className="auth">
      <div className="auth__container">
        <form className="template searchform">
          <h1 className="auth__header">Simple Hotel Check</h1>
          {/* <InputItem
            label="Логин"
            id="authLogin"
            type="email"
            state={email}
            blurHandler={blurHandler}
            setState={emailHandler}
          /> */}
          <div className="searchform__item authItem">
            <label
              className={"searchform__title " + classErrorEmail}
              htmlFor="authLogin"
            >
              Логин
            </label>
            <br></br>
            <input
              type="email"
              className={"searchform__field " + classErrorEmail}
              id="authLogin"
              onChange={emailHandler}
              onBlur={(e) => blurHandler(e)}
            />
          </div>
          {emailDirty && emailError && (
            <div className="emailError"> {emailError} </div>
          )}

          {/* <InputItem
            label="Пароль"
            id="authPassword"
            type="password"
            blurHandler={blurHandler}
            setState={passwordlHandler}
          /> */}

          <div className="searchform__item authItem">
            <label
              className={"searchform__title " + classErrorPassword}
              htmlFor="authPassword"
            >
              Пароль
            </label>
            <br></br>
            <input
              type="password"
              className={"searchform__field " + classErrorPassword}
              id="authPassword"
              onChange={passwordlHandler}
              onBlur={(e) => blurHandler(e)}
            />
          </div>
          {passwordDirty && passwordError && (
            <div className="passwordError"> {passwordError} </div>
          )}
          <button
            className="searchform__btn btn"
            disabled={!ifValidForm}
            onClick={() => loginHandler()}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default AuthForm;

// const handleLogout = () => {
// localStorage.removeItem('token');
// setIsAuthenticated(false);
// };

// }
