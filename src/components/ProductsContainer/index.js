import React from 'react'
import {Table} from 'reactstrap'
import { useSelector,useDispatch } from 'react-redux'
import Product from './product'
import './style.css'
import sort from '../../actions/sort'
import Item from './Th'
export default function ProductsContainer (){
  
  const currentPage = useSelector(state=>state.pagination._page)

  const limitItem = useSelector(state=>state.pagination._limit)
  
  const dispatch = useDispatch()

  const handleSort=(valueSort,waySort)=>{
       dispatch(sort({valueSort,waySort}))
  }
  
  

  const data=useSelector(state=>state.products.filter(
    (product,index)=>(
      (limitItem*(currentPage-1)-1)<index 
      && index<(limitItem*currentPage)
      )
  ))

    return <Table className='mt-5'>
    <thead style={{background:'#dc3545',color:"#fff"}}>
      <tr>
     <Item text="id" handleSort={handleSort}/>
     <Item text="product" handleSort={handleSort}/>
     <Item text="price" handleSort={handleSort}/>
        <th>Image </th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {data.map((product,index)=><Product key={index} id={product.id} name={product.name} price={product.price} image={product.image}/>)}
    </tbody>
  </Table>
}