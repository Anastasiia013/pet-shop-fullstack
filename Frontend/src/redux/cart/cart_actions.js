import { ADD_TO_CART } from "./cart-types";

export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload,
})