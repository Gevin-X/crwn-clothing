import { CartActionTypes } from "./cart.types";

export const toggleCartHidden =()=>({
    type:CartActionTypes.TOGGEL_CART_HIDDEN
});

export const addItem = items =>({
    type:CartActionTypes.ADD_ITEM,
    payload:items
}) 