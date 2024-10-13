import {useRef} from "react";

// Components
import NavBar from "../Components/NavBar/navBar";
import Footer from "../Components/Footer/footer";
import "./Styles/contact.scss";

// Utils
import { json } from "@remix-run/react";
import { m as motion, useInView } from "framer-motion";

export const meta = () => {
    return [
        { title: "SyntaxisCS | Contact" },
        {
            name: "description",
            content: "Hey, my name is Charles Stello or SyntaxisCS, welcome to my website. Here you can explore a showcase of all of my work with Node.js and React.js. I hope you enjoy all I have to show you, if you'd like to get in touch, just use the form at /contact. Let's partner and create something amazing together!"
        },
        {
            name: "keywords",
            content: "web developer, web designer, portfolio, front-end development, javascript, react, node.js, charles stello"
        },
        {
            name: "image",
            content: "/meta-share.png"
        },
        {
            name: "author",
            content: "Charles Stello"
        },
        // Open Graph
        {
            property: "og:url",
            content: "https://syntaxiscs.com"
        },
        {
            property: "og:type",
            content: "website"
        },
        {
            property: "og:title",
            content: "SyntaxisCS"
        },
        {
            property: "og:description",
            content: "Hey, my name is Charles Stello or SyntaxisCS, welcome to my website. Here you can explore a showcase of all of my work with Node.js and React.js. I hope you enjoy all I have to show you, if you'd like to get in touch, just use the form at /contact. Let's partner and create something amazing together!"
        },
        {
            property: "og:image",
            content: "/meta-share.png"
        },
        // Twitter
        {
            name: "twitter:card",
            content: "summary_large_image"
        },
        {
            name: "twitter:title",
            content: "SyntaxisCS"
        },
        {
            name: "twitter:description",
            content: "Hey, my name is Charles Stello or SyntaxisCS, welcome to my website. Here you can explore a showcase of all of my work with Node.js and React.js. I hope you enjoy all I have to show you, if you'd like to get in touch, just use the form at /contact. Let's partner and create something amazing together!"
        },
        {
            name: "twitter:image",
            content: "/meta-share.png"
        },

        // SEO
        {
            name: "msapplication-TileColor",
            content: "#603cba"
        },
        {
            name: "theme-color",
            content: "#ffffff"
        }
    ]
};

export const loader = async ({request}) => {
    return json({}, {
        headers: {
            "Cache-Control": "public, max-age=86400" // 24 Hours
        }
    });
};

export default function Contact() {
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
        <div className="contactPage" ref={ref}>
            <NavBar/>

            <div className="header">
                <motion.div className="text" initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <div className="title">
                        <h1>Get in Touch<span>.</span></h1>
                    </div>
                    <p className="byline">Think I could help you out? Reach out through the form and I'll get back to you as soon as I can! I'm looking forward to meeting you!</p>
                    
                    <form className="form" action="https://formspree.io/f/xrgvrjdp" method="post">
                        <input type="text" name="name" placeholder="name" required/>
                        <input type="email" name="email" placeholder="email" required/>
                        <textarea name="message" placeholder="message" required/>
                        <button className="submitBtn">Send <i className="bx bx-paper-plane"/></button>
                    </form>
                </motion.div>

                <motion.div className="photo" initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <div className="wrapper">
                        <img src="/sakura.webp" alt="SyntaxisCS Profile Picture"/>
                    </div>
                </motion.div>
            </div>

            <div className="alsoCheck">
                <h2>You can also find me on<span>:</span></h2>

                <motion.div className="socials" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                    <motion.a variants={cardVariants} className="social" href="https://gitlab.com/SyntaxisCS" target="_blank" aria-label="SyntaxisCS Gitlab">
                        <div className="iconWrap">
                            <i className="bx bxl-gitlab"/>
                        </div>
                        <p>SyntaxisCS</p>
                    </motion.a>

                    <motion.a className="social" variants={cardVariants} href="https://github.com/SyntaxisCS" target="_blank" aria-label="SyntaxisCS Github">
                        <div className="iconWrap">
                            <i className="bx bxl-github"/>
                        </div>
                        <p>SyntaxisCS</p>
                    </motion.a>

                    <motion.a className="social" variants={cardVariants} href="https://www.linkedin.com/in/charlesstello/" target="_blank" aria-label="Charles Stello LinkedIn">
                        <div className="iconWrap">
                            <i className="bx bxl-linkedin"/>
                        </div>
                        <p>CharlesStello</p>
                    </motion.a>
                </motion.div>
            </div>

            <Footer/>
        </div>
    )
};