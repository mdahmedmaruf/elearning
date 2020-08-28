import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, product) => total + product.price, 0);
    const tax = (total / 10).toFixed(2);
    const grandTotal = (total  + Number(tax)).toFixed(2);
    return (

        <div className="cart-items">
            <h3>Order Summery</h3>
            <h4>Items Order: {cart.length}</h4>
            <p><small>tax + vat {tax}</small></p>
            <p>Total: ${grandTotal}</p>
        </div>
    );
};

export default Cart;