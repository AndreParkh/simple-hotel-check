import React from "react";

import { HotelItem } from "./HotelItem";

const Content = () => {
  //Title
  const getLocation = () => {
    return (
      <div className="content__location">
        <p>Отели</p>
        <span className="content__arr">
          <div className="content__arrow arrow"></div>
        </span>
        <p className="content__city">Москва</p>
      </div>
    );
  };

  const getDate = () => {
    return <div className="content__date">07 июля 2020</div>;
  };

  const getTitle = () => {
    return (
      <div className="content__title">
        {getLocation()}
        {getDate()}
      </div>
    );
  };

  //Images
  const getImages = () => {
    const images = [null, null, null, null];
    return (
      <div className="content__imgs">
        {images.map((item, idx) => (
          <img className="content__img" key={idx}>
            {item}
          </img>
        ))}
      </div>
    );
  };

  //Favorites
  const getQtyFavotites = () => {
    const qtyFavotites = 3;
    return (
      <div className="content__favorites">
        <p>
          Добавлено в Избранное: <span>{qtyFavotites}</span> отеля
        </p>
      </div>
    );
  };

  const hotels = [];
  {
    for (let i = 0; i < 10; i++) {
      hotels.push(<HotelItem withImg={true} key={i} />);
    }
  }

  return (
    <div className="template content">
      {getTitle()}
      {getImages()}
      {getQtyFavotites()}
      <div className="content__items scrollbar">{hotels}</div>
    </div>
  );
};

export { Content };
