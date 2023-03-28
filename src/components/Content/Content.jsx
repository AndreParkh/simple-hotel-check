import React from "react";
import { useSelector } from "react-redux";

import { hotelItemExample, hotelList } from "../../Redux/HotelItemExample";
import { HotelItem } from "./HotelItem";

const Content = () => {
  const favHotelList = useSelector((state) => state.hotels);
  const idFavHotelList = favHotelList.map((hotel) => hotel.hotelId);
  const qtyFavHotel = favHotelList.length;
  //   console.log("content", idFavHotelList);

  //Title
  const showLocation = () => {
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

  const showDate = () => {
    return <div className="content__date">07 июля 2020</div>;
  };

  const showTitle = () => {
    return (
      <div className="content__title">
        {showLocation()}
        {showDate()}
      </div>
    );
  };

  //Images
  const showImages = () => {
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
  const showQtyFavotites = (qtyHotels) => {
    return (
      <div className="content__favorites">
        <p>
          Добавлено в Избранное: <span>{qtyHotels}</span> отеля
        </p>
      </div>
    );
  };

  console.log(hotelList);
  const hotels = hotelList.map((item, idx) => {
    const isHotelFav = idFavHotelList.includes(item.hotelId);
    // console.log(idx, item, isHotelFav);
    return (
      <HotelItem hotel={item} withIcon={true} isFav={isHotelFav} key={idx} />
    );
  });
  //   {
  //   for (let i = 0; i < 10; i++) {
  //     hotels.push(<HotelItem hotel={hotelList} withImg={true} key={i} />);
  //   }

  return (
    <div className="template content">
      {showTitle()}
      {showImages()}
      {showQtyFavotites(qtyFavHotel)}
      <div className="content__items scrollbar">{hotels}</div>
    </div>
  );
};

export default Content;
