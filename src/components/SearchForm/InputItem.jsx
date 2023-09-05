import React from "react";

const InputItem = ({
  label,
  id,
  type,
  state,
  setState,
  blurHandler = () => {},
}) => {
  return (
    <div className="searchform__item">
      <label className="searchform__title" htmlFor={id}>
        {label}
      </label>
      <br></br>
      <input
        type={type}
        className="searchform__field"
        id={id}
        onChange={setState}
        defaultValue={state}
        onBlur={(e) => blurHandler(e)}
      />
    </div>
  );
};

export default InputItem;
