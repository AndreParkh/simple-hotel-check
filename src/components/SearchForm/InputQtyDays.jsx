import { useDispatch, useSelector } from "react-redux";
import { getQtyDays } from "../../Redux/searchSlice";

const InputQtyDays = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.search);

  return (
    <div className="searchform__item">
      <label className="searchform__title" htmlFor="searchQtyDays">
        Количество дней
      </label>
      <input
        type="number"
        className="searchform__field"
        placeholder="1"
        id="searchQtyDays"
        onChange={(e) => dispatch(getQtyDays(e.target.value))}
        value={state.qtyDays}
      />
    </div>
  );
};

export default InputQtyDays;
