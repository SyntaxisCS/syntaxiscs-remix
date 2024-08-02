import React from "react";

// Components
import NavBar from "../Components/NavBar/navBar";
import Header from "../Components/Home/header/header";
import Skills from "../Components/Home/skills/skills";
import Story from "../Components/story/story";
import Footer from "../Components/Footer/footer";
import "./Styles/index.scss";

// Utils
import { json } from "@remix-run/react";

export const loader = async ({request}) => {
    return json({}, {
        headers: {
            "Cache-Control": "public, max-age=86400" // 24 hours
        }
    });
};

export default function Home() {
    return (
        <div className="homePage">
            <NavBar active="home"/>

            <Header/>

            <Skills/>

            <Story/>

            <Footer/>
        </div>
    )
}