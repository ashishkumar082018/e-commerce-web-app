import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';

const CartIcon = () => {
    const { totalItems } = useCart();

    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FaShoppingCart size={24} />
            <span style={{ fontSize: '16px', fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                Cart
                {totalItems > 0 && (
                    <span style={{
                        marginLeft: '8px',
                        backgroundColor: '#FF5733',
                        color: 'white',
                        borderRadius: '12px',
                        padding: '2px 8px',
                        fontSize: '12px',
                        fontWeight: 'bold',
                        minWidth: '24px',
                        textAlign: 'center',
                    }}>
                        {totalItems}
                    </span>
                )}
            </span>
        </div>
    );
};

export default CartIcon;
