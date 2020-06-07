
export default function (state=[],action){

      switch(action.type){
          
          case "FETCH_DATA":
            return action.payload

          case "ADD_PRODUCT":
            return [...state].concat(action.payload)

          case "SEARCH_PRODUCT":
            return action.payload
          
           case "EDIT_PRODUCT":
            return [...state].map(product=>{
               return product.id===action.id?action.payload:product
            })

            case "DELETE_PRODUCT":
                return [...state].filter(product=>product.id!==action.payload)
        default:
            return state
      }
}