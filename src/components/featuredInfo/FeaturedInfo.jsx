import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"

export default function FeaturedInfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Ticket Status</span>
                <div className="featuredDetailsContainer">
                    <span className="totalInfo">2,345</span>
                    <span className="totalInfoRate">10 <ArrowUpward  className="featuredIcon"/></span>
                </div>
                <span className="featuredSubTitle">Compared to last day</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Network KPI</span>
                <div className="featuredDetailsContainer">
                    <span className="totalInfo">3000 2G</span>
                    <span className="totalInfoRate">-10 <ArrowDownward className="featuredIcon negative"/></span>
                </div>
                <span className="featuredSubTitle">Compared to last day</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Network Status</span>
                <div className="featuredDetailsContainer">
                    <span className="totalInfo">2,345</span>
                    <span className="totalInfoRate">10 <ArrowUpward className="featuredIcon "/></span>
                </div>
                <span className="featuredSubTitle">Compared to last day</span>
            </div>
        </div>
    )
}
