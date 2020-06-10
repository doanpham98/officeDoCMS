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
          case "SORT":
                switch(action.payload.valueSort){
                   case "id":
                      if(action.payload.waySort) return [...state].sort((a,b)=>a.id-b.id)
                      else return [...state].sort((a,b)=>b.id-a.id)
                   case "price":
                      if(action.payload.waySort) return [...state].sort((a,b)=>a.price-b.price)
                      else return [...state].sort((a,b)=>b.price-a.price)
                  case "product":
                    if(action.payload.waySort) return [...state].sort(function(a, b) {
                      var nameA = a.name.toUpperCase(); 
                      var nameB = b.name.toUpperCase(); 
                      if (nameA < nameB) {
                        return -1;
                      }
                      if (nameA > nameB) {
                        return 1;
                      }
                      return 0;
                    })
                    else return [...state].sort(function(a, b) {
                      var nameA = a.name.toUpperCase(); 
                      var nameB = b.name.toUpperCase(); 
                      if (nameA > nameB) {
                        return -1;
                      }
                      if (nameA < nameB) {
                        return 1;
                      }
                    
                      // name trùng nhau
                      return 0;
                    })
                      default:
                        return state
                }
        default:
            return state
      }
}