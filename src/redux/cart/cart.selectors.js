import { createSelector } from "reselect";

const selectCart = state => state.cart;


export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);


export const selectCartHidden = createSelector(
    [selectCart],
    (cart)=> cart.hidden
);


export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(             //________________________//
            (accumalateQuantity , cartItem) =>                  //
                accumalateQuantity + cartItem.quantity,         //
                0                                               //
        )          //reduce give all cart items by this code____//

);

export const selectCartTotals = createSelector(
    [selectCartItems],
    cartItems =>
        cartItems.reduce(
            (accumalateQuantity , cartItem) =>
                accumalateQuantity + cartItem.quantity * cartItem.price,
                0
        )
)