import React, { useEffect } from "react";

import { useState } from "react";

import Content from "../components/Content/Content";
import Favorites from "../components/Favorites/Favorites";
import Header from "../components/Header/Header";
import SearchForm from "../components/SearchForm/SearchForm";
import { useNavigate } from "react-router-dom";

const ContentPage = () => {
  const [hotelList, getHotelList] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (!isAuth) {
      navigate("/Auth");
    }
  }, [isAuthenticated]);

  return (
    <div className="screen">
      <Header setIsAuth={setIsAuthenticated} />
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
