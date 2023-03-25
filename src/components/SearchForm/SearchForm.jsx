import { useDispatch, useSelector } from "react-redux";
import { setDate, setLocation, setQtyDays } from "../../Redux/searchSlice";

const SearchForm = () => {
  const state = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const GetLocation = () => {
    return (
      <div className="searchform__item">
        <div className="searchform__title">Локация</div>
        <input
          type="text"
          className="searchform__field"
          placeholder="Москва"
          onChange={(e) => dispatch(setLocation(e.target.value))}
          value={state.location}
        />
      </div>
    );
  };

  const GetDate = () => {
    return (
      <div className="searchform__item">
        <div className="searchform__title">Дата заселения</div>
        <input
          type="date"
          className="searchform__field"
          onChange={(e) => dispatch(setDate(e.target.value))}
          value={state.date}
        />
      </div>
    );
  };

  const GetQtyDays = () => {
    return (
      <div className="searchform__item">
        <div className="searchform__title">Количество дней</div>
        <input
          type="number"
          className="searchform__field"
          placeholder="1"
          //   onChange={(e) => dispatch(setQtyDays(e.target.value))}
          //   value={state.qtyDays}
        />
      </div>
    );
  };

  return (
    <div className="template searchform">
      {GetLocation()}
      {GetDate()}
      {GetQtyDays()}
      <button className="searchform__btn btn">Найти</button>
    </div>
  );
};

export { SearchForm };
