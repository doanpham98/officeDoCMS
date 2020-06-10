import {combineReducers} from 'redux'
import products from './products'
import pagination from './paginate'
export default combineReducers({
    products,pagination
})