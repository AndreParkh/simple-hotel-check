import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ setIsAuth }) => {
  //   const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("isAuth");
    setIsAuth(false);
  };

  return (
    <div className="header">
      <h1 className="header__title">Simple Hotel Check</h1>
      <a className="header__logout">
        <button className="logout__text" onClick={() => logoutHandler()}>
          Выйти
        </button>
        <div className="logout__img"></div>
      </a>
    </div>
  );
};

export default Header;
