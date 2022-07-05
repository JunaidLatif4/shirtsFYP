import productsData from "./ProductsData"

import { combineReducers } from "redux"

const allReducer = combineReducers({
    productsData,
})

export default allReducer;