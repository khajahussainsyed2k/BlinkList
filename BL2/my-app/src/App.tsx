import React from 'react';
import logo from './logo.svg';
import './App.css';

import EntrepreneurshipPage from './pages/EntrepreneurshipPage'
import BookDetailViewPage from './pages/BookDetailView'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Finished from './pages/Finished';
import CurrentlyReading from './pages/CurrentlyReading';
const App = () => {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/Entrepreneurship' element={<EntrepreneurshipPage/>}></Route>
        <Route path='/BookDetailViewPage' element={<BookDetailViewPage/>}></Route>
        <Route path='/Finished' element={<Finished/>}></Route>
        <Route path='/' element={<CurrentlyReading/>}></Route>
      </Routes>
    </Router>
    

</>
  );
}

export default App;
