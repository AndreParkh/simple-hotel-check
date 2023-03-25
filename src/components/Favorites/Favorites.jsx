import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { HotelItem } from "../Content/HotelItem";

const Favorites = () => {
  const allFavoriteHotel = useSelector((state) => state.hotels);
  //   console.log(allFavoriteHotel);

  const setActive = (className, isActive) => {
    return `${className} ${isActive ? "sortActive" : ""}`;
  };
  const SortBtn = ({ text, isActive }) => {
    return (
      <button className={setActive("favorites__sort", isActive)}>
        {text}
        <div className="arrows">
          <div className={setActive("arrow__up arrow", isActive)}></div>
          <div className="arrow__down arrow"></div>
        </div>
      </button>
    );
  };

  return (
    <div className="favorites template">
      <h3 className="favorites__title">Избранное</h3>
      <div className="favorites__sorts">
        <SortBtn text={"Рейтинг"} isActive={true} />
        {/* <SortBtn text={"Цена"} /> */}
        {/* {SortBtn("Цена")} */}
      </div>
      <div className="favorites__items scrollbar">
        {allFavoriteHotel.map((hotel, idx) => (
          <HotelItem hotel={hotel} isFav={true} key={idx} />
        ))}

        {/* <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem />
        <HotelItem /> */}
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
