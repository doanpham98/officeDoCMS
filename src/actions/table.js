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
        .catch(err=>console.error(err))
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
        .catch(err=>console.error(err))
    }
}

const searchProduct = (payload)=>{
    return{
        type:"SEARCH_PRODUCT",
        payload
    }
}

export const searchProductAsync = (keyword)=>{
    return dispatch=>{
        webService.searchItem(keyword)
        .then(res=>dispatch(searchProduct(res.data)))
        .catch(err=>console.error(err))

    }
}

const editProduct = (id,payload)=>{
    return{
        type:"EDIT_PRODUCT",
        payload,id
    }
}

export const editProductAsync = (id,changes)=>{
    return dispatch=>{
        webService.editItem(id,changes)
        .then(res=>dispatch(editProduct(id,res.data)))
        .catch(err=>console.error(err))
    }
}