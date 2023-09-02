import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import CartItems from "../cart-item/cart-item.component";
import {selectCartItems} from '../../redux/cart/cart.selectors';

import './cart-dropdown.style.scss'

const CartDropdown =({cartItems})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
            {cartItems.map(CartItem =>(
                <CartItems key={CartItem.id} item={CartItem}/>
            ))}
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps=  state =>({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
