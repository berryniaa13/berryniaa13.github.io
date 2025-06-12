import React from "react";
import "../styles/global.scss"
import NavBar from "../components/NavBar.jsx";
import Headshot from "../assets/GradHeadshot.png";


export default function AboutPage() {
    return (
        <div className="container">
            <header>
                <NavBar />
            </header>
            <main>
                <section className={"banner"}>
                    <div className={"text"}>
                        <h2 style={{textAlign: "left"}}>Hi!  I’m Nia Berry, an upcoming Computer Science graduate from Florida Agricultural & Mechanical
                            University who builds engaging, user-centered web applications.</h2>
                        <h3>   </h3>
                    </div>
                    <img src={Headshot} alt={"Headshot"} style={styles.image}></img>
                </section>
                <section>
                    <p> Early on, I fell in love with puzzles and problem-solving, which led me to master programming
                        fundamentals in Java throughout high school. In college, I expanded my toolkit to
                        full-stack development, specializing in React.js and JavaScript. </p>

                    <p> UX Design came almost out of nowhere for me, but it seemed like a perfect fit. I favor the
                        design aspect of web development and enjoy drafting intuitive wireframes and prototypes
                        in Figma. My first real exposure came when I was invited to lead and mentor students
                        through a UX Design Career series. I followed along and learned the fundamentals of UX
                        design in workshops led by industry professionals.   </p>

                    <p> The following summer, I interned with the Eli Lilly User Experience Team, contributing a
                        reusable component to their design system while immersing myself in the research and design
                        processes behind user-centric experiences. By the end, I knew my career goals needed a
                        change to fit my newly discovered passion. </p>

                    <p> Today, I specialize in the intersection of code and user experience. My ideal next step is
                    collaborating on products that solve real user problems, whether by refining an existing
                    interface or developing a new system from the ground up. If you’re looking for someone who
                    writes clean, maintainable code and champions delight through every interaction, let’s connect!</p>

                </section>
            </main>
            <footer>
                © {new Date().getFullYear()} Nia Berry. All rights reserved.
            </footer>
        </div>
    );
}

const styles = {
    image: {
        display: "flex",
        width: "50%",
        height: "400px",
        alignItems: "center",
        borderRadius: "20px"
    }
}