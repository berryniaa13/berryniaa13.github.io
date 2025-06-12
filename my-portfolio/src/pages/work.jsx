import {useState} from "react";
import Masonry from "react-masonry-css";
import "../styles/work.scss"
import NavBar from "../components/NavBar.jsx";

const filters = ["UX Design", "Software Development"]

const cards = [
    { id: 1, category: "Software Development", image: "/images/workout1.jpg" },
    { id: 2, category: "Nails", image: "/images/nails1.jpg" },
    { id: 3, category: "Apartment 2025", image: "/images/apartment1.jpg" },
    { id: 4, category: "Grad shoot", image: "/images/grad1.jpg" },
    { id: 5, category: "Body goals", image: "/images/bodygoals1.jpg" },
    { id: 6, category: "Style", image: "/images/style1.jpg" },
    { id: 7, category: "New house decor", image: "/images/decor1.jpg" },
    // ...more cards
];
export default function WorkPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredCards = activeFilter === "All"
        ? cards
        : cards.filter(card => card.category === activeFilter);

    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1
    };
    return (
        <div className={" work"}>
            <div className={" container"}>
            <header>
                <NavBar />
            </header>
            {/*<aside className="sidebar">*/}
            {/*    {filters.map((filter) => (*/}
            {/*        <button*/}
            {/*            key={filter}*/}
            {/*            className={`filter-button ${activeFilter === filter ? "active" : ""}`}*/}
            {/*            onClick={() => setActiveFilter(filter)}*/}
            {/*        >*/}
            {/*            {filter}*/}
            {/*        </button>*/}
            {/*    ))}*/}
            {/*</aside>*/}
            <main className="board">
                {/*<Masonry*/}
                {/*    breakpointCols={breakpointColumnsObj}*/}
                {/*    className="my-masonry-grid"*/}
                {/*    columnClassName="my-masonry-grid_column"*/}
                {/*>*/}
                {/*    {cards.map((card, index) => (*/}
                {/*        <div className="card" key={index}>*/}
                {/*            <img src={card.image} alt="Card" />*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</Masonry>*/}
                <h1> 🚧 This website is currently under construction. Check back soon for updates! 🚧</h1>
            </main>

            </div>
            <footer>
                © {new Date().getFullYear()} Nia Berry. All rights reserved.
            </footer>
        </div>
    );

}