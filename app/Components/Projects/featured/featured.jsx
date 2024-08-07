import React from "react";

// Components
import "./featured.scss";

// Utils
import { NavLink } from "@remix-run/react";

export default function Featured() {
    return (
        <div className="featuredProjects">
            <h2 className="sectionTitle">Featured Projects<span>.</span></h2>

            <div className="projects">
                <div className="project">
                    <img src="assets/projects/playvessel/meta-share.jpg" alt="PlayVessel meta image"/>

                    <div className="text">
                        <NavLink to="/projects/playvessel" className="title">PlayVessel <i className="bx bx-right-arrow-alt"/></NavLink>
                        <p>A game backlog tracker, with a complex backend handling nearly 300k video game entries. This is my current main project.</p>
                    </div>
                </div>
                <div className="project">
                    <img src="assets/projects/pantra/pantra.png" alt="Pantra Logo"/>

                    <div className="text">
                        <NavLink to="/projects/pantra" className="title">Pantra <i className="bx bx-right-arrow-alt"/></NavLink>
                        <p>A pantry contents tracker. Served as a introduction into desktop apps with Electron.js</p>
                    </div>
                </div>
            </div>
        </div>
    )
};