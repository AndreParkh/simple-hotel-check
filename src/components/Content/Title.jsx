import React from "react";
import { formatDate } from "../../PureFunctions/pureFunctions";

//Title

const Title = ({ location, checkIn }) => {
  const showLocation = () => {
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
      {showLocation()}
      <div className="content__date">{checkIn && formatedCheckIn}</div>
    </div>
  );
};

export default Title;
