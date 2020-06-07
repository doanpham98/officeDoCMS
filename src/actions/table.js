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