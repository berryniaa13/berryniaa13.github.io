import React from "react";
import "../styles/global.scss"
import NavBar from "../components/NavBar";
import MemoCircle from "../components/MemoCircle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import KINDImage from "../assets/KIND/AwardPictureGroup.JPG"
import FAMUniteImage from "../assets/FAMUnite/FAMUniteScreenshot.png"
import StyledByImage from "../assets/StyledBy/styledByCover.png"
import Resume from "../assets/Nia Berry CS Resume.pdf";

// home

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

export default function HomePage() {
    return (
        <div className={"container"} >
            <header>
                <NavBar />
            </header>
            <main>
                <section className={"banner"} >
                    <MemoCircle/>
                    <div style={{margin: "55px", textAlign: "center", maxWidth: "500px"}}>
                        <h1>Hi! I'm Nia </h1>
                        <ul className={"role"} style={styles.role}>
                            {['Web Developer', 'UX Designer', 'Problem Solver'].map((role) => (
                                <li
                                    key={role}
                                    className="tag"
                                    style={{backgroundColor: "var(--accent-yellowTwo)", color: "var(--accent-brown)", fontWeight: "bold", border: "1.5px solid var(--accent-brown)"}}
                                >
                                    {role}
                                </li>
                            ))}
                        </ul>
                        <h3>
                            a frontend developer passionate about building beautiful,
                            intuitive digital experiences
                        </h3>
                        <a
                            href={Resume}
                            download
                            style={styles.download}
                        >
                            Download My Resume
                        </a>
                    </div>
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
            <footer>
                © {new Date().getFullYear()} Nia Berry. All rights reserved.
            </footer>
        </div>
);
}

const styles = {
    role: {
        display: "flex",
        padding: "0px",
        gap: "10px",
        justifyContent: "center",
        flexWrap: "wrap",
    },
    download: {
        display: 'inline-block',
        textAlign: 'center',
        fontWeight: '500',
        padding: '12px 24px',
        borderRadius: '9999px',
        backgroundColor: 'var(--accent-brown)',
        color: '#FFFFFF',
        textDecoration: 'none',
    },
    projects: {
        display: "flex",
        justifyContent: "center",
        gap: "25px",
    }
}
