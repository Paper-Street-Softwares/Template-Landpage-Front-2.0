import React from "react";
import ImportPage from "./pages/ImportPage";
import HthPage from "./pages/HthPage";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HthPage />}></Route>
        <Route path="/home" element={<ImportPage />}></Route>
      </Routes>
    </Router>
  );
}
