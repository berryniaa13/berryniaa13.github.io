import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <nav style={styles.container}>
            <ul style={styles.nav}>
                <li>
                    <Link to="/" className={"nav-link"} >
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className={"nav-link"}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/work" className={"nav-link"}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className={"nav-link"}>
                        Contact Me
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

const styles = {
    container: {
        backgroundColor: "white",
        width: "100%",
    },
    nav: {
        position: "fixed",
        top: "1.5rem",
        right: "1.5rem",
        zIndex: 1000,
        display: "flex",
        gap: "1rem",
        listStyle: "none",
        padding: "0.75rem 1rem",
        borderRadius: "0.75rem",
        backgroundColor: "var(--backgroundNude)",
    },
    menu: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: "var(--background-white)",
        padding: "1rem",
        borderRadius: "0.75rem",
        boxShadow: "8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff",
    },
    link: {
    color: "var(--accent-brown)",
    fontWeight: 600,
    textDecoration: "none",
        "&:hover": {
            textDecoration: "underline",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)"
        },
    },
};
