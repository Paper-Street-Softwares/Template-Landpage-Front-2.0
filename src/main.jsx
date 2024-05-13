import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImportPage from "./pages/ImportPage.jsx";
import HthPage from "./pages/HthPage.jsx";
import GencoPage from "./pages/GencoPage.jsx";
import DomclorPage from "./pages/DomclorPage.jsx";
import HidroazulPage from "./pages/HidroazulPage.jsx";
import NeoclorPage from "./pages/NeoclorPage.jsx";
import NetunoPage from "./pages/NetunoPage.jsx";
import SodramarPage from "./pages/SodramarPage.jsx";
import SuallPage from "./pages/SuallPage.jsx";
import IndexRita from "./pages/rita/IndexRita.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<IndexRita />} />
      <Route path="/hth" element={<HthPage />} />
    </Routes>
  </Router>
);
