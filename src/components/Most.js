const naverUrl = "https://finance.naver.com/item/main.nhn?code=";
const title = (description, duration) => {
    return (
        <div>
            <div className="line"></div>
            <div className="description">{description}</div>
            <div className="duration"> {duration} </div>
            <div className="line"></div>
        </div>
    );
};

const tableHead = (thContents) => {
    return (
        <div className="th-wrap">
            <div className="th-line-wrap">
                {thContents.map((e, index) => {
                    return <div className="th-line" key={index}></div>;
                })}
            </div>
            <div className="th-line-wrap">
                {thContents.map((content, index) => {
                    return (
                        <div className="th-content" key={index}>
                            {content}
                        </div>
                    );
                })}
            </div>
            <div className="th-line-wrap">
                {thContents.map((e, index) => {
                    return <div className="th-line" key={index}></div>;
                })}
            </div>
        </div>
    );
};

const stock = (props) => {
    return (
        <div className="stock-wrap" key={props.index}>
            <div className="stock-index-wrap">
                <div className="stock-index"></div>
                {props.index}
            </div>
            <div className="stock-content-wrap-wrap">
                <div className="stock-content-wrap">
                    <a className="stock-name" href={naverUrl + props.code}>
                        {props.cell11}
                    </a>
                    <div className="stock-value">{props.cell12}</div>
                    <div className="stock-value">{props.cell13}</div>
                </div>
                <div className="stock-content-wrap">
                    <div className="stock-sector sub">{props.cell21}</div>
                    <div className="stock-value sub">{props.cell22}</div>
                    <div className="stock-value sub">
                        <span className={props.cell231ClassName}>
                            {props.cell231}
                        </span>
                        <span className={props.cell232ClassName}>
                            {props.cell232}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

function Most(props) {
    return (
        <div>
            {title(props.description, props.duration)}
            {tableHead(props.thContents)}
            {props.stockDatas.map((datas) => {
                return stock(datas);
            })}
            <div className="empty" />
        </div>
    );
}

export default Most;
