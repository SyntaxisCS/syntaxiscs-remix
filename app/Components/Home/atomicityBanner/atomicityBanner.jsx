// Components
import "./atomicityBanner.scss";

// Utils
import { m as motion } from "framer-motion";

export default function AtomicityBanner () {

    return (
        <motion.div className="atomicityBanner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <img src="/assets/atomicity-logo.webp" alt="Atomicity Logo" aria-label="Logo for the web development company, Atomicity LLC."/>

            <div className="group">
                <h3>Launching Atomicity</h3>
                <p>Your go-to for custom websites in the Charleston area!</p>
            </div>
        </motion.div>
    )
};