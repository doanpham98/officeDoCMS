import webService from '../webService'

const fetchData=(payload)=>{
    return {
        type:"FETCH_DATA",
        payload
    }
}
export const fetchDataAsync = ()=>{
   return dispatch=>{
        webService.getAll()
        .then(res=>dispatch(fetchData(res.data)))
   }
}

const addNewProduct=(payload)=>{
    return{
        type:"ADD_PRODUCT",
        payload
    }
}

export const addNewProductAsync = (newData)=>{
    return dispatch=>{
        webService.addNewItem(newData)
        .then(res=>dispatch(addNewProduct(res.data)))
    }
}