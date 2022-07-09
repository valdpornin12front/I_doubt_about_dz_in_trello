import { combineReducers } from 'redux'
import { addToCarts } from './addCarts'
import { favoriteReducer } from './favoriteReducer'

export const rootReducer = combineReducers({
	favoriteReducer,
	cars: addToCarts,
})
