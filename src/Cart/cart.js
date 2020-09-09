import React from 'react';
import CartItems from './cartitems'
import CartItem from './cartitem'

const Cart = () => {
    return (
        <div>
            <CartItems CartItem={CartItem} />
        </div>
    )
}

export default Cart 