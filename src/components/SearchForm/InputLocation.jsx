import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../Redux/searchSlice";

const InpuLocation = () => {
  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();

  return (
    <div className="searchform__item">
      <label className="searchform__title" htmlFor="searchLocation">
        Локация
      </label>
      <input
        type="text"
        className="searchform__field"
        placeholder="Москва"
        id="searchLocation"
        onChange={(e) => dispatch(getLocation(e.target.value))}
        value={state.location}
      />
    </div>
  );
};

export default InpuLocation;
