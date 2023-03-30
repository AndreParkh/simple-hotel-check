import React from "react";
import { useSelector } from "react-redux";

// import { hotelList } from "../../Redux/HotelItemExample";
import HotelItem from "./HotelItem";
import Title from "./Title";

import { formatDate } from "../../PureFunctions/pureFunctions";

const Content = ({ hotelList, location, checkIn }) => {
  const favHotelList = useSelector((state) => state.hotels);
  const idFavHotelList = favHotelList.map((hotel) => hotel.hotelId);
  const qtyFavHotel = favHotelList.length;
  //   console.log("content", idFavHotelList);
  const formatedCheckIn = formatDate(checkIn)


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

  console.log('content',hotelList);

  const hotels = hotelList.map((item, idx) => {
    const isHotelFav = idFavHotelList.includes(item.hotelId);
    // console.log(idx, item, isHotelFav);
    return (
      <HotelItem 
        hotel={item} 
        withIcon={true} 
        isFav={isHotelFav}
        date={formatedCheckIn}
        // qtyDays={qtyDays}
        key={idx} />
    );
  });
  //   {
  //   for (let i = 0; i < 10; i++) {
  //     hotels.push(<HotelItem hotel={hotelList} withImg={true} key={i} />);
  //   }

  return (
    <div className="template content">
      <Title location={location} checkIn={checkIn} />
      {showImages()}
      {showQtyFavotites(qtyFavHotel)}
      <div className="content__items scrollbar">{hotels}</div>
    </div>
  );
};

export default Content;
