import React from 'react'
import { Pagination, PaginationItem,  Button } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFastBackward , faFastForward ,faBackward, faForward } from '@fortawesome/free-solid-svg-icons'
import Item from './item'
import {getItemAsync} from '../../actions/pagination'

const Paginationn = () => {

    const _limit = useSelector(state=>state.pagination._limit)
  
    const _page = useSelector(state=>state.pagination._page)
    
    const totalPages = useSelector(state=>state.pagination.total)

    const pages=[];

    for(let i=1;i<=totalPages;i++){
        pages.push(i);
    }

    const dispatch = useDispatch()

    const handleClickItem = (number,_limit)=>{
         dispatch(getItemAsync(number,_limit))
    }


    return (
      <Pagination>
          <PaginationItem>
       <Button onClick={()=>handleClickItem(1,_limit)} className="ml-0" color="info" disabled={_page===1?true:false}><FontAwesomeIcon icon={faFastBackward}/></Button>
      </PaginationItem>
      <PaginationItem>
      <Button onClick={()=>handleClickItem(_page-1,_limit)} className="ml-0" color="info" disabled={_page===1?true:false}><FontAwesomeIcon icon={faBackward}/></Button>
      </PaginationItem>
        {pages.map((page,index)=><Item key={index} number={page} _page={_page} _limit={_limit} handleClickItem={handleClickItem}/>)}
        <PaginationItem>
        <Button onClick={()=>handleClickItem(_page+1,_limit)} className="ml-0" color="info" disabled={_page===pages.length?true:false}><FontAwesomeIcon icon={faForward}/></Button>
      </PaginationItem>
      <PaginationItem>
      <Button onClick={()=>handleClickItem(totalPages,_limit)} className="ml-0" color="info"  disabled={_page===pages.length?true:false}><FontAwesomeIcon icon={faFastForward}/></Button>
      </PaginationItem>
      </Pagination>
    );
  }
  
  export default Paginationn;