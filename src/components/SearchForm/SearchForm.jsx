import InputDate from "./InputDate";
import InputLocation from "./InputLocation";
import InputQtyDays from "./InputQtyDays";

const SearchForm = () => {
  return (
    <div className="template searchform">
      <InputLocation />
      <InputDate />
      <InputQtyDays />
      <button className="searchform__btn btn">Найти</button>
    </div>
  );
};

export default SearchForm;
