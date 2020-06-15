import React from 'react'
import {Input} from 'reactstrap'
import { useDispatch } from 'react-redux'
import {onChangeNumberLimitPage} from '../../actions/paginate'

const NumberOfItemDisplay = ()=>{

    const dispatch = useDispatch();
  
    const hadleChange = e=>{
        const value = e.target.value;
        dispatch(onChangeNumberLimitPage(value))
    }

    return <div className="number-item">
        <select id="limit" name="limit" onChange={hadleChange}defaultValue="10">
    <option value="5">5</option>
    <option value="10">10</option>
    <option value="15">15</option>
    <option value="20">20</option>
  </select><span>entries</span>
    </div>
}
export default NumberOfItemDisplay