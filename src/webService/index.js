import Axios from 'axios'

const baseUrl = "http://localhost:3001/products"

const getAll = ()=>{
    return Axios.get(baseUrl)
}

const addNewItem = (newItem)=>{
    return Axios.post(baseUrl,newItem)
}

const deleteItem = (id)=>{
    return Axios.delete(`${baseUrl}/${id}`)
}

const editItem = (id,changes)=>{
    return Axios.patch(`${baseUrl}/${id}`,changes)
}

const searchItem=(keyword)=>{
    return Axios.get(`${baseUrl}?q=${keyword}`)
}

const paginate=(_page,_limit)=>{
    return Axios.get(`${baseUrl}?_page=${_page}&_limit=${_limit}`)
}

export default {
    getAll,addNewItem,deleteItem,editItem,searchItem,paginate
}