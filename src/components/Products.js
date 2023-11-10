import React from 'react';
import ProductItem from './ProductItem';


function Products({ products }) {
    return (
        <div className="row">
            {products.map((products) => (
                <div className="col-md-4">
                    <ProductItem key={products.id} products={products} />
                </div>
            ))}

        </div>
    )
}

export default Products