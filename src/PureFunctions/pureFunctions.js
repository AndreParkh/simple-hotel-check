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
	let checkOutDate = new Date()
	const checkInDate = new Date(checkIn)
	
	console.log(checkInDate)

	checkOutDate.setDate(checkInDate.getDate() + Number(qtyDays))
	
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
	const unit = Math.floor(num % 1000)
	return `${thousand} ${('00' + unit).slice(-3)}`;
}

const formatDate = (strDate) => {
	const date = new Date(strDate)
	const day = date.getDate()
	const month = date.toLocaleString('ru', { month: 'long' })
	const year = date.getFullYear()

	return `${day} ${month} ${year}`
}
	

export { calcCheckOutDate, generateRequest, formatPrice, formatDate }