import React from "react";
import "../styles/global.scss"

export default function HomePage() {
    return (
        <div className="min-h-screen bg-[var(--background-white)] p-8">
            <header className="text-center mb-12">
                <h1 className="text-5xl font-bold text-[var(--primary-blue)] mb-2">Nia Berry</h1>
                <h2 className="text-xl text-[var(--text-dark)]">Frontend Developer & UI Enthusiast</h2>
                <p className="text-[var(--text-dark)]">
                    Organic. Bold. Purposeful. Just like my code.
                </p>
            </header>

            <main>
                <section className="neumorphic">
                    <h3 >About Me</h3>
                    <p className="text-[var(--text-dark)]">
                        I'm a creative frontend developer passionate about building beautiful,
                        intuitive digital experiences with a focus on responsive design,
                        accessibility, and clean code.
                    </p>
                </section>

                <section className="neumorphic">
                    <h3>Skills</h3>
                    <ul>
                        {['React', 'JavaScript', 'Tailwind CSS', 'Firebase', 'UI/UX Design'].map((skill) => (
                            <li
                                key={skill}
                                className="pill"
                            >
                                {skill}
                            </li>
                            ))}
                    </ul>
                </section>

                <section className="neumorphic">
                    <h3 >Projects</h3>
                    <p >
                        Check back soon for featured portfolio pieces showcasing my latest work.
                    </p>
                </section>
            </main>

            <footer className="mt-12 text-center text-sm text-[var(--text-dark)]">
                © {new Date().getFullYear()} Nia Berry. All rights reserved.
            </footer>
        </div>
);
}
