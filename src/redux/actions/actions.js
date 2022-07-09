import { ADD_CARTS, FETCH_PRODUCTS, REMOVE_CARTS } from '../types'

export const fetchProducts = () => async dispatch => {
	const res = await fetch('http://localhost:8000/product')
	dispatch({
		type: FETCH_PRODUCTS,
		payload: res.data,
	})
}

export const addToCart = (items, product) => dispatch => {
	const cartItems = items.slice()

	let productAlreadyInCart = false
	cartItems.forEach(() => {
		productAlreadyInCart = true
	})
	if (!productAlreadyInCart) {
		cartItems.push({ ...product })
	}
	localStorage.setItem('cartItems', JSON.stringify(cartItems))
	return dispatch({
		type: ADD_CARTS,
		payload: {
			cartItems: cartItems,
		},
	})
}

export const removeFavorite = data => dispatch => {
	data.slice().filter(el => el.id !== data.id)

	return dispatch({
		type: REMOVE_CARTS,
		payload: {
			cartItems: data,
		},
	})
}
