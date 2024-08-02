import React from "react";

// Components
import NavBar from "../Components/NavBar/navBar";
import AboutHeader from "../Components/About/header/header";
import AboutWidgets from "../Components/About/widgets/widgets";
import Story from "../Components/story/story";
import Footer from "../Components/Footer/footer";
import "./Styles/about.scss";

// Utils
import { json } from "@remix-run/react";

export const meta = () => {
    return [
        { title: "SyntaxisCS | About" },
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

export default function About() {
    return (
        <div className="aboutPage">
            <NavBar active="about"/>

            <AboutHeader/>
            
            <AboutWidgets/>

            <Story/>

            <Footer/>
        </div>
    )
}