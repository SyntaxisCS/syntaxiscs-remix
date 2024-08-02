import React from "react";

// Components
import "./footer.scss";

// Utils
import { NavLink } from "@remix-run/react";

export default function Footer() {
    return (
        <footer>
            <div className="lowerBar">
                <div className="contact">
                    <p>Need help with something<span>?</span></p>
                    <div className="buttons">
                        <NavLink className="contact" to="/contact">Get In Touch</NavLink>
                        <NavLink className="project" to="/projects">View My Projects</NavLink>
                    </div>
                </div>

                <div className="signature">
                    <p>2024 © All Rights Reserved.</p>
                    <p>Made with ❤️ by Charles Stello</p>
                </div>
            </div>
        </footer>
    )
};