import { useRef } from "react";

// Components
import "./featured.scss";

// Utils
import { NavLink } from "@remix-run/react";
import { m as motion, useInView } from "framer-motion";

export default function Featured() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -200px 0px"});

    const containerVariants = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };
    
    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    };
    
    return (
        <div className="featuredProjects" ref={ref}>
            <h2 className="sectionTitle">Featured Projects<span>.</span></h2>

            <motion.div className="projects" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                <motion.div className="project" variants={cardVariants}>
                    <img src="assets/projects/playvessel/meta-share.jpg" alt="PlayVessel meta image"/>

                    <div className="text">
                        <NavLink to="/projects/playvessel" className="title">PlayVessel <i className="bx bx-right-arrow-alt"/></NavLink>
                        <p>A game backlog tracker, with a complex backend handling nearly 300k video game entries.</p>
                    </div>
                </motion.div>
                <motion.div className="project" variants={cardVariants}>
                    <img src="assets/projects/pantra/pantra.png" alt="Pantra Logo"/>

                    <div className="text">
                        <NavLink to="/projects/pantra" className="title">Pantra <i className="bx bx-right-arrow-alt"/></NavLink>
                        <p>A pantry contents tracker. Served as a introduction into desktop apps with Electron.js</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
};