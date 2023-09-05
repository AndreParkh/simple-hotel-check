// const toggleClass = (e, className) => {
// 	const classes = e.target.classList
//     const isActive = classes.contains(className)
// 	console.log(classes)

// 	if (!isActive) {
// 		e.target.classList.add(className)
// 	} else {
// 		e.target.classList.remove(className)
// 	}
// }

const calcCheckOutDate = (checkIn, qtyDays) => {
	const checkInDate = new Date(checkIn)
	const checkOutDate = new Date(checkInDate)
	checkOutDate.setDate(checkOutDate.getDate() + Number(qtyDays))

	const day = checkOutDate.getDate()
	const month = checkOutDate.getMonth() + 1 	//Отчет начинается с 0 
	const year = checkOutDate.getFullYear()
	return `${year}-${('0' + month).slice(-2)}-${('0' + day).slice(-2)}`
}

const generateRequest = (checkInDate, checkOutDate, location) => {
	return `http://engine.hotellook.com/api/v2/cache.json?location=${location}&currency=rub&checkIn=${checkInDate}&checkOut=${checkOutDate}&limit=5`
}

const formatPrice = (num) => {
	const thousand = Math.floor(num / 1000)
	const units = Math.floor(num % 1000)
	return `${thousand} ${('00' + units).slice(-3)}`;
}

const formatDate = (strDate) => {
	const date = new Date(strDate)
	const day = date.getDate()
	const month = date.toLocaleString('ru', { month: 'long' })
	const year = date.getFullYear()

	return `${day} ${month} ${year}`
}

const isObject = (object) => {
	return object != null && typeof object === "object";
  };

const isDeepEqual = (object1, object2) => {

	const objKeys1 = Object.keys(object1);
	const objKeys2 = Object.keys(object2);

	if (objKeys1.length !== objKeys2.length) return false;
	
	for (let key of objKeys1) {
	  const value1 = object1[key];
	  const value2 = object2[key];
  
	  const isObjects = isObject(value1) && isObject(value2);
  
	  if ((isObjects && !isDeepEqual(value1, value2)) ||
		(!isObjects && value1 !== value2)
	  ) {
		return false;
	  }
	}
	return true;
  };
	

export { calcCheckOutDate, generateRequest, formatPrice, formatDate, isDeepEqual }