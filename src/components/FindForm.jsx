const FindForm = () => {
  return (
    <>
      <div className="template findform">
        <div className="findform__item">
          <div className="findform__title">Локация</div>
          <input type="text" class="findform__field" placeholder="Москва" />
        </div>
        <div className="findform__item">
          <div className="findform__title">Дата заселения</div>
          <input type="date" class="findform__field" />
        </div>
        <div className="findform__item">
          <div className="findform__title">Количество дней</div>
          <input type="number" class="findform__field" placeholder="1" />
        </div>
        <button className="findform__btn btn">Найти</button>
      </div>
    </>
  );
};

export { FindForm };
