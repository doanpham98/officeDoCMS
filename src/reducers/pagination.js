


export default function (state = { _limit: 10, _page: 1, data: [],total:0 }, action) {
    switch (action.type) {
        case "CHANGE_NUMBER_ITEM":
            return { ...state, _limit: action.payload }
        case "FETCH_DATA":
            return {...state, total:Math.ceil(action.payload.length/state._limit)}
        case "GET_ITEM":
            return { ...state, _page: action.payload._page, data: action.payload.data }
        case "SEARCH_PRODUCT":
            return { ...state, data: action.payload === '' ? state.data : action.payload }
        case "EDIT_PRODUCT":
            return {
                ...state, data: state.data.map(product => {
                    return product.id === action.id ? action.payload : product
                })
            }
        case "DELETE_PRODUCT":
            return {...state,data:state.data.filter(product => product.id !== action.payload)}
        case "ADD_PRODUCT":
                return state.data.length!==state._limit?{...state,data:state._page===state.total?state.data.concat(action.payload):state.data}
                :[...state]

        default:
            return state
    }
}