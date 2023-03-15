import React from "react";
import { HotelItem } from "../Content/HotelItem";

const Favorites = () => {
  return (
    <div className="favorites template">
      <h3 className="favorites__title">Избранное</h3>
      <div className="favorites__sorts">
        {SortBtn("Рейтинг", true)}
        {SortBtn("Цена")}
      </div>
      <div className="favorites__items scrollbar">
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
      </div>
    </div>
  );
};

function SortBtn(text, isActive) {
  return (
    <button className={setActive("favorites__sort", isActive)}>
      {text}
      <div className="arrows">
        <div className={setActive("arrow__up arrow", isActive)}></div>
        <div className="arrow__down arrow"></div>
      </div>
    </button>
  );
}

function setActive(className, isActive) {
  return `${className} ${isActive ? "sortActive" : ""}`;
}

export { Favorites };
