import React from "react";
import "../styles/global.scss"
import NavBar from "../components/NavBar.jsx";

export default function AboutPage() {
    return (
        <div className="about-page">
            <header>
                <NavBar />
            </header>
            <main>

            </main>
            <footer>
                © {new Date().getFullYear()} Nia Berry. All rights reserved.
            </footer>
        </div>
    );
}