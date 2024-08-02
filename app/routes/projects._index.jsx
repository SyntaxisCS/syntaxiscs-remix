import React from "react";

// Components
import NavBar from "../Components/NavBar/navBar";
import Featured from "../Components/Projects/featured/featured";
import DiscordBots from "../Components/Projects/discordbots/discordbots";
import SmallProjects from "../Components/Projects/smallProjects/smallProjects";
import Footer from "../Components/Footer/footer";
import "./Styles/projects.scss";

// Utils
import { json } from "@remix-run/react";

export const meta = () => {
    return [
        { title: "SyntaxisCS | Projects Home" },
        {
            name: "description",
            content: "Explore many of the projects I've worked on over the years as I've been learning to get better and better with Node.js!"
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
            content: "Explore many of the projects I've worked on over the years as I've been learning to get better and better with Node.js!"
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
            content: "Explore many of the projects I've worked on over the years as I've been learning to get better and better with Node.js!"
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

export default function ProjectHome() {
    return (
        <div className="projectHomePage">
            <NavBar active="projects"/>

            <Featured/>

            <SmallProjects/>
            
            <DiscordBots/>

            <Footer/>
        </div>
    )
}