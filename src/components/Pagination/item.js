import React from 'react'
import {  PaginationItem, Button } from 'reactstrap'


const Item =({number,_page,handleClickItem})=>{
    

     return <PaginationItem>
        <Button color="info" className="ml-0" onClick={()=>handleClickItem(number)} disabled={number===_page?true:false}>
        {number}
        </Button>
   </PaginationItem>
}

export default Item