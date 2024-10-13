import React from "react";

// Components
import "./smallProjects.scss";

// Utils
import {m as motion} from "framer-motion";

export default function SmallProjects () {
    return (
        <div className="smallProjects">
            <h2 className="sectionTitle">Smaller Projects<span>.</span></h2>
            <p className="subtitle">Smaller projects I've worked in out of curiousty and/or fun. They usually have no purpose other than that!</p>

            <motion.div className="list" initial="hidden" whileInView="visible" viewport={{once: true}}>
                <motion.div className="project" initial={{opacity: 0, x: 100}} whileInView={{opacity:1, x: 0, transition: {duration:1}}} viewport={{ once: true}}>
                    <div className="mainRow">
                        <div className="left">
                            <img className="pfp" src="/assets/projects/parkingGarage.png" alt="Parking Garage icon"/>
                            <a href="https://gitlab.com/SyntaxisCS/ParkingGarage" target="_blank" aria-label="ParkingGarage Gitlab repo link">
                                <p className="name">ParkingGarage</p>
                                <i className="bx bx-right-arrow-alt"/>
                            </a>
                        </div>

                        <div className="right">
                            <p className="date">Jul 2023</p>
                        </div>
                    </div>

                    <p className="description">My attempt on making a simulated parking garage that was generated on startup and cars would come in at random intervals and find parking spots. I used pathfinding libraries and had a lot of fun. I'd love to return to this someday and finish it.</p>
                </motion.div>

                <motion.div className="project" initial={{opacity: 0, x: -100}} whileInView={{opacity:1, x: 0, transition: {duration:1}}} viewport={{ once: true}}>
                    <div className="mainRow">
                        <div className="left">
                            <img className="pfp" src="/assets/projects/passwordLeakChecker.png" alt="password leak checker icon"/>
                            <a href="https://gitlab.com/SyntaxisCS/password-leak-check" target="_blank" aria-label="password-leak-check Gitlab repo link">
                                <p className="name">Password-Leak-Checker</p>
                                <i className="bx bx-right-arrow-alt"/>
                            </a>
                        </div>

                        <div className="right">
                            <p className="date">Dec 2022</p>
                        </div>
                    </div>

                    <p className="description">A smaller NPM package that simply checks the HaveIBeenPwned.com api if a string password has been compromised.</p>
                </motion.div>

                <motion.div className="project" initial={{opacity: 0, x: 100}} whileInView={{opacity:1, x: 0, transition: {duration:1}}} viewport={{ once: true}}>
                    <div className="mainRow">
                        <div className="left">
                            <img className="pfp" src="/assets/projects/turtleHandler.png" alt="turtle-handler icon"/>
                            <a href="https://gitlab.com/SyntaxisCS/turtle-handler" target="_blank" aria-label="turtle-handler Gitlab repo link">
                                <p className="name">Turtle-Handler</p>
                                <i className="bx bx-right-arrow-alt"/>
                            </a>
                        </div>

                        <div className="right">
                            <p className="date">Nov 2022</p>
                        </div>
                    </div>

                    <p className="description">A smaller Node.js wrapper around a Minecraft mod, CC:Tweaked, that featured little controllable computers named turtles. Originally meant for Lua, I made a wrapper to easily be able to control these Lua robots from a Node.js class. Was published as a NPM package and got around 200 downloads a week for several weeks in a row.</p>
                </motion.div>
            </motion.div>
        </div>
    )
};