import React from 'react';
import './App.css';
import {Routes,Route} from "react-router-dom";
import ListCategory from './components/ListCategory';
import IdMeal from './components/IdMeal';
import Home from './components/Home';
// import AboutMe from './components/AboutMe';
function App() {

  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' index element={<AboutMe/>} /> */}
        <Route path='/' index element={<Home/>}/>
        <Route path='/category/:category' index element={<ListCategory  />} />
        <Route path='/id/:id' index element={<IdMeal/>} />
      </Routes>
     
    </div>
  );
}

export default App;
