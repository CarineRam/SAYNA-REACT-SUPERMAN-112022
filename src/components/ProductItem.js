import React from 'react';
import '../styles/productItem.css';

function ProductItem({ products }) {
    const { title, urlImage, description, category, color, id, price } = products;


    return (
        <>
            <div className='container product m-2 text-center'>
                <div className="wrapper">
                    <div className="product-img w-100">
                        <img src={urlImage} alt={title} />
                    </div>
                    <div className="product title text-uppercase fs-4">{title}</div>
                    <div className="product-price">
                        <span>{price} $</span> <span><del>{price + 15} $</del></span>
                    </div>
                    <button className='add-to-cart mt-3 w-75 text-uppercase'>Ajouter</button>
                </div>
            </div>
        </>
    )
}

export default ProductItem