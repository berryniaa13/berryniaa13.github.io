import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import "../styles/global.scss"
import NavBar from "../components/NavBar.jsx";
import Headshot from "../assets/LibHeadshot.JPEG";
import Resume from "../assets/Nia Berry CS Resume.pdf";

export default function ContactPage() {
    const formRef = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_gph8dwr',     // EmailJS Service ID
                'template_ahz3ujj',    // EmailJS Template ID
                formRef.current,
                'KKIBR_NCfot7BVzef'         // EmailJS Public Key (User ID)
            )
            .then(
                () => {
                    alert("Message sent successfully!");
                    e.target.reset(); // optional: clears the form
                },
                (error) => {
                    alert("Failed to send message. Please try again later.");
                    console.error(error);
                }
            );
    };

    return (
        <div className="container">
            <header>
                <NavBar />
            </header>
            <main>
                <section className="banner" >
                    <div style={styles.wrapper}>
                        <div style={styles.card}>
                            <h1 style={styles.header}>Get in Touch</h1>
                            <p style={styles.text}>
                                I’m always open to new opportunities and collaborations. Feel free to reach out!
                            </p>
                            <div style={styles.linksContainer}>
                                <a
                                    href={Resume}
                                    download
                                    style={styles.resumeButton}
                                >
                                    Download My Resume
                                </a>
                                <div style={styles.linkSection}>
                                    <h2 style={styles.linkHeader}>LinkedIn</h2>
                                    <a
                                        href="https://www.linkedin.com/in/nia-berry"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={styles.link}
                                    >
                                        linkedin.com/in/nia-berry
                                    </a>
                                </div>
                                <div style={styles.linkSection}>
                                    <h2 style={styles.linkHeader}>Email</h2>
                                    <a
                                        href="mailto:berryniaa13@gmail.com"
                                        style={styles.link}
                                    >
                                        berryniaa13@gmail.com
                                    </a>
                                </div>
                            </div>
                            <form style={styles.form}  ref={formRef} onSubmit={sendEmail}>
                                <div>
                                    <label htmlFor="name" style={styles.label}>Name</label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Your Name"
                                        style={styles.input}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" style={styles.label}>Email</label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@email.com"
                                        style={styles.input}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" style={styles.label}>Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        placeholder="Your message..."
                                        style={styles.textarea}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    style={styles.submitButton}
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                    <img src={Headshot} alt="Headshot" style={styles.image} />
                </section>
            </main>
            <footer>
                © {new Date().getFullYear()} Nia Berry. All rights reserved.
            </footer>
        </div>
    );
}

const styles = {
    wrapper: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--background-nude)',
        padding: '24px',
    },
    card: {
        maxWidth: '600px',
        width: '100%',
        backgroundColor: 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(8px)',
        borderRadius: '16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        padding: '32px',
    },
    header: {
        fontSize: '1.875rem',
        fontWeight: '700',
        marginBottom: '1.5rem',
    },
    text: {
        color: '#374151',
        marginBottom: '1rem',
    },
    linksContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        marginBottom: '1.5rem',
    },
    resumeButton: {
        display: 'inline-block',
        textAlign: 'center',
        fontWeight: '500',
        padding: '12px 24px',
        borderRadius: '9999px',
        backgroundColor: 'var(--primary-blue)',
        color: '#FFFFFF',
        textDecoration: 'none',
    },
    linkSection: {},
    linkHeader: {
        fontWeight: '600',
        color: 'var(--accent-brown)',
        marginBottom: '0.25rem',
    },
    link: {
        color: 'var(--primary-blue)',
        textDecoration: 'none',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
    },
    label: {
        display: 'block',
        marginBottom: '0.25rem',
        color: '#374151',
        fontWeight: '500',
    },
    input: {
        width: '100%',
        border: '1px solid #D1D5DB',
        borderRadius: '8px',
        padding: '8px',
        outline: 'none',
        color: '#374151',
    },
    textarea: {
        width: '100%',
        border: '1px solid #D1D5DB',
        borderRadius: '8px',
        padding: '8px',
        outline: 'none',
        resize: 'vertical',
        color: '#374151',
    },
    image: {
        width: '40%',
        height: '420px',
        borderRadius: '18px',
        margin: '50px',
    },
    submitButton: {
        width: '100%',
        fontWeight: '500',
        padding: '12px',
        borderRadius: '9999px',
        backgroundColor: 'var(--primary-blue)',
        color: '#FFFFFF',
        border: 'none',
        cursor: 'pointer',
    },
};
