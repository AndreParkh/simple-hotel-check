import React from "react";
import { useSelector } from "react-redux";

import HotelItem from "../HotelItem/HotelItem";
import Title from "./Title";
import { isDeepEqual } from "../../PureFunctions/pureFunctions";

const Content = ({ hotelList }) => {
  const favHotelList = useSelector((state) => state.hotels);
  const idFavHotelList = favHotelList.map(
    (hotelInfo) => hotelInfo.hotel.hotelId
  );
  const qtyFavHotel = favHotelList.length;

  //Images
  const Images = () => {
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
  const QtyFavotites = ({ qty }) => {
    return (
      <div className="content__favorites">
        <p>
          Добавлено в Избранное: <span>{qty}</span> отеля
        </p>
      </div>
    );
  };

  console.log("content", hotelList);

  const hotels = hotelList.map((item, idx) => {
    const isHotelFav = idFavHotelList.includes(item.hotelId);
    // if (isHotelFav) {
    //   const mbHotelFav = favHotelList.find(
    //     (hotelInfo) => hotelInfo.hotel.hotelId === item.hotelId
    //   );
    //   debugger;
    //   isHotelFav = isDeepEqual(mbHotelFav.hotel, item);
    // }
    return (
      <HotelItem hotel={item} withIcon={true} isFav={isHotelFav} key={idx} />
    );
  });

  return (
    <div className="template content">
      <Title />
      <Images />
      <QtyFavotites qty={qtyFavHotel} />
      <div className="content__items scrollbar">{hotels}</div>
    </div>
  );
};

export default Content;
