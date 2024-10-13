import { useRef } from "react";

// Components
import "./skills.scss";

// Utils
import { m as motion, useInView } from "framer-motion";

export default function Skills() {
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
        <div className="skills" ref={ref}>
            <h2 className="sectionTitle">Skills<span>.</span></h2>

            <motion.div className="skillWrapper" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                <motion.div className="skillItem" variants={cardVariants}>
                    <h3 className="title">Frontend</h3>

                    <div className="skillList">
                        <p>Javascript</p>
                        <p>React.JS</p>
                        <p>Remix.run</p>
                        <p>CSS/SASS</p>
                    </div>
                </motion.div>

                <motion.div className="skillItem" variants={cardVariants}>
                    <h3 className="title">Backend</h3>

                    <div className="skillList">
                        <p>Node.JS</p>
                        <p>Express.JS</p>
                        <p>Passport.JS</p>
                        <p>PostgreSQL</p>
                    </div>
                </motion.div>

                <motion.div className="skillItem" variants={cardVariants}>
                    <h3 className="title">Infastructure</h3>

                    <div className="skillList">
                        <p>DigitalOcean</p>
                        <p>Vercel</p>
                        <p>Docker</p>
                        <p>NGINX</p>
                    </div>
                </motion.div>

                <motion.div className="skillItem" variants={cardVariants}>
                    <h3 className="title">Tools and Practices</h3>

                    <div className="skillList">
                        <p>Boxicons</p>
                        <p>Agile/Scrum</p>
                        <p>Git (GitHub or Gitlab)</p>
                        <p>Hoppscotch (Postman)</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
};