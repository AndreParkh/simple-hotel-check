import { useDispatch, useSelector } from "react-redux";
import { setDate } from "../../Redux/searchSlice";

const InputDate = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.search);

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

export default InputDate;
