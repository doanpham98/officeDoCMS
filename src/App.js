import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Heading"
import Products from "./components/ProductsContainer"
import { useDispatch } from 'react-redux';
import {fetchDataAsync} from './actions/table'
function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
      dispatch(fetchDataAsync())
  },[dispatch])
  return (
    <div className="App">
      <Header/>
      <Products/>
    </div>
  );
}

export default App;
