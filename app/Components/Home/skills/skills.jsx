import React from "react";

// Components
import "./skills.scss";

// Utils

export default function Skills() {
    return (
        <div className="skills">
            <h2 className="sectionTitle">Skills<span>.</span></h2>

            <div className="skillWrapper">
                <div className="skillItem">
                    <h3 className="title">Frontend</h3>

                    <div className="skillList">
                        <p>Javascript</p>
                        <p>React.JS</p>
                        <p>Remix.run</p>
                        <p>CSS/SASS</p>
                    </div>
                </div>

                <div className="skillItem">
                    <h3 className="title">Backend</h3>

                    <div className="skillList">
                        <p>Node.JS</p>
                        <p>Express.JS</p>
                        <p>Passport.JS</p>
                        <p>PostgreSQL</p>
                    </div>
                </div>

                <div className="skillItem">
                    <h3 className="title">Infastructure</h3>

                    <div className="skillList">
                        <p>DigitalOcean</p>
                        <p>Vercel</p>
                        <p>Docker</p>
                        <p>NGINX</p>
                    </div>
                </div>

                <div className="skillItem">
                    <h3 className="title">Tools and Practices</h3>

                    <div className="skillList">
                        <p>Boxicons</p>
                        <p>Agile/Scrum</p>
                        <p>Git (GitHub or Gitlab)</p>
                        <p>Hoppscotch (Postman)</p>
                    </div>
                </div>
            </div>
        </div>
    )
};