
const initialState = {
    amountProducts: 0,
    _page: 1,
    _limit: 10,
    _total: function () {
        return this.amountProducts / this._limit
    }
}

export default function (state = initialState, action) {
    switch (action.type) {
        case "CHANGE_LIMIT_PAGE":
            return { ...state, _limit: action.payload, _total: Math.ceil(state.amountProducts / action.payload) }
        case "CHANGE_PAGE":
            return {...state, _page:action.payload}
        case "FETCH_DATA":
            return { ...state, _total: Math.ceil(action.payload.length / state._limit), amountProducts: action.payload.length }
        case "ADD_PRODUCT":
            return { ...state, amountProducts: state.amountProducts + 1, _total: Math.ceil((state.amountProducts + 1) / state._limit) }
        case "DELETE_PRODUCT":
            return { ...state, amountProducts: state.amountProducts - 1, _total: Math.ceil((state.amountProducts - 1) / state._limit) }
        case "SEARCH_PRODUCT":
            return { ...state, amountProducts:action.payload.length, _total:Math.ceil(action.payload.length/state._limit)}
        default:
            return state
    }
}