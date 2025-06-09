import React from "react";
import "../styles/global.scss"
import NavBar from "../components/NavBar";
import MemoCircle from "../components/MemoCircle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import KINDImage from "../assets/KIND/AwardPictureGroup.JPG"
import FAMUniteImage from "../assets/FAMUnite/FAMUniteScreenshot.png"

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
    tags: ["Software Development", "UX Design"],
    url: "https://github.com/berryniaa13/famunite2",
    backgroundColor: "#573105"
}

export default function HomePage() {
    return (
        <div className={"container"} >
            <header>
                <NavBar />
            </header>
            <main>
                <section className={"banner"} style={styles.banner}>
                    <MemoCircle/>
                    <div style={{margin: "55px", textAlign: "center", maxWidth: "500px"}}>
                        <h1>Hello! I'm Nia </h1>
                        <ul className={"role"} style={styles.role}>
                            {['Web Developer', 'UX Designer', 'Problem Solver'].map((role) => (
                                <li
                                    key={role}
                                    className="tag"
                                >
                                    {role}
                                </li>
                            ))}
                        </ul>
                        <h3>
                            a frontend developer passionate about building beautiful,
                            intuitive digital experiences
                        </h3>
                    </div>
                </section>
                <section>
                    <h2>Work</h2>
                    <div className={"projects"} style={styles.projects}>
                        <ProjectCard project={projectOne} />
                        <ProjectCard project={projectTwo} />
                    </div>
                </section>
            </main>
            <footer>
                © {new Date().getFullYear()} Nia Berry. All rights reserved.
            </footer>
        </div>
);
}

const styles = {
    banner: {
        display: "flex",
        margin: "20px 0",
        paddingBottom: "30px",
    },
    role: {
        display: "flex",
        padding: "0px",
        gap: "10px",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    projects: {
        display: "flex",
        justifyContent: "center",
        gap: "25px",
    }
}
