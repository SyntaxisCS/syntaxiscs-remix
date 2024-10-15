import {useRef, useState} from "react";

// Components
import NavBar from "../Components/NavBar/navBar";
import Footer from "../Components/Footer/footer";
import ImageModal from "../Components/ImageModel/imageMode";
import "./Styles/ProjectPages/playvessel.scss";

// Utils
import { json } from "@remix-run/react";
import {m as motion, useInView} from "framer-motion";

export const meta = () => {
    return [
        { title: "SyntaxisCS | PlayVessel" },
        {
            name: "description",
            content: "Read all about my project, PlayVessel, a game backlog tracking website!"
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
            content: "Read all about my project, PlayVessel, a game backlog tracking website!"
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
            content: "Read all about my project, PlayVessel, a game backlog tracking website!"
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

export default function PlayVesselPage() {
    // Utils
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px"});

    // States
    const [isImageModalOpen, setIsImageModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const openImageModal = (image) => {
        setSelectedImage(image);
        setIsImageModalOpen(true);
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
        setSelectedImage(null);
    };

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
        <div className="projectPlayvessel">
            <NavBar/>

            <div className="projectWrap">
                <motion.header className="header" variants={containerVariants} initial="hidden" animate="visible">
                    <motion.h2 className="sectionTitle" variants={cardVariants}>PlayVessel<span>.</span></motion.h2>
                    <motion.p className="date" variants={cardVariants}>July 2023 - October 2024</motion.p>

                    <motion.p className="desc" variants={cardVariants}>Gaming backlog tracker. Sort games into categories to chip through the dreaded gaming backlog!</motion.p>

                    <motion.div className="coverImg" variants={cardVariants}><img src="/assets/projects/playvessel/meta-share.jpg" alt="PlayVessel Cover Image" loading="lazy"/></motion.div>
                </motion.header>

                <div className="content">
                    <div className="sec">
                        <h3 className="title">About<span>.</span></h3>
                        <p>PlayVessel is a gaming backlog tracker that I created to solve an issue I was having with my other hobby, video games, I own a lot of games and I buy them faster than I can play them, so I created this to help me organize them and play through them quicker! It totally worked, rather than just playing the video games more, I started another big project :). In all seriousness though, it has helped me a lot, and I'm very proud of it.</p>
                    </div>

                    <div className="sec">
                        <h3 className="title">Challenges<span>.</span></h3>
                        <p>PlayVessel has been my most complex and daunting project to date, and over the year I've worked on it so far I have had many challenges. The first notable one was the fact that I started working on it in just plain React and Vite, on the <span>client-side</span>, which naturally as the site got bigger and bigger, led to just incredibly slow performance. PlayVessel was the reason I started learning server-side rendering, and started using <span>Remix.run</span> which I have grown to <span>LOVE</span>.</p>
                        <p>Another massive challenge I dealt with was the <span>IGDB API</span>, not because it's bad, but because of the amount of data that becomes available to you, my game data ingest system went through revision after revision, overhaul after overhaul, seeing massive speed boosts seconds at a time. I learned a lot about concurrency and data manipulation as well as efficiently database operations.</p>
                    </div>

                    <div className="sec">
                        <h3 className="title">Aftermath<span>.</span></h3>
                        <p>After working on PlayVessel for a year now as of writing I can confidently say that it's been my <span>best work</span> that I've ever done. I <span>learned so much</span> not just through coding the thing, but how to <span>manage</span> a <span>website efficiently</span> as well as <span>servers</span> and <span>CDNs</span> and using the resources given effectively. While PlayVessel may have not been a big success, it did get some users and that's awesome. Ultimately it didn't make sense to keep running with no revenue and I ended up sunsetting it. It was a good learning project and it absolutely will lead to bigger and brighter things moving forward.</p>
                    </div>
                </div>

                <div className="mediaSec" ref={ref}>
                    <h3 className="title">Media<span>.</span></h3>

                    <motion.div className="images" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
                        <motion.div className="imageCard" variants={cardVariants}>
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/profile.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/profile.webp" alt="Profile Home" loading="lazy"/>
                            </div>
                            <p>Profile Home</p>
                        </motion.div>

                        <motion.div className="imageCard" variants={cardVariants}>
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/profileBacklog.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/profileBacklog.webp" alt="Profile Backlog" loading="lazy"/>
                            </div>
                            <p>Profile Backlog</p>
                        </motion.div>

                        <motion.div className="imageCard" variants={cardVariants}>
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/gameDetail.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/gameDetail.webp" alt="Game Detail Page (IMG1)" loading="lazy"/>
                            </div>
                            <p>Game Detail Page</p>
                        </motion.div>
                        
                        <motion.div className="imageCard" variants={cardVariants}>
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/gameDetail-2.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/gameDetail-2.webp" alt="Game Detail Page (IMG2)" loading="lazy"/>
                            </div>
                            <p>Game Detail Page (Cont.)</p>
                        </motion.div>

                        <motion.div className="imageCard" variants={cardVariants}>
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/settingsHome.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/settingsHome.webp" alt="Settings Home" loading="lazy"/>
                            </div>
                            <p>Settings Home</p>
                        </motion.div>

                        <motion.div className="imageCard" variants={cardVariants}>
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/settingsPrivacy.webp")}>    
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/settingsPrivacy.webp" alt="Privacy Disclosure" loading="lazy"/>
                            </div>
                            <p>Privacy Disclosure</p>
                        </motion.div>

                        <motion.div className="imageCard" variants={cardVariants}>
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/pvAbout.webp")}> 
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/pvAbout.webp" alt="About Page" loading="lazy"/>
                            </div>
                            <p>About Page</p>
                        </motion.div>

                        <motion.div className="imageCard" variants={cardVariants}>
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/elp.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/elp.webp" alt="External Link Protection Page (ELP)" loading="lazy"/>
                            </div>
                            <p>External Link Protection Page (ELP)</p>
                        </motion.div>

                        <motion.div className="imageCard" variants={cardVariants}>
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/footer.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/footer.webp" alt="Footer" loading="lazy"/>
                            </div>
                            <p>Footer</p>
                        </motion.div>

                        <motion.div className="imageCard" variants={cardVariants}>
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/statusPage.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/statusPage.webp" alt="Instatus Status Page" loading="lazy"/>
                            </div>
                            <p>Instatus Status Page</p>
                        </motion.div>
                    </motion.div>
                </div>

                {selectedImage && (
                    <ImageModal isOpen={isImageModalOpen} onClose={closeImageModal} image={selectedImage}/>
                )}
            </div>

            <Footer/>
        </div>
    )
}