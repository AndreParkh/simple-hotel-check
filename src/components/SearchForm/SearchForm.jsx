import InputDate from "./InputDate";
import InputLocation from "./InputLocation";
import InputQtyDays from "./InputQtyDays";
import {
  calcCheckOutDate,
  generateRequest,
} from "../../PureFunctions/pureFunctions";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const SearchForm = ({ getHotelList }) => {
  const state = useSelector((state) => state.search);

  const { date, qtyDays, location } = state;
  console.log(state);

  async function fetchRequest(checkIn, qtyDays, location, event) {
    const checkOut = calcCheckOutDate(checkIn, qtyDays);
    const request = generateRequest(checkIn, checkOut, location);
    if (event) event.preventDefault();
    let response = await fetch(request);
    let json;

    console.log(response);
    if (response.ok) {
      // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      json = await response.json();
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
    getHotelList(json, location, checkIn);

    console.log(json);

    return json;
  }

  useEffect(() => fetchRequest(date, qtyDays, location), []);

  return (
    <form className="template searchform">
      <InputLocation />
      <InputDate />
      <InputQtyDays />
      <button
        className="searchform__btn btn"
        onClick={(e) => fetchRequest(date, qtyDays, location, e)}
      >
        Найти
      </button>
    </form>
  );
};

export default SearchForm;
