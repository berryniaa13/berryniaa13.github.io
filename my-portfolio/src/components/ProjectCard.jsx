import React from "react";
import placeholderImage from "../assets/placeholderImage.jpg"

export default function ProjectCard({project}) {
    console.log("Project: ", project);
    return (
        <>
            <div style={styles.card} className="project-card">
                <div className={"overlay"} >
                    <p style={styles.description}>{project?.description}</p>
                    <a href={project?.url || "#"} style={styles.link}>View Details</a>
                </div>

                <div style={styles.imageContainer}>
                    <img
                        src={project?.image || placeholderImage}
                        alt={"Event"}
                        style={styles.image}
                    />
                </div>

                <div style={styles.body}>
                    <h3 style={styles.title}>{project?.title || "Untitled Event"}</h3>
                    <ul style={styles.tag}>{project?.tags.map((category)=> (
                        <li key={category}>
                            {category} </li>
                        ))}</ul>
                    <a href={project?.url || "#"} style={styles.link}>View Details</a>
                </div>
            </div>
        </>
    );
};

const styles = {
    card: {
        width: "350px",
        height: "400px",
        borderRadius: "12px",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
        background: "rgba(255, 255, 255, 0.8)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.2)",
        color: "white",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
    },

    imageContainer: {
        position: "relative",
    },
    image: {
        width: "100%",
        height: "250px",
        objectFit: "cover",
        borderTopLeftRadius: "12px",
        borderTopRightRadius: "12px"
    },
    body: {
        padding: "4px 12px 12px 12px",
        flex: 1
    },
    title: {
        fontSize: "16px",
        marginBottom: "4px",
        marginTop: "0px",
        fontWeight:"bold"
    },
    meta: {
        fontSize: "12px",
        color: "#333",
        margin: "4px",
    },
    actions: {
        display: "flex",
        gap: "8px",
        padding: "12px",
    },
    link: {
        textDecoration: "none",
        cursor: "pointer",
        color: "var(--primary-blue)",
        fontWeight: "bold",

    },
    tag:{
        listStyle: "none",
        display: "flex",
        color:"#333",
    },
    viewBtn: {
        flex: 1,
        padding: "8px",
        backgroundColor: "#CDE0CA",
        border: "none",
        fontSize: "12px",
        borderRadius: "6px",
        cursor: "pointer"
    },
};
