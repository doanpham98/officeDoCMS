import React, { useEffect } from 'react'
import './App.css'
import { useDispatch } from 'react-redux'
import { fetchDataAsync } from './actions/table'
import Header from "./components/Heading"
import Products from "./components/ProductsContainer"
import Dashboard from './components/Dashboard'
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataAsync())
  }, [dispatch])
  return (
    <div className="App">
      <Header />
      <Dashboard />
      <Products />
    </div>
  );
}

export default App;
