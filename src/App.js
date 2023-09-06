 // import './App.css';
import React from 'react';

import AuthForm from './Pages/AuthPage';
import ContentPage from './Pages/ContentPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (

	<BrowserRouter>
	<Routes>
		<Route path="/" element={<ContentPage/>}/>
		<Route path='/Auth' element={<AuthForm/>}/>
	</Routes>
  </BrowserRouter>



  );
}

export default App;
