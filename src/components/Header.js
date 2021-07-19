import React from "react";
import "../css/header.css";
import ant from "../img/ant200.png";

function Header() {
    return (
        <React.Fragment>
            <div className="header-wrap">
                <div className="intro">개미도 때론 돈을 번다</div>
                <img className="small-ant" src={ant} alt="ants"></img>
            </div>
            <div className="line"></div>
        </React.Fragment>
    );
}

export default Header;
