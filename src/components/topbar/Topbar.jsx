import React from 'react'
import   './topbar.css'
import {NotificationsNone,Favorite} from '@material-ui/icons';
export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topleft">
                    <span className="logoTopbar">CEM</span>
                    <span ><Favorite className="heart"  style={{fontSize: '15px'}} /></span>                   
                </div>
                <div className="topright">
                    <div className="topbarIcon">
                        <div className="topIconContainer">
                            <NotificationsNone/>
                            <span className="topIconBadge">0</span>
                        </div>                   
                    </div>
                </div>
            </div>
        </div>
    )
}
