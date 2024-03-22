import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ImportPage from "./pages/ImportPage.jsx";
import HthPage from "./pages/HthPage.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
      <Router>
        <Routes>
          <Route path="/" element={<ImportPage />} />
          <Route path="/hth" element={<HthPage />} />
        </Routes>
      </Router>
);