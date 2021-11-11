import React from 'react'

import ProductView from './ProductView'

import productData from "../assets/fake-data/products"
const ProductViewModal = (props) => {

    const product = productData.getProductBySlug('ao-thun-dinosaur-15')

    return (
        <div className="product-view__model" >
            <div className="product-view__model__content">
                <ProductView product={product} />
            </div>
        </div>
    )
}

export default ProductViewModal
