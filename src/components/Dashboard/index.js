import React from 'react'
import ButtonAddNewProduct from './btnAddNewProduct'
import SearchBoxProduct from './searchProduct'
import NumberOfItemDisplay from './numberOfProductDisplay'
import './style.css'
export default function Dashboard (){
   return <div style={{height:'1em'}}>
            <ButtonAddNewProduct/>
            <NumberOfItemDisplay/>
            <SearchBoxProduct/>
         </div>
}