import React from "react";
//import {Link} from 'react-router-dom'
import {  connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

import { ReactComponent as Logo} from "../../assets/crown.svg";
import { OptionsContainer,OptionContainerStyles,HeadeContainer,LogoContainer,OptionLink ,OptionDiv} from "./header.styles";

const Header= ({currentUser, hidden}) =>( 
    <HeadeContainer>
        <LogoContainer to='/'>
            <Logo className="logo"></Logo>
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/contact'>
                CONTACT
            </OptionLink>           
            {currentUser ? (
                <OptionDiv onClick={() => auth.signOut()}>
                    SIGN OUT 
                </OptionDiv>
            ):(
                <OptionLink to = '/signin'>
                    SIGN IN
                </OptionLink>
            )}
            <CartIcon/>            
        </OptionsContainer>
        {hidden ? null : <CartDropdown/>}
    </HeadeContainer>
) 

const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);