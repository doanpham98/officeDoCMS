import React from 'react'
import {Input} from 'reactstrap'
import {changeNumberItem} from "../../actions/pagination"
import { useDispatch } from 'react-redux'


const NumberOfItemDisplay = ()=>{

    const dispatch = useDispatch();

    const handleChangeNumeberItem = (e)=>{
        const newNumber = e.target.value;
        dispatch(changeNumberItem(newNumber));
    }


    return <div className="number-item">
        <Input type="number" defaultValue="10" min="5" max="20" step="5" onChange={e=>handleChangeNumeberItem(e)}></Input> <span>entries</span>
    </div>
}
export default NumberOfItemDisplay