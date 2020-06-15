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
function jsUcfirst(string)
{
return string.charAt(0).toUpperCase() + string.slice(1);
}


export const searchProductAsync = (keyword)=>{
    return dispatch=>{
        webService.getAll()
        .then(res=>dispatch(searchProduct(keyword===''?res.data:res.data.filter(product=>product.name.indexOf(jsUcfirst(keyword))>=0))))
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

const deleteProduct = (payload)=>{
    return{
        type:"DELETE_PRODUCT",
        payload
    }
}

export const deleteProductAsync = (id)=>{
    return dispatch=>{
        webService.deleteItem(id)
        .then(()=>dispatch(deleteProduct(id)))
        .catch(err=>console.error(err))
    }
}