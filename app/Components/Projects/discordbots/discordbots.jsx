import React from "react";

// Components
import "./discordbots.scss";

export default function DiscordBots () {
    return (
        <div className="discordBots">
            <h2 className="sectionTitle">Discord Bots<span>.</span></h2>
            <p className="subtitle">Making Discord bots was what I learned Node.js on, I just kept making them, and got better and better with Node.js</p>

            <div className="list">
                <div className="bot">
                    <div className="mainRow">
                        <div className="left">
                            <img className="pfp" src="assets/projects/discordbots/icebot.png"/>
                            <a href="https://gitlab.com/SyntaxisCS/Icebot" target="_blank">
                                <p className="name">Icebot</p>
                                <i className="bx bx-right-arrow-alt"/>
                            </a>
                        </div>
                        <div className="right">
                            <p className="date">2020 - 2021</p>
                        </div>
                    </div>

                    <p className="description">A general purpose moderation and fun bot. Icebot was my main project and went through around 4 major overhauls which coincided with major leaps in my ability. Was used in several of mine and my friends' servers at the time.</p>
                </div>

                <div className="bot">
                    <div className="mainRow">
                        <div className="left">
                            <img className="pfp" src="assets/projects/discordbots/capitalist.png"/>
                            <a href="https://gitlab.com/SyntaxisCS/Capitalist" target="_blank">
                                <p className="name">Capitalist</p>
                                <i className="bx bx-right-arrow-alt"/>
                            </a>
                        </div>
                        <div className="right">
                            <p className="date">2021</p>
                        </div>
                    </div>

                    <p className="description">A simple "autoclicker" game where you would send messages like "%work" to make money to buy upgrades to your store and get more money per message. Lead to lots of spam in channels...</p>
                </div>

                <div className="bot">
                    <div className="mainRow">
                        <div className="left">
                            <img className="pfp" src="assets/projects/discordbots/quizmaster.png"/>
                            <p className="name">Quizmaster</p>
                        </div>
                        <div className="right">
                            <p className="date">2021</p>
                        </div>
                    </div>

                    <p className="description">A poll bot that was used by my teacher to give quizzes in the programming classes.</p>
                </div>
            </div>
        </div>
    )
};