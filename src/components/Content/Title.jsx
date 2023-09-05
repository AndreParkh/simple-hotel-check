import React from "react";
import { formatDate } from "../../PureFunctions/pureFunctions";
import { useSelector } from "react-redux";

//Title

const Title = () => {
  const state = useSelector((state) => state.search);
  const { location, date: checkIn } = state;

  const Location = () => {
    return (
      <div className="content__location">
        <p>Отели</p>
        <span className="content__arr">
          <div className="content__arrow arrow"></div>
        </span>
        <p className="content__city">{location}</p>
      </div>
    );
  };

  const formatedCheckIn = formatDate(checkIn);

  return (
    <div className="content__title">
      <Location />
      <div className="content__date">{checkIn && formatedCheckIn}</div>
    </div>
  );
};

export default Title;
