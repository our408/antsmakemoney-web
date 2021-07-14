import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";

import Most from "../components/Most";
import LoadingPage from "./LoadingPage";

import "../css/reportList.css";
import Header from "../components/Header";
// import Footer from "../components/Footer";
import Nav from "../components/Nav";

const url = "https://api.408.co.kr/stock/most";

const descriptionPick = "애널리스트들이 현재 가장 많이 PICK한 종목 TOP 10";
const thContentsPick = ["종목명", "현재 주가(원)", "목표 주가 (원)"];

const descriptionPer = "애널리스트 PICK 중 저평가된 종목 TOP 10";
const thContentsPer = ["종목명", "동일업종 PER", "PER"];

const descriptionPrice = "애널리스트 PICK 중 크게 오를 것 같은 종목 TOP 10";
const thContentsPrice = ["종목명", "현재 주가(원)", "목표 주가 (원)"];

function StockListPage() {
    const [loading, setLoading] = useState(false);
    const [duration, setDuration] = useState("");
    const [mostPick, setMostPick] = useState([]);
    const [mostPer, setMostPer] = useState([]);
    const [mostPrice, setMostPrice] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await axios.get(url).then((res) => {
                const data = JSON.parse(res.data);
                setMostPick(data["mostPick"]);
                setMostPer(data["mostPer"]);
                setMostPrice(data["mostPrice"]);
                setDuration(data["duration"]);
            });
            setTimeout(() => {
                setLoading(true);
            }, 1300);
        };

        fetchData();
    }, []);
    return (
        <React.Fragment>
            {loading ? (
                <div id="report-list-wrap">
                    <Header />
                    <div className="title">REPORT Picks</div>
                    <Most
                        stockDatas={mostPick}
                        description={descriptionPick}
                        duration={duration}
                        thContents={thContentsPick}
                    />
                    <Most
                        stockDatas={mostPer}
                        description={descriptionPer}
                        duration={duration}
                        thContents={thContentsPer}
                    />
                    <Most
                        stockDatas={mostPrice}
                        description={descriptionPrice}
                        duration={duration}
                        thContents={thContentsPrice}
                    />
                    <div className="empty" />
                </div>
            ) : (
                <LoadingPage />
            )}
        </React.Fragment>
    );
}

export default StockListPage;
