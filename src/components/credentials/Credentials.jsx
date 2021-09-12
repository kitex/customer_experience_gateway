import "./credentials.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
import React from 'react'
import Home from "../../pages/home/Home";


export default function Credentials() {
    let history = useHistory();
    return (

        <div className="container" id="container">
            <div className="form-container sign-up-container">

            </div>
            <div className="form-container sign-in-container">
                <form action="#" className="form">

                    <div className="social-container">
                    </div>

                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />


                    <button onClick={() => {history.push('/app')}} className="signInBtn">Sign In</button>

                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-right">
                        <h1>Customer Experience Gateway</h1>
                        <p>Focusing on the customer makes a company more resilient - Jeff Bezos</p>
                    </div>
                </div>
            </div>
        </div>

    )
}