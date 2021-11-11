import productData from "../assets/fake-data/products"
import Helmet from "../components/Helmet"
import Section, {SectionBody, SectionTitle} from "../components/Section"
import Grid from "../components/Grid"
import ProductCard from "../components/ProductCard"
import React from "react"
import ProductView from "../components/ProductView"


const Product = props => {
    const product = productData.getProductBySlug(props.match.params.slug)

    const realatedProducts = productData.getProducts(8)

    React.useEffect(() => {
        window.scrollTo(0, 0)    
    }, [product])
    return (
        <Helmet title={product.title}>
            <Section>
                <SectionBody>
                    <ProductView product={product} />
                </SectionBody>
            </Section>
            <Section>
                <SectionTitle>
                    Khám phá thêm 
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={ 2 }
                        smCol={ 1 }
                        gap={20}
                    >
                        {
                            realatedProducts.map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    name={item.title}
                                    price={+item.price}
                                    slug={item.slug}
                                />                                
                            ))
                        }
                    </Grid>    
                </SectionBody>
            </Section>
        </Helmet>
    )
}

export default Product
