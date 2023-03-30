import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocation } from "../../Redux/searchSlice";

const InpuLocation = () => {
  const state = useSelector((state) => state.search);
  const dispatch = useDispatch();

  return (
    <div className="searchform__item">
      <div className="searchform__title">Локация</div>
      <input
        type="text"
        className="searchform__field"
        placeholder="Москва"
        onChange={(e) => dispatch(getLocation(e.target.value))}
        value={state.location}
      />
    </div>
  );
};

export default InpuLocation;
