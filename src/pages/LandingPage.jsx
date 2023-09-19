import React from "react";
import Header from "../components/common/Header";
import Homepage from "../components/Homepage";

function LandingPage(){
    return(
        <div className="main-page">
            <Header />
            <div className="homepage"><Homepage  /></div>
            
        </div>
    )
}

export default LandingPage;