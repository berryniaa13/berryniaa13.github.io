import React from "react";
import "../styles/global.scss"
import NavBar from "../components/NavBar.jsx";

export default function ContactPage() {
    return (
        <div className="container">
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