
export default function (state=[],action){

      switch(action.type){
          
          case "FETCH_DATA":
            return action.payload

          case "ADD_PRODUCT":
            return [...state].concat(action.payload)

          case "SEARCH_PRODUCT":
            return action.payload
            
        default:
            return state
      }
}