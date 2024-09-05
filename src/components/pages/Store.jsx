import React from 'react';
import ProductList from '../ProductList';

const Store = ({ products }) => {
    return (
        <div>
            <ProductList products={products} />
        </div>
    );
};

export default Store;
