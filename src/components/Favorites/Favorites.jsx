import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import HotelItem from "../Content/HotelItem";
import SortBtn from "./SortBtn";

import {
  sortByRating,
  sortByCost,
  reverseSortByRating,
  reverseSortByCost,
} from "../../Redux/hotelSlice";

const Favorites = () => {
  const dispatch = useDispatch();
  const allFavHotels = useSelector((state) => state.hotels);

  const [isSortCost, toggleSortCost] = useState(false);
  const [isSortRating, toggleSortRating] = useState(true);
  const [isReverseSort, toggleSortReverse] = useState(true);

  //Происход обшика при переключении метода сортировки
  const setSortingByRating = () => {
    if (!isSortRating) {
      toggleSortRating(true);

      toggleSortReverse(false)
      toggleSortCost(false);

      dispatch(sortByRating());
      return;
    }

    dispatch(reverseSortByRating(isReverseSort));
    toggleSortReverse(!isReverseSort);
  };

  const setSortingByCost = () => {
    if (!isSortCost) {
      toggleSortCost(true);
      
      toggleSortReverse(false)
      toggleSortRating(false);

      dispatch(sortByCost());
      return;
    }

    toggleSortReverse(!isReverseSort);
    dispatch(reverseSortByCost(isReverseSort));
  };

  return (
    <div className="favorites template">
      <h3 className="favorites__title">Избранное</h3>
      <div className="favorites__sorts">
        <SortBtn
          text={"Рейтинг"}
          isActive={isSortRating}
          isReverse={isReverseSort}
          onClick={setSortingByRating}
        />
        <SortBtn
          text={"Цена"}
          isActive={isSortCost}
          isReverse={isReverseSort}
          onClick={setSortingByCost}
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
