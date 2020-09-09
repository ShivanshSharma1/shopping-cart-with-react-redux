import React from 'react';
import { connect } from 'react-redux';

const CartItems = ({itemsInCart, CartItem}) =>{
    return(
        <div>
            {itemsInCart.map(p =>  <CartItem name={p.name} price={p.price} id={p.id} src={p.src}/>)}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        itemsInCart: state.Cart
    }
}

export default connect(
    mapStateToProps,
    null
)(CartItems)