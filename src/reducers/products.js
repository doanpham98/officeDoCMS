



export default function (state=[],action){
      switch(action.type){
          case "FETCH_DATA":
            return action.payload
          case "ADD_PRODUCT":
            return [...state].concat(action.payload)
        default:
            return state
      }
}