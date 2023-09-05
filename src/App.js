 // import './App.css';
import React from 'react';

import AuthForm from './Pages/AuthPage';
import ContentPage from './Pages/ContentPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (

	<BrowserRouter>
	<Routes>
		<Route path='/' element={<AuthForm/>}></Route>
		<Route path="Search" element={<ContentPage/>}/>
	</Routes>
  </BrowserRouter>



  );
}

export default App;
