import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header__title">Simple Hotel Check</h1>
      <div className="header__logout">
        <div className="logout__text">Выйти</div>
        <div className="logout__img"></div>
      </div>
    </div>
  );
};

export { Header };
