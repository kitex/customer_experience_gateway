import Chart from "../../components/chart/Chart"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "../../dummyData"


function Home() {
    return (
        <div className="home">
             
            <FeaturedInfo />
            <Chart data={userData} title="Tickets" />
        </div>
    )
}

export default Home
