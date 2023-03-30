 // import './App.css';
import React from 'react';
import Header from './components/Header/Header'
import SearchForm from './components/SearchForm/SearchForm';
import Favorites from './components/Favorites/Favorites';
import Content from './components/Content/Content';
import { useState } from 'react';

function App() {
const [hotelList, getHotelList] = useState([])
const [location, getLocation] = useState('')
const [checkInData, getCheckInData] = useState('')

const getData= (hotelList, location, checkInData) => {
	getHotelList(hotelList)
	getLocation(location)
	getCheckInData(checkInData)
}

  return (
    <div className="screen">
		<Header/>
		<div className="container">
			<div className="column">
				<div className="column__left">
					<SearchForm getHotelList={getData}/>
					<Favorites/>
				</div>
				<div className="column__right">
					<Content 
						hotelList={hotelList} 
						location={location} 
						checkIn={checkInData}/>
				</div>
			</div>
		</div>
    </div>
  );
}

export default App;
