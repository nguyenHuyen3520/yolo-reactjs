import Helmet from "../components/Helmet"
import HeroSlider from "../components/HeroSlider"
import heroSliderData from "../assets/fake-data/hero-slider"
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
        </Helmet>
    )
}

export default Home
