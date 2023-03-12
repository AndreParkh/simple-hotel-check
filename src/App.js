// import './App.css';
import React from 'react';
import { Header } from './components/Header'
import { FindForm } from './components/FindForm';

function App() {
  return (
    <div className="screen">
		<Header/>
		<div class="container">
			<div class="column">
				<div class="column__left">
					<FindForm/>
				</div>
				<div class="column__right">

				</div>
			</div>
		</div>
    </div>
  );
}

export default App;
