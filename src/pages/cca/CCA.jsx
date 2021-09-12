import React from 'react'
import './cca.css'
import CombinedMap from "../../components/map/CombinedMap"
import UserInfo from "../../components/userInfo/UserInfo"
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo"

export default function CCA() {
    return (
        <div className="cca">
            <UserInfo/>
            <FeaturedInfo/>
            <CombinedMap></CombinedMap>
        </div>
    )
}
