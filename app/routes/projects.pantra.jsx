import React from "react";

// Components
import NavBar from "../Components/NavBar/navBar";
import Footer from "../Components/Footer/footer";
import ImageModal from "../Components/ImageModel/imageMode";
import "./Styles/ProjectPages/pantra.scss";

// Utils
import { json } from "@remix-run/react";

export const meta = () => {
    return [
        { title: "SyntaxisCS | Pantra" },
        {
            name: "description",
            content: "Read all about my project, Pantra, a pantry contents tracking app developed in Electron.js!"
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
            content: "Read all about my project, Pantra, a pantry contents tracking app developed in Electron.js!"
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
            content: "Read all about my project, Pantra, a pantry contents tracking app developed in Electron.js!"
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

export default function PantraPage() {
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
        <div className="projectPantra">
            <NavBar/>

            <div className="projectWrap">
                <div className="header">
                    <h2 className="sectionTitle">Pantra<span>.</span></h2>
                    <p className="date">June 2023 - July 2023</p>
                    
                    <a className="viewBtn" href="https://gitlab.com/SyntaxisCS/Pantra" target="_blank">View on Gitlab</a>

                    <p className="desc">A pantry contents tracker. Served as a introduction into desktop apps with Electron.js!</p>

                    <div className="coverImg"><img src="/assets/projects/pantra/pantra.png"/></div>
                </div>

                <div className="content">
                    <div className="sec">
                        <h3 className="title">About<span>.</span></h3>
                        <p>Pantra was the project I worked on before PlayVessel and was meant to be a tracker of the various items people have around the house, in their pantry, fridges, and freezers. With the ability to set minimums and shopping lists be automatically generated for the missing items.</p>
                    </div>

                    <div className="sec">
                        <h3 className="title">Challenges<span>.</span></h3>
                        <p>Pantra was an <span>Electron.js</span> powered app and while I had worked in Electron before, this was the first time I tried with any actual thought behind it. I had to learn how to handle user save data, and configurations. Handling user save data in a JSON file without a database was the biggest challenge, as I basically made a <span>JSON file powered database</span>. It was quite fun!</p>
                    </div>

                    <div className="sec">
                        <h3 className="title">Aftermath<span>.</span></h3>
                        <p>Pantra was conceived the summer right before I moved into my very first apartment on my own going into my second year of college. As such, I was thinking of all the different things that could make my life easier while living on my own, and I thought something like this would have been helpful. Ultimately the project fell to the wayside after a couple of weeks as I realized that it wouldn't be very useful as a desktop app. Pantra's <span>failure</span> gave <span>birth</span> to <span>PlayVessel</span>, which has become my favorite project. Thank you Pantra.</p>
                    </div>
                </div>

                <div className="mediaSec">
                    <h3 className="title">Media<span>.</span></h3>

                    <div className="images">
                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/pantra/home.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/pantra/home.webp"/>
                            </div>
                            <p>Home Page</p>
                        </div>

                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/pantra/inPantry.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/pantra/inPantry.webp"/>
                            </div>
                            <p>Inside Pantry Category</p>
                        </div>

                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/pantra/shoppingLists.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/pantra/shoppingLists.webp"/>
                            </div>
                            <p>Shopping Lists Page</p>
                        </div>

                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/pantra/inShoppingList.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/pantra/inShoppingList.webp"/>
                            </div>
                            <p>Inside a Shopping List</p>
                        </div>

                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/pantra/settings.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/pantra/settings.webp"/>
                            </div>
                            <p>Settings Home Page</p>
                        </div>

                        <div className="imageCard">
                            <div className="imageWrap" onClick={() => openImageModal("/assets/projects/pantra/about.webp")}>
                                <i className="bx bx-right-arrow-alt"/>
                                <img src="/assets/projects/pantra/about.webp"/>
                            </div>
                            <p>About Page (in settings)</p>
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