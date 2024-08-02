import React from "react";

// Components
import NavBar from "../Components/NavBar/navBar";
import Footer from "../Components/Footer/footer";
import ImageModal from "../Components/ImageModel/imageMode";
import "./Styles/ProjectPages/playvessel.scss";

// Utils
import { json } from "@remix-run/react";

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
    // States
    const [isImageModalOpen, setIsImageModalOpen] = React.useState(false);
    const [selectedImage, setSelectedImage] = React.useState(null);

    const openImageModal = (image) => {
        setSelectedImage(image);
        setIsImageModalOpen(true);
    };

    const closeImageModal = () => {
        setIsImageModalOpen(false);
        setSelectedImage(null);
    };

    return (
        <div className="projectPlayvessel">
            <NavBar/>

            <div className="projectWrap">
                <div className="header">
                    <h2 className="sectionTitle">PlayVessel<span>.</span></h2>
                    <p className="date">July 2023 - Present</p>
                    
                    <a className="viewBtn" href="https://playvessel.com" target="_blank">Visit PlayVessel</a>

                    <p className="desc">Gaming backlog tracker. Sort games into categories to chip through the dreaded gaming backlog!</p>

                    <div className="coverImg"><img src="/assets/projects/playvessel/meta-share.jpg"/></div>
                </div>

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
                        <p>After working on PlayVessel for a year now as of writing I can confidently say that it's been my <span>best work</span> that I've ever done. I <span>learned so much</span> not just in coding the thing but how to <span>manage</span> a <span>website efficiently</span> as well as <span>servers</span> and <span>CDNs</span>. While I want nothing more than for PlayVessel to be my first website to achieve my goal of making just one person's life easier, I can confidently say even it if isn't I'm proud that I created it and I'd do it again. I plan to continue to work on it and maintain it for the foreseeable future.</p>
                    </div>
                </div>

                <div className="mediaSec">
                    <h3 className="title">Media<span>.</span></h3>

                    <div className="images">
                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/profile.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/profile.webp"/>
                            </div>
                            <p>Profile Home</p>
                        </div>

                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/profileBacklog.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/profileBacklog.webp"/>
                            </div>
                            <p>Profile Backlog</p>
                        </div>

                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/gameDetail.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/gameDetail.webp"/>
                            </div>
                            <p>Game Detail Page</p>
                        </div>
                        
                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/gameDetail-2.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/gameDetail-2.webp"/>
                            </div>
                            <p>Game Detail Page (Cont.)</p>
                        </div>

                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/settingsHome.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/settingsHome.webp"/>
                            </div>
                            <p>Settings Home</p>
                        </div>

                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/settingsPrivacy.webp")}>    
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/settingsPrivacy.webp"/>
                            </div>
                            <p>Privacy Disclosure</p>
                        </div>

                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/pvAbout.webp")}> 
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/pvAbout.webp"/>
                            </div>
                            <p>About Page</p>
                        </div>

                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/elp.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/elp.webp"/>
                            </div>
                            <p>External Link Protection Page (ELP)</p>
                        </div>

                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/footer.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/footer.webp"/>
                            </div>
                            <p>Footer</p>
                        </div>

                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/playvessel/statusPage.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/playvessel/statusPage.webp"/>
                            </div>
                            <p>Instatus Status Page</p>
                        </div>
                    </div>
                </div>

                {selectedImage && (
                    <ImageModal isOpen={isImageModalOpen} onClose={closeImageModal} image={selectedImage}/>
                )}
            </div>

            <Footer/>
        </div>
    )
}