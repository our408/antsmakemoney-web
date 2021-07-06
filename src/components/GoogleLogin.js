import "../css/login.css";
import { GoogleLogin as GL } from "react-google-login";

function GoogleLogin() {
    const responseGoogle = (response) => {
        console.log(response);
    };

    return (
        <GL
            clientId="977453048989-a01do89ggpguo490jnnfueomu0bdkhes.apps.googleusercontent.com"
            buttonText="구글로 회원가입/로그인 하기"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            className="login"
            cookiePolicy={"single_host_origin"}
        />
    );
}

export default GoogleLogin;
