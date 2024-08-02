import React from "react";

// Components
import "./header.scss";

// Utils
import { NavLink } from "@remix-run/react";

export default function Header () {
    return (
        <div className="header">
            <div className="text">
                <div className="greeting">
                    <p>Hey, I'm Charley!</p>
                </div>
                <div className="position">
                    <h1><span>Full</span>-Stack Developer</h1>
                </div>
                <div className="byline">
                    <p>Turning ideas into reality with beautiful, functional websites. Proudly serving Charleston, SC.</p>
                </div>

                <div className="buttons">
                    <NavLink className="contact" to="/contact">Get In Touch</NavLink>
                    <NavLink className="project" to="/projects">View My Projects</NavLink>
                </div>
            </div>

            <div className="photo">
                <div className="wrapper">
                    <img src="/sakura.png"/>
                </div>
            </div>
        </div>
    )
};