import React from 'react';
import "./cart.css";
// cart component
const Cart = (props) => {
    const { cart } = props;
    let quantity = 0;
    let total = 0;
    for (const friend of cart) {
        if (!friend.quantity) {
            friend.quantity = 1;
        }
        total = total + friend.contribute * friend.quantity;
        quantity = quantity + friend.quantity;
    }
    return (
        <div className='card p-2 bg-light'>
            <h4><i class="fas fa-user-plus"></i> Contributed: {quantity}</h4>
            <h4><span className="text-danger"><i class="fas fa-hand-holding-usd"></i> Total:</span> {total} TK</h4>
            <hr />
            {
                // show friend name in the cart component 
                cart.map(friend =>
                    <h4 className="btn btn-success cart-btn">{friend.name} {friend.contribute}TK</h4>
                )
            }
        </div>
    );
};

export default Cart;