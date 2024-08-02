import React from "react";

// Components
import "./header.scss";

export default function AboutHeader () {
    return (
        <div className="aboutHeader">
            <div className="header">
                <h1 className="title">About Me<span>.</span></h1>
                <div className="subtitle">
                    <div className="block"/><p>Creating a website that makes just one person's life better is what keeps my going in my pursuit of learning new technologies to make better and better websites!</p>
                </div>
            </div>
        </div>
    );
};