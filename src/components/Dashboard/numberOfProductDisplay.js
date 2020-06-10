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
        <Input type="number" defaultValue="10" min="5" max="20" step="5" onChange={e=>hadleChange(e)}></Input> <span>entries</span>
    </div>
}
export default NumberOfItemDisplay