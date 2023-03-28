import { useDispatch, useSelector } from "react-redux";
import { setQtyDays } from "../../Redux/searchSlice";

const InputQtyDays = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.search);

  return (
    <div className="searchform__item">
      <div className="searchform__title">Количество дней</div>
      <input
        type="number"
        className="searchform__field"
        placeholder="1"
        onChange={(e) => dispatch(setQtyDays(e.target.value))}
        value={state.qtyDays}
      />
    </div>
  );
};

export default InputQtyDays;
