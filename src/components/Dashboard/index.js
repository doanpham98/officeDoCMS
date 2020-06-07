import React from 'react'
import ButtonAddNewProduct from './btnAddNewProduct'
import SearchBoxProduct from './searchProduct'
import './style.css'
export default function Dashboard (){
   return <div style={{height:'1em'}}>
            <ButtonAddNewProduct/>
            <SearchBoxProduct/>
         </div>
}