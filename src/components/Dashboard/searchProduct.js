import React from 'react'
import {Input} from "reactstrap"
import { useDispatch } from 'react-redux'

export default function SearchBoxProduct(){

    const dispatch = useDispatch(); 

    const onSearchProduct=(e)=>{
       const keyword = e.target.value
       dispatch()
    }

    return <Input className="search-box" type="text" placeholder="Search some thing..." onInput={e=>onSearchProduct(e)}></Input>
}
