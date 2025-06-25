import React, {useState} from "react";
import Masonry from "react-masonry-css";
import "../styles/work.scss"
import NavBar from "../components/NavBar.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import KINDImage from "../assets/KIND/AwardPictureGroup.JPG";
import FAMUniteImage from "../assets/FAMUnite/FAMUniteScreenshot.png";
import StyledByImage from "../assets/StyledBy/styledByCover.png";

const filters = ["UX Design", "Full-Stack Development"]

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

const projectOne = {
    title: "KIND Perfect Pitch",
    image: KINDImage,
    date: "September - October 2023",
    description: "A first place six week case competition solution for attracting Gen-Z consumers",
    tags: ["UX Design"],
    url: "https://github.com/berryniaa13/KINDPerfectPitch",
    backgroundColor: "#855014"
}
const projectTwo = {
    title: "FAMUnite",
    image: FAMUniteImage,
    date: "September 2024 - May 2025",
    description: "A two semester software development capstone project",
    tags: ["Full-Stack Development", "UX Design"],
    url: "https://github.com/berryniaa13/famunite2",
    backgroundColor: "#573105"
}

const projectThree = {
    title: "StyledBy",
    image: StyledByImage,
    date: "January 2024 - May 2024",
    description: "A semester group application development project",
    tags: ["Full-Stack Development"],
    url: "https://github.com/cisjavaholics/styledby",
    backgroundColor: "#a57134"

}

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
                <section className="construction-banner">
                    🚧 This page is currently under construction. Check back soon for updates! 🚧
                </section>
                <section>
                    <h2 style={{textAlign: "center"}}>Work</h2>
                    <div className={"projects"} style={styles.projects}>
                        <ProjectCard project={projectOne} />
                        <ProjectCard project={projectTwo} />
                        <ProjectCard project={projectThree} />
                    </div>
                </section>
            </main>

            </div>
            <footer>
                © {new Date().getFullYear()} Nia Berry. All rights reserved.
            </footer>
        </div>
    );

}
const styles = {
    projects: {
        display: "flex",
        justifyContent: "center",
        gap: "25px",
    }
}