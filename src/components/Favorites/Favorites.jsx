import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HotelItem } from "../Content/HotelItem";
import SortBtn from "./SortBtn";
import { hotelItemExample } from "../../Redux/HotelItemExample";
import {
  sortByRating,
  reverseSortByRating,
  reverseSortByCost,
} from "../../Redux/hotelSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const allFavHotels = useSelector((state) => state.hotels);

  const [isSortRating, toggleSortRating] = useState(true);
  const [isSortCost, toggleSortCost] = useState(false);
  const [sortReverse, toggleSortReverse] = useState(false);

  //Происход обшика при переключении метода сортировки
  const setSortingRating = () => {
    if (!isSortRating) {
      toggleSortRating(true);
      toggleSortCost(false);

      dispatch(sortByRating());
      return;
    }
    // allFavHotels.sort((a, b) => a.stars - b.stars)

    dispatch(reverseSortByRating(sortReverse));
    toggleSortReverse(!sortReverse);
  };

  const sortByCost = () => {
    if (!isSortCost) {
      toggleSortRating(false);
      toggleSortCost(true);

      dispatch(sortByCost());
      return;
    }

    dispatch(reverseSortByCost(sortReverse));
    toggleSortReverse(!sortReverse);
  };

  return (
    <div className="favorites template">
      <h3 className="favorites__title">Избранное</h3>
      <div className="favorites__sorts">
        <SortBtn
          text={"Рейтинг"}
          isActive={isSortRating}
          reverse={sortReverse}
          onClick={setSortingRating}
        />
        <SortBtn
          text={"Цена"}
          isActive={isSortCost}
          reverse={sortReverse}
          onClick={sortByCost}
        />
      </div>
      {!allFavHotels.length && <div>Добавьте отель в избранное</div>}
      <div className="favorites__items scrollbar">
        {allFavHotels.map((hotel, idx) => (
          <HotelItem hotel={hotel} isFav={true} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
