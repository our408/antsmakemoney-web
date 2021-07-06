import GoogleLogin from "../components/GoogleLogin";
import turtleImg from "../img/turtle.png";

function HomePage() {
    return (
        <div className="login-wrap">
            <img src={turtleImg} alt="🐢" />
        </div>
    );
}
/*
<div className="line"></div>
<GoogleLogin />
*/

export default HomePage;
