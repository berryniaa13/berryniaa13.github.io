import React from "react";
import Memoji from "../assets/MemojiYellow.png";

export default function MemoCircle() {


    return (
        <div  className={"memo-circle"} style={{...styles.circleContainer}}>
            <div style={{boxShadow:  "24px 24px 48px #d4cfc9, -24px -24px 48px #ffffff", width: "auto", height: "auto"}}>
                <div className={"top-circle"} style={{ ...styles.circle, ...styles.blueCircle }}></div>
                <div className={"main-circle"} style={{ ...styles.circle, ...styles.mainCircle}}>
                    <div>
                        <img
                            src= {Memoji}
                            alt="Memo"
                            style={styles.image}
                        />
                    </div>
                </div>
                <div className={"bottom-circle"} style={{ ...styles.circle, ...styles.bottomCircle }}></div>
            </div>
        </div>
    );
}

const styles = {
    circleContainer: {
        position: "relative",
        width: "400px",
        height: "500px",
        marginBottom: "10px",
        marginLeft: "120px",

    },
    circle: {
        position: "absolute",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "var(--accent-yellow)",
       //  background: "linear-gradient(145deg, #ffffb4, #e6d997",
        background: "linear-gradient(145deg, #fff778, #e6d065)",
        // boxShadow:  "14px 14px 28px #e0d494,-14px -14px 28px #ffffbc",
        //background: "linear-gradient(145deg, #fffffd, #e0dcd4)",
        // boxShadow:  "24px 24px 48px #d4cfc9, -24px -24px 48px #ffffff"
    },
    blueCircle: {
        width: "130px",
        height: "130px",
        top: 0,
        left: "40%",
    },
    mainCircle: {
        width: "350px",
        height: "350px",
        top: "80px",
        left: "5%",
        flexDirection: "column",
        // backgroundColor: "#eee",
        // backgroundColor: "#694716",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    label: {
        position: "absolute",
        bottom: "10px",
        background: "rgba(255, 255, 255, 0.6)",
        fontWeight: "bold",
        padding: "2px 6px",
        fontSize: "0.9rem",
    },
    bottomCircle: {
        width: "140px",
        height: "140px",
        bottom: 0,
        left: "0%",
    },
};
