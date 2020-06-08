import React, { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDataAsync } from './actions/product'
import Header from "./components/Heading"
import Products from "./components/ProductsContainer"
import Dashboard from './components/Dashboard'
import Pagination from './components/Pagination'
import {getItemAsync} from './actions/pagination'
function App() {
  const _limit = useSelector(state=>state.pagination._limit)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataAsync())
    dispatch(getItemAsync(1,_limit))
  }, [dispatch,_limit])

  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Products />
      <Pagination/>
    </div>
  );
}

export default App;
