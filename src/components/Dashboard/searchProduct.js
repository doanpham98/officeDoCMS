import React from 'react'
import {Input} from "reactstrap"
import { useDispatch } from 'react-redux'
import {searchProductAsync} from '../../actions/table'
export default function SearchBoxProduct(){

    const dispatch = useDispatch(); 

    const onSearchProduct=(e)=>{
       const keyword = e.target.value
       dispatch(searchProductAsync(keyword))
    }

    return <Input className="search-box" type="text" placeholder="Search some thing..." onInput={e=>onSearchProduct(e)}></Input>
}