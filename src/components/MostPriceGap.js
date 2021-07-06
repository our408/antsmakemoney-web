import axios from "axios";
import { useState, useEffect } from "react";
import "../css/reportList.css";

const url = "https://api.408.co.kr/stock/most-price-gap";
const thLine = () => {
    return (
        <div className="th-line-wrap">
            <div className="th-line"></div>
            <div className="th-line"></div>
            <div className="th-line"></div>
        </div>
    );
};

const thContent = () => {
    return (
        <div className="th-line-wrap">
            <div className="th-content">종목명</div>
            <div className="th-content">현재 주가 (원)</div>
            <div className="th-content">목표 주가 (원)</div>
        </div>
    );
};

const tableHead = () => {
    return (
        <div className="th-wrap">
            {thLine()}
            {thContent()}
            {thLine()}
        </div>
    );
};

const title = () => {
    return (
        <div>
            <div className="line"></div>
            <div className="description-1">
                애널리스트 PICK 중 크게 오를 것 같은 종목 TOP 10
            </div>
            <div className="description-2">21/06/23 - 21/06/30 기준</div>
            <div className="line"></div>
        </div>
    );
};

const stock = (props) => {
    return (
        <div className="stock-wrap" key={props.rank}>
            <div className="stock-rank-wrap">
                <div className="stock-rank"></div>
                {props.rank}
            </div>
            <div className="stock-content-wrap-wrap">
                <div className="stock-content-wrap">
                    <div className="stock-name">{props.name}</div>
                    <div className="stock-value-now">{props.nowPrice}</div>
                    <div className="stock-value-predict">
                        {props.predictPrice}
                    </div>
                </div>
                <div className="stock-content-wrap">
                    <div className="stock-name blur">{props.sector}</div>
                    <div className="stock-value-now blur">{props.now}</div>
                    <div className="stock-value-predict blur">
                        <span className="percent-arrow">▴ </span>
                        <span className="percent">+{props.priceGap}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const loading = () => {
    return <div>aaa</div>;
};

function MostPriceGap() {
    const [stockDatas, setStockDatas] = useState([]);

    useEffect(() => {
        axios.get(url).then((res) => {
            setStockDatas(res.data);
        });
    }, []);

    return (
        <div>
            {title()}
            {tableHead()}
            {stockDatas.map((props) => {
                return stock(props);
            })}
        </div>
    );
}

export default MostPriceGap;
