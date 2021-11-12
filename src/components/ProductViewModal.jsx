import React from 'react'

import ProductView from './ProductView'

import { useSelector, useDispatch } from 'react-redux'

import { remove } from '../redux/product-modal/productModalSlice'

import productData from "../assets/fake-data/products"
import Button from './Button'
const ProductViewModal = (props) => {

    const productSLug = useSelector((state) => state.productModal.value)

    const dispatch = useDispatch()

    const [product, setProduct] = React.useState(undefined)


    React.useEffect(() => {
        setProduct(productData.getProductBySlug(productSLug))
    }, [productSLug])

    return (
        <div className={`product-view__modal ${product === undefined ? '' : 'active'}`} >
            <div className="product-view__modal__content">
                <ProductView product={product} />
                <div className="product-view__modal__content__close">
                    <Button
                        size="sm"
                        onClick={() => dispatch(remove())}
                    >
                        Đóng
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ProductViewModal
