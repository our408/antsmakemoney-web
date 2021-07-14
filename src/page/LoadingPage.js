import antsGreen from "../img/ants_ani.gif";
import antsGold from "../img/ants_gold.gif";
import earning from "../img/earning.gif";

import "../css/loading.css";

const getRandom = (min, max) => Math.floor(Math.random() * (max - min) + min);
const num = getRandom(1, 15);

function LoadingPage() {
    return (
        <div className="loading-wrap">
            {num > 2 ? (
                <img className="loading-img" src={antsGreen} alt="ants" />
            ) : (
                <img className="loading-img" src={antsGold} alt="ants" />
            )}
            <img className="earning" src={earning} alt="earning" />
        </div>
    );
}
export default LoadingPage;
