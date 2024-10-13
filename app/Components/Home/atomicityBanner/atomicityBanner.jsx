// Components
import "./atomicityBanner.scss";

// Utils
import { m as motion } from "framer-motion";

export default function AtomicityBanner () {

    return (
        <motion.div className="atomicityBanner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <div className="leftGroup">
                <img src="/assets/atomicity-logo.webp" alt="Atomicity Logo" aria-label="Logo for the web development company, Atomicity LLC."/>

                <div className="textGroup">
                    <h3>I'm Launching Atomicity!</h3>
                    <p>Your go-to for custom websites in the Charleston area!</p>
                </div>
            </div>

            <motion.a className="ctaBtn" 
                href="https://atomicity.dev"
                aria-label="Link to Atomicity.dev website"
                target="_blank"
                whileTap={{ scale: 0.85 }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >Check it out!</motion.a>
        </motion.div>
    )
};