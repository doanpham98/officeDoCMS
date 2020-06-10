import Axios from 'axios'

const baseUrl = "https://5ee0a54430deff0016c3f36d.mockapi.io/api/products"

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
    return Axios.put(`${baseUrl}/${id}`,changes)
}

const searchItem=(keyword)=>{
    return Axios.get(`${baseUrl}?q=${keyword}`)
}

export default {
    getAll,addNewItem,deleteItem,editItem,searchItem
}