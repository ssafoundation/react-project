import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
    const total = cart.reduce((total,player) => total + player.salary,0);
    let name = " ";
    for(let i = 0; i < cart.length; i++) {
        const player = cart[i];
        name = name + player.name + ",";
    }
    return (
        <div className="cart">
            <h2 className="cart-header">Players hire</h2>
            <p>Player Added : {cart.length}</p>
            <p>Total Salary : ${total}</p>
            <p>Player Name : {name}</p>
        </div>
    );
};

export default Cart;