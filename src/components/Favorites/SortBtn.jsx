import React from "react";
import cn from "classnames";

const SortBtn = ({ text, isActive, reverse, onClick }) => {
  // sortMethod =
  const cnSortIsActive = cn("favorites__sort", { sortActive: isActive });
  const cnArrowUp = cn("arrow__up arrow", { sortActive: isActive && reverse });
  const cnArrowDown = cn("arrow__down arrow", {
    sortActive: isActive && !reverse,
  });
  return (
    <button className={cnSortIsActive} onClick={() => onClick()}>
      {text}
      <div className="arrows">
        <div className={cnArrowUp}></div>
        <div className={cnArrowDown}></div>
      </div>
    </button>
  );
};

export default SortBtn;
