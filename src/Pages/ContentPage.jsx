import React from "react";

import { useState } from "react";

import Content from "../components/Content/Content";
import Favorites from "../components/Favorites/Favorites";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";

const ContentPage = () => {
  const [hotelList, getHotelList] = useState([]);

  return (
    <div className="screen">
      <Header />
      <div className="container">
        <div className="column">
          <div className="column__left">
            <SearchForm getHotelList={getHotelList} />
            <Favorites />
          </div>
          <div className="column__right">
            <Content hotelList={hotelList} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
