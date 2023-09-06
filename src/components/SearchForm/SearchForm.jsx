import {
  calcCheckOutDate,
  generateRequest,
} from "../../PureFunctions/pureFunctions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDate, getLocation, getQtyDays } from "../../Redux/searchSlice";
import InputItem from "./InputItem";
import { useState } from "react";

const SearchForm = ({ getHotelList }) => {
  const dispatch = useDispatch();
  const [searchLocation, setSearchLocation] = useState("Москва");
  const [searchDate, setSearchDate] = useState("2023-09-28");
  const [searchQtyDays, setSearchQtyDays] = useState(1);

  let json;
  async function fetchRequest(checkIn, qtyDays, location, event) {
    const checkOut = calcCheckOutDate(checkIn, qtyDays);
    const request = generateRequest(checkIn, checkOut, location);
    if (event) event.preventDefault();

    dispatch(getLocation(location));
    dispatch(getDate(checkIn));
    dispatch(getQtyDays(qtyDays));

    // console.log("fetchRequst request", request);
    let response = await fetch(request);

    // console.log("fetchRequst response", response);
    if (response.ok) {
      // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа
      json = await response.json();
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
    getHotelList(json, location, checkIn);

    console.log("fetchRequst json", json);
    // return ;
  }

  //   useEffect(() => fetchRequest(searchDate, searchQtyDays, searchLocation), []);
  useEffect(() => {
    const fun = () => fetchRequest(searchDate, searchQtyDays, searchLocation);
    fun();
  }, []);

  return (
    <form className="template searchform">
      <InputItem
        label="Локация"
        id="searchLocation"
        type="text"
        state={searchLocation}
        setState={(e) => setSearchLocation(e.target.value)}
      />
      <InputItem
        label="Дата заселения"
        id="searchDate"
        type="date"
        state={searchDate}
        setState={(e) => setSearchDate(e.target.value)}
      />
      <InputItem
        label="Количество дней"
        id="searchQtyDays"
        type="number"
        state={searchQtyDays}
        setState={(e) => setSearchQtyDays(e.target.value)}
      />

      <button
        className="searchform__btn btn"
        onClick={(e) =>
          fetchRequest(searchDate, searchQtyDays, searchLocation, e)
        }
      >
        Найти
      </button>
    </form>
  );
};

export default SearchForm;
