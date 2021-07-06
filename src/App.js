import "./css/App.css";

import { Route, BrowserRouter } from "react-router-dom";
import StockListPage from "./page/ReportListPage";
import LoginPage from "./page/LoginPage";

function App() {
    return (
        <BrowserRouter>
            <Route exact path="/" component={StockListPage} />
            <Route path="/stock" component={StockListPage} />
            <Route path="/login" component={LoginPage} />
        </BrowserRouter>
    );
}

//  <Route exact path="/" component={LoginPage} />
export default App;
