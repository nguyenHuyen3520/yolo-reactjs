import { Link } from "react-router-dom"

import Helmet from "../components/Helmet"
import HeroSlider from "../components/HeroSlider"
import Section, { SectionTitle, SectionBody } from "../components/Section"
import PolicyCard from "../components/PolicyCard"
import Grid from "../components/Grid"

import heroSliderData from "../assets/fake-data/hero-slider"
import policy from "../assets/fake-data/policy"
import productData from "../assets/fake-data/products.js"
import ProductCard from "../components/ProductCard"

import banner from "../assets/images/banner.png"

const Home = () => {
    return (
        <Helmet title="Trang chủ">
            {/* hero slider */}
            <HeroSlider
                data={heroSliderData}
                control={true}
                auto={true}
            />
            {/* end hero slider */}
            {/* Policy Section */}
            <Section>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}

                    >
                        {
                            policy.map((item, index) => (
                                <Link to="/policy" key={index}>
                                    <PolicyCard
                                        name={item.name}
                                        description={item.description}
                                        icon={item.icon}
                                    />
                                </Link>
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* End Policy Section */}
            {/* best selling */}
            <Section>
                <SectionTitle>
                    Top săn phẩm bán chạy trong tuần
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}

                    >
                        {
                            productData.getProducts(4).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    slug={item.slug}
                                    name={item.title}
                                    price={+item.price}

                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end best selling */}
            {/* new arrival section */}
            <Section>
                <SectionTitle>
                    Sản phẩm mới
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}

                    >
                        {
                            productData.getProducts(8).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    slug={item.slug}
                                    name={item.title}
                                    price={+item.price}

                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* new new arrival section */}
            {/* Banner */}
            <Section>
                <SectionBody>
                    <Link to="/catalog">
                        <img src={banner} alt="" />
                    </Link>
                </SectionBody>
            </Section>
            {/* end Banner */}
            {/* popular products  */}
            <Section>
                <SectionTitle>
                    Sản phẩm phổ biến
                </SectionTitle>
                <SectionBody>
                    <Grid
                        col={4}
                        mdCol={2}
                        smCol={1}
                        gap={20}

                    >
                        {
                            productData.getProducts(12).map((item, index) => (
                                <ProductCard
                                    key={index}
                                    img01={item.image01}
                                    img02={item.image02}
                                    slug={item.slug}
                                    name={item.title}
                                    price={+item.price}

                                />
                            ))
                        }
                    </Grid>
                </SectionBody>
            </Section>
            {/* end popular products  */}
        </Helmet>
    )
}

export default Home
