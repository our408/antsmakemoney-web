import React from "react";
import "../css/header.css";
import ants from "../img/ants50.png";

function Header() {
    return (
        <React.Fragment>
            <div className="header_wrap">
                <div className="intro">개미도 때론 돈을 번다</div>
                <img className="smallAnt" src={ants}></img>
            </div>
            <div className="line"></div>
        </React.Fragment>
    );
}

export default Header;
