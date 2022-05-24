import React from 'react';
import useOrders from '../../hooks/useOrders';

const Cart = () => {
    const [orders, setOrders] = useOrders();
    return (
        <div>
            Cart {orders.length}
        </div>
    );
};

export default Cart;