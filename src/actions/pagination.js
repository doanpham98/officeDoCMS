import webService from '../webService'

export const changeNumberItem = (payload)=>{
    return{
        type: "CHANGE_NUMBER_ITEM",
        payload
    }
}

const getItem = (payload)=>{
    return{
        type:"GET_ITEM",
        payload
    }
}

export const getItemAsync = (_page,_limit)=>{
     return dispatch=>{
      webService.paginate(_page,_limit)
      .then(res=>dispatch(getItem({_page,data:res.data})))
      .catch(err=>console.error(err))
     }
}