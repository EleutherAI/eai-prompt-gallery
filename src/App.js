import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import Routes from "./routing/routes";
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div className="content-wrapper">
          <div className="page-content">
            <Routes />
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
