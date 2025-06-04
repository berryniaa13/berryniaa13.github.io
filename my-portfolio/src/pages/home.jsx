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
    tags: ["UX Design", "Research"]
}
const projectTwo = {
    title: "FAMUnite",
    image: FAMUniteImage,
    date: "September - October 2023",
    description: "FamUnite",
    tags: ["UX Design", "Research"]
}

export default function HomePage() {
    return (
        <div className={"container"} >
            <header>
                <NavBar />
            </header>
            <main>
                <section style={styles.banner}>
                    <MemoCircle/>
                    <div style={{margin: "15px", textAlign: "center"}}>
                        <h1>Nia Berry</h1>
                        <h2>User Experience Developer</h2>
                        <ul style={styles.role}>
                            {['Web Developer', 'UX Designer', 'Problem Solver'].map((role) => (
                                <li
                                    key={role}
                                    className="tag"
                                >
                                    {role}
                                </li>
                            ))}
                        </ul>
                        <p>
                            I'm a creative frontend developer passionate about building beautiful,
                            intuitive digital experiences with a focus on responsive design,
                            accessibility, and clean code.
                        </p>
                    </div>
                </section>
                <section>
                    <h3>Projects</h3>
                    <div style={styles.projects}>
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
        gap: "50px",
        margin: "20px 0",
    },
    role: {
        display: "flex",
        padding: "0px",
        gap: "10px",
    },
    projects: {
        display: "flex",
        justifyContent: "center",
        gap: "25px",
    }
}
