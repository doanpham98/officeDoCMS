import React, { useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/free-solid-svg-icons'
export default function ThItem({text,handleSort}) {

    const [toggle,setToggle] = useState(true);
    
    return (
             <th>{text}  <FontAwesomeIcon icon={faSort} onClick={()=>{
                 setToggle(!toggle)
                 return handleSort(text,toggle)
                }}/></th>
    )
}
