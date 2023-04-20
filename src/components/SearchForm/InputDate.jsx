import { useDispatch, useSelector } from "react-redux";
import { getDate } from "../../Redux/searchSlice";

const InputDate = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.search);

  return (
    <div className="searchform__item">
      <label className="searchform__title" htmlFor="searchDate">
        Дата заселения
      </label>
      <input
        type="date"
        className="searchform__field"
        id="searchDate"
        onChange={(e) => dispatch(getDate(e.target.value))}
        value={state.date}
      />
    </div>
  );
};

export default InputDate;
