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
                <section className={"banner"}>
                    <div ></div>

                </section>
            </main>
            <footer>
                © {new Date().getFullYear()} Nia Berry. All rights reserved.
            </footer>
        </div>
    );
}