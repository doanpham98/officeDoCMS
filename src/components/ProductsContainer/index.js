import React from 'react'
import {Table} from 'reactstrap'
import { useSelector } from 'react-redux'
import Product from './product'
import './style.css'
export default function ProductsContainer (){

  const data=useSelector(state=>state.pagination.data)

    return <Table className='mt-5'>
    <thead>
      <tr>
        <th>id</th>
        <th>Product</th>
        <th>Price</th>
        <th>Image</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {data.map((product,index)=><Product key={index} id={product.id} name={product.name} price={product.price} image={product.image}/>)}
    </tbody>
  </Table>
}