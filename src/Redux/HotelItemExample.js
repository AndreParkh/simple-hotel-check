const hotelItemExample = {
	"location":{
	  "country":"Russia",
	  "geo":{
		"lon":37.617508,
		"lat":55.752041
	  },
	  "state":null,
	  "name":"Moscow"
	},
	"priceAvg":60897.74,
	"pricePercentile":{
	  "3":28863.56,	
	  "10":28863.56,
	  "35":47805.27,
	  "50":59531.09,
	  "75":65435,
	  "99":120128.17
	},
	"hotelName":"Mercure Arbat Moscow",
	"stars":5,
	"locationId":12153,
	"hotelId":333561,
	"priceFrom":23863.56
 }
const hotelItemExample2 = {
	"location":{
	  "country":"Russia",
	  "geo":{
		"lon":37.617508,
		"lat":55.752041
	  },
	  "state":null,
	  "name":"Moscow"
	},
	"priceAvg":60897.74,
	"pricePercentile":{
	  "3":28863.56,	
	  "10":28863.56,
	  "35":47805.27,
	  "50":59531.09,
	  "75":65435,
	  "99":120128.17
	},
	"hotelName":"Mercure Arbat 2",
	"stars":4,
	"locationId":12153,
	"hotelId":333562,
	"priceFrom":15863.56
 }
const hotelItemExample3 = {
	"location":{
	  "country":"Russia",
	  "geo":{
		"lon":37.617508,
		"lat":55.752041
	  },
	  "state":null,
	  "name":"Moscow"
	},
	"priceAvg":60897.74,
	"pricePercentile":{
	  "3":28863.56,	
	  "10":28863.56,
	  "35":47805.27,
	  "50":59531.09,
	  "75":65435,
	  "99":120128.17
	},
	"hotelName":"Mercure Arbat 3",
	"stars":3,
	"locationId":12153,
	"hotelId":333563,
	"priceFrom":28863.56
 }

const hotelList = [ 
	hotelItemExample,
	hotelItemExample2,
	hotelItemExample3,
]

// for (let i = 0; i < 5; i++) {
// 	hotelList.push(hotelItemExample)
// }


export { hotelItemExample, hotelList}