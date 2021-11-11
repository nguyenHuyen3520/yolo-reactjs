import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from "react-router-dom"

import Button from "./Button"
import numberWithCommas from "../utils/numberWithCommas"

const ProductView = props => {

    const product = props.product
    const [previewImg, setPreviewImg] = React.useState(product.image01)
    const [descriptionExpand, setDescriptionExpand] = React.useState(false)
    const [color, setColor] = useState()
    const [size, setSize] = useState()
    const [quantity, setQuantity] = useState(1)

    const updateQuantity = (type) => {
        if (type === 'plus') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity - 1 < 0 ? 1 : quantity - 1)
        }
    }
    const check = () => {
        if (color === undefined) {
            window.alert("Vui Lòng Chọn Màu Sản Phẩm")
            return false
        }
        if (size === undefined) {
            window.alert("Vui Lòng Chọn Kích Cỡ Sản Phẩm")
            return false
        }
        return true
    }

    const addToCart = () => {
        if (check()) {
            console.log({ color, size, quantity });
        }
    }

    const goToCart = () => {
        if (check()) props.history.push('/cart')
    }

    useEffect(() => {
        setPreviewImg(product.image01)
        setQuantity(1)
        setColor(undefined)
        setSize(undefined)
    }, [product])
    return (
        <div className="product">
            <div className="product__images">
                <div className="product__images__list">
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image01)}>
                        <img src={product.image01} alt="" />
                    </div>
                    <div className="product__images__list__item" onClick={() => setPreviewImg(product.image02)}>
                        <img src={product.image02} alt="" />
                    </div>
                </div>
                <div className="product__images__main">
                    <img src={previewImg} alt="" />
                </div>
                <div className={`product__description ${descriptionExpand ? 'expand' : ''}`}>
                    <div className="product__description__title">
                        Chi tiết sản phẩm
                    </div>
                    <div className="product__description__content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                    <div className="product__description__toggle">
                        <Button size="sm" onClick={() => {
                            setDescriptionExpand(!descriptionExpand)
                        }}>
                            {
                                descriptionExpand ? "Thu GỌn" : "Xem Thêm"
                            }
                        </Button>
                    </div>
                </div>
            </div>
            <div className="product__info">
                <h1 className="product__info__title">{product.title}</h1>
                <div className="product__info__item">
                    <span className="product__info__item__price">
                        {
                            numberWithCommas(product.price)
                        }
                    </span>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Màu Sắc
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.colors.map((item, index) => (
                                <div className={`product__info__item__list__item ${color === item ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => setColor(item)}
                                >
                                    <div className={`circle bg-${item}`}></div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Kích Cỡ
                    </div>
                    <div className="product__info__item__list">
                        {
                            product.size.map((item, index) => (
                                <div className={`product__info__item__list__item ${size === item ? 'active' : ''}`}
                                    key={index}
                                    onClick={() => setSize(item)}
                                >
                                    <div className="product__info__item__list__item__size">
                                        {item}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="product__info__item">
                    <div className="product__info__item__title">
                        Số Lượng
                    </div>
                    <div className="product__info__item__quantity">
                        <div
                            className="product__info__item__quantity__btn"
                            onClick={() => updateQuantity("minus")}
                        >
                            <i className="bx bx-minus"></i>
                        </div>
                        <div className="product__info__item__quantity__input">
                            {quantity}
                        </div>
                        <div
                            className="product__info__item__quantity__btn"
                            onClick={() => updateQuantity("plus")}
                        >
                            <i className="bx bx-plus"></i>
                        </div>
                    </div>
                </div>
                <div className="product__info__item">
                    <Button onClick={() => addToCart()}>
                        Thêm vào giỏ
                    </Button>
                    <Button onClick={() => goToCart()}>
                        Mua ngay
                    </Button>
                </div>
            </div>
            <div className={`product__description mobile ${descriptionExpand ? 'expand' : ''}`}>
                <div className="product__description__title">
                    Chi tiết sản phẩm
                </div>
                <div className="product__description__content" dangerouslySetInnerHTML={{ __html: product.description }}></div>
                <div className="product__description__toggle">
                    <Button size="sm" onClick={() => {
                        setDescriptionExpand(!descriptionExpand)
                    }}>
                        {
                            descriptionExpand ? "Thu GỌn" : "Xem Thêm"
                        }
                    </Button>
                </div>
            </div>
        </div>
    )
}

ProductView.propTypes = {
    product: PropTypes.object.isRequired
}

export default withRouter(ProductView)
