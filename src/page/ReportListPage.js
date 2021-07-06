import MostPick from "../components/MostPick";
import MostPer from "../components/MostPer";
import MostPriceGap from "../components/MostPriceGap";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import Nav from "../components/Nav";

function StockListPage() {
    return (
        <div id="report-list-wrap">
            <Header />
            <div className="title">REPORT Picks</div>

            <MostPick />
            <div className="empty"></div>

            <MostPer />
            <div className="empty"></div>

            <MostPriceGap />
            <div className="empty"></div>

            <div className="empty"></div>
            <div className="empty"></div>

            <Nav />
        </div>
    );
}

export default StockListPage;
