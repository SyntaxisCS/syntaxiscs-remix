import React from "react";

// Components
import "./header.scss";

// Utils
import { m as motion} from "framer-motion";
import { NavLink } from "@remix-run/react";

export default function Header () {
    return (
        <div className="header">
            <motion.div className="text" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
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
            </motion.div>

            <motion.div className="photo" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <div className="wrapper">
                    <img src="/sakura.webp" alt="SyntaxisCS Profile Picture"/>
                </div>
            </motion.div>
        </div>
    )
};