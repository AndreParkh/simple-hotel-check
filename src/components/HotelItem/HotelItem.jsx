import React from "react";
import cn from "classnames";

import { useDispatch, useSelector } from "react-redux";
import { addToFavorite, removeFromFavorite } from "../../Redux/hotelSlice";
import { formatDate, formatPrice } from "../../PureFunctions/pureFunctions";

const HotelItem = ({
  hotel,
  withIcon = false,
  isFav,
  date = "",
  qtyDays = 0,
}) => {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);
  const favHotels = useSelector((state) => state.hotels);

  const formatedCheckIn = formatDate(searchState.date);
  const { hotelName, priceFrom, stars } = hotel;
  const classNameItem = cn({
    "content__item hotel": withIcon,
    "favorites__item hotel": !withIcon,
  });

  const favClass = cn({ isFavorite__active: isFav });

  const svgFavorite = () => {
    return (
      <div
        className="hotel__isFavorite"
        onClick={() => {
          if (!isFav) {
            dispatch(
              addToFavorite({
                hotel,
                date: formatedCheckIn,
                qtyDays: searchState.qtyDays,
              })
            );
            return;
          }
          dispatch(removeFromFavorite(hotel));
        }}
      >
        <svg
          width="23"
          height="20"
          viewBox="0 0 23 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={favClass}
            d="M20.3807 2.59133C19.8676 2.08683 19.2583 1.68663 18.5878 1.41358C17.9172 1.14054 17.1985 1 16.4727 1C15.7468 1 15.0281 1.14054 14.3576 1.41358C13.687 1.68663 13.0778 2.08683 12.5646 2.59133L11.4997 3.63785L10.4348 2.59133C9.39834 1.57276 7.99258 1.00053 6.52679 1.00053C5.06099 1.00053 3.65523 1.57276 2.61876 2.59133C1.58229 3.6099 1 4.99139 1 6.43187C1 7.87235 1.58229 9.25383 2.61876 10.2724L3.68367 11.3189L11.4997 19L19.3158 11.3189L20.3807 10.2724C20.8941 9.76814 21.3013 9.16942 21.5791 8.51045C21.857 7.85148 22 7.14517 22 6.43187C22 5.71857 21.857 5.01225 21.5791 4.35328C21.3013 3.69431 20.8941 3.09559 20.3807 2.59133Z"
          />
        </svg>
      </div>
    );
  };

  //Image
  const Icon = () => {
    return (
      <div className="hotel__img">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="32" cy="32" r="32" fill="#41522E" fillOpacity="0.05" />
          <path
            d="M29.9359 14.335C29.1648 15.0605 26.0586 17.9801 23.0371 20.8213C20.0129 23.6596 17.1172 26.3847 16.5977 26.8722C16.0781 27.3598 15.3398 28.0534 14.957 28.4104C14.5742 28.7702 14.2023 29.1214 14.1312 29.1939L14 29.3245L14.9023 30.3983C15.3973 30.9875 15.8211 31.4692 15.8402 31.4692C15.8621 31.4663 17.4891 29.9572 19.4578 28.1143C29.7883 18.4444 31.4562 16.8889 31.4754 16.8947C31.4863 16.9005 32.7605 18.0933 34.3082 19.5472C35.8531 21.0012 39.3449 24.2806 42.0629 26.8374C44.7809 29.3942 47.0176 31.4866 47.0312 31.4866C47.0449 31.4866 47.0641 31.4721 47.0723 31.4576C47.0859 31.4344 47.1023 31.4373 47.1297 31.4605C47.1816 31.504 47.1023 31.5911 48.0566 30.4419C48.475 29.9398 48.8578 29.4813 48.9098 29.4232L49.0027 29.3187L46.7113 27.1741C45.4508 25.9929 42.4895 23.2184 40.127 21.0099C37.7672 18.7985 34.8797 16.0966 33.7094 15.0025L31.5875 13.0145H31.4645H31.3414L29.9359 14.335Z"
            fill="#41522E"
          />
          <path
            d="M29.6051 21.0071C28.6098 21.9416 25.859 24.5274 23.4938 26.7504L19.1953 30.7931L19.2008 39.1281L19.209 47.4631L19.2691 47.5821C19.302 47.6489 19.3812 47.7504 19.4441 47.8056C19.6711 48.0145 19.3785 48 23.7125 48H27.6172L27.6227 44.3056C27.6309 40.6315 27.6309 40.614 27.6883 40.4834C27.7594 40.3151 27.8961 40.17 28.0547 40.0946C28.1777 40.0336 28.1969 40.0336 31.4016 40.0249C34.9672 40.0162 34.8141 40.0104 35.0164 40.199C35.1586 40.3325 35.2379 40.4805 35.2707 40.6721C35.2926 40.7882 35.3008 41.9897 35.3008 44.4217V48L39.3586 47.9942L43.4191 47.9855L43.5012 47.9014C43.5477 47.8549 43.6242 47.7185 43.6734 47.5966L43.7637 47.3761L43.7691 39.0759L43.7746 30.7757L37.6496 25.044C34.177 21.7936 31.5 19.3093 31.4699 19.3093C31.4344 19.3064 30.7945 19.8897 29.6051 21.0071Z"
            fill="#41522E"
          />
        </svg>
      </div>
    );
  };

  //Title
  const Title = ({ name }) => {
    return (
      <div className="hotel__title">
        <div className="hotel__name">{name}</div>
        {svgFavorite()}
      </div>
    );
  };

  //Date info
  const DateInfo = ({ checkInDate }) => {
    return (
      <div className="hotel__dateInfo">
        <div className="hotel__date">{withIcon ? checkInDate : date}</div>
        <div className="hotel__line"></div>
        <div className="hotel__qtyDays">
          {withIcon ? searchState.qtyDays : qtyDays} день
        </div>
      </div>
    );
  };

  // Info
  const Info = ({ price }) => {
    // const formatPrice = (num) =>
    //   `${Math.floor(num / 1000)} ${Math.floor(num % 1000)}`;

    //Stars
    const SvgStar = ({ isfill }) => {
      return (
        <svg
          className={isfill ? "rating_fill" : "rating_noFill"}
          width="17"
          height="16"
          viewBox="0 0 17 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.65985 2.0156C7.19357 3.13043 6.62617 4.48741 6.39865 5.03227C6.17254 5.57565 5.98153 6.02601 5.98153 6.02601C5.98153 6.02601 5.54896 6.06293 5.0237 6.10279C4.49984 6.14266 3.54342 6.21501 2.89878 6.26374C2.25413 6.31395 1.37214 6.38039 0.939574 6.41288C0.507005 6.44536 0.117973 6.47637 0.0758401 6.4808L0 6.48966L0.0688178 6.55906C0.108142 6.59597 0.540712 7.00204 1.02946 7.46125C1.51961 7.92047 2.16144 8.52144 2.45638 8.79756C4.23581 10.4661 4.64731 10.8515 4.66416 10.8648C4.68804 10.884 4.76809 10.5281 3.90295 14.2093C3.54342 15.739 3.2527 17 3.2527 17C3.2527 17 4.47316 16.2632 5.96047 15.3507C7.44637 14.4381 8.67245 13.6939 8.68509 13.6969C8.69633 13.6998 9.24406 14.0542 9.89994 14.4824C10.5572 14.9121 11.5361 15.5515 12.0768 15.9044C12.6175 16.2573 13.2158 16.6486 13.4068 16.7726C13.5964 16.8981 13.7622 17 13.7622 17C13.7622 17 13.7678 16.9749 13.7622 16.9439C13.7537 16.8937 13.1849 14.1428 12.6723 11.6754C12.5501 11.0818 12.449 10.5857 12.449 10.5724C12.449 10.5532 13.3605 9.7411 16.6581 6.81894C17.0205 6.49852 17.0247 6.49409 16.9811 6.48375C16.9559 6.47785 15.5613 6.33019 13.8815 6.15447C12.2018 5.97876 10.8142 5.82963 10.7974 5.82224C10.7763 5.81338 10.7103 5.65834 10.5179 5.16368C10.3803 4.80635 9.93926 3.6679 9.53899 2.63282C9.13873 1.59773 8.74689 0.583315 8.66824 0.381023C8.58959 0.177254 8.52218 0.00744629 8.51656 6.29425e-05C8.51234 -0.00584412 8.12612 0.900782 7.65985 2.0156Z" />
        </svg>
      );
    };

    const Stars = ({ qtyStars }) => {
      const allStars = [];
      for (let i = 0; i < 5; i++) {
        allStars.push(<SvgStar isfill={i < qtyStars} key={i} />);
      }
      return allStars;
    };

    return (
      <div className="hotel__info">
        <div className="hotel__rating">
          <Stars qtyStars={stars} />
        </div>
        <div className="hotel__price">
          <p>
            Price: <b>{formatPrice(price)} ₽</b>
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className={classNameItem}>
      {withIcon && Icon()}
      <div className="content__hotel">
        <Title name={hotelName} />
        <DateInfo checkInDate={formatedCheckIn} />
        <Info price={priceFrom} />
      </div>
    </div>
  );
};

export default HotelItem;
