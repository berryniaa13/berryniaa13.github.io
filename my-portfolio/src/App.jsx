import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import AboutPage from "./pages/about.jsx";
import WorkPage from "./pages/work.jsx";
import ContactPage from "./pages/contact.jsx";
import "@fontsource/fredoka-one";
import "@fontsource/lato";
import "./styles/global.scss";
import NavBar from "./components/NavBar.jsx";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
        </Router>
    );
}
