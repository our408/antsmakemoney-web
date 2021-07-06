import "../css/nav.css";

function Nav() {
    return (
        <nav className="nav-bar">
            <a href="/login">
                <span>홈</span>
            </a>
            <a href="/login">
                <span>애널리스트</span>
            </a>
            <a href="/login">
                <span>차트</span>
            </a>
            <a href="/login">
                <span>마이페이지</span>
            </a>
        </nav>
    );
}

export default Nav;
