import { FETCH_PRODUCTS, REMOVE_CARTS } from './types'

const initinalState = {
	item: [],
}
export const favoriteReducer = (state = initinalState, action) => {
	switch (action.type) {
		case FETCH_PRODUCTS:
			return { ...state, item: action.payload }
		case REMOVE_CARTS:
			return { ...state, item: action.payload }
		default:
			return state
	}
}
