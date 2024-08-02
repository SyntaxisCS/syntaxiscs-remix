import React from "react";

// Components
import "./story.scss";

export default function Story() {
    return (
        <div className="story">
            <h2 className="sectionTitle">My Story<span>.</span></h2>

            <div className="storyWrap">
                <p>I started programming as an elective in the 3rd grade over a decade ago, and it quickly turned into a passion.</p>
                <p>I began by creating fake "viruses" in <span>VBS (Visual Basic Script)</span> or at least what an 8 year old would consider a virus (popups with scary messages of System32 being deleted), which soon transitioned into designing early websites which were equally as terrible.</p>
                <p>My journey evolved further when I started making Discord bots using <span>Discord.js</span>, some of which were actively used by my friends, another one I made was used as the moderation bot in a school Discord server.</p>
                <p>Over time, I combined these interests into a passion for the full-stack and for the past few years, I've been dedicated to building projects with <span>React</span> and <span>Express</span>.</p>
                <p>I have continued to hone my skills and explore new technologies, creating many projects that even if they never saw the light of day, I can say I am <span>proud</span> of them and I <span>learned a lot</span>!</p>
            </div>
        </div>
    )
}