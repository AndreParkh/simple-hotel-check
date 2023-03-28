 // import './App.css';
import React from 'react';
import Header from './components/Header/Header'
import SearchForm from './components/SearchForm/SearchForm';
import Favorites from './components/Favorites/Favorites';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="screen">
		<Header/>
		<div className="container">
			<div className="column">
				<div className="column__left">
					<SearchForm/>
					<Favorites/>
				</div>
				<div className="column__right">
					<Content/>
				</div>
			</div>
		</div>
    </div>
  );
}

export default App;
