import InputDate from "./InputDate";
import InputLocation from "./InputLocation";
import InputQtyDays from "./InputQtyDays";
import { calcCheckOutDate, generateRequest } from "../../PureFunctions/pureFunctions";
import { useSelector } from "react-redux";

const SearchForm = ({ getHotelList}) => {
  
  const state = useSelector(state => state.search)
  
  const { date, qtyDays, location } = state

  async function fetchRequest(checkIn, qtyDays, location) {
    
    const checkOut = calcCheckOutDate(checkIn, qtyDays)
    const request = generateRequest(checkIn, checkOut, location)

    let response = await fetch(request);
    let json

    console.log(response)
    if (response.ok) { // если HTTP-статус в диапазоне 200-299
      // получаем тело ответа (см. про этот метод ниже)
      json = await response.json();
    } else {
      alert("Ошибка HTTP: " + response.status);
    }
    getHotelList(json, location, checkIn)

    console.log(json)

    return json
  }
  

  return (
    <div className="template searchform">
      <InputLocation />
      <InputDate />
      <InputQtyDays />
      <button className="searchform__btn btn"
        onClick={() => fetchRequest(date, qtyDays, location) }>Найти</button>
    </div>
  );
};



export default SearchForm;
