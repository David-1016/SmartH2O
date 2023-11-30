import HomeStretch from "../Components/HomeStretch"
import HomeCards from "../Components/HomeCards"
import HomeAccord from "../Components/HomeAccord"
import HomeTabla from "../Components/HomeTabla"
import HomeCarousel from "../Components/HomeCarousel"
import HomeIcon from "../Components/HomeIcon"
import HomeText from "../Components/HomeText"


const Home = () => {
    return (
        <>

            <HomeCarousel />
            <br /><br /><br /><br />
            <HomeText />
            <br /><br /><br /><br />
            <HomeIcon />
            <br /><br />
            <HomeCards />
            <br /><br />
            <HomeAccord />
            <br /><br />
            <HomeStretch />
            <HomeTabla />


        </>
    )
}
export default Home;
