import React from "react";

// Components
import "./widgets.scss";

export default function AboutWidgets () {
    React.useEffect(() => {
        const scrollers = document.querySelectorAll('.stackScroller');
        scrollers.forEach(scroller => {
            const items = Array.from(scroller.children);
            items.forEach(item => {
                const clone = item.cloneNode(true);
                scroller.appendChild(clone);
            });
        });
    }, []);

    return (
        <div className="aboutWidgets">
            <div className="techStack">
                <h2>Current Tech Stack<span>.</span></h2>
                <div className="stackCard">
                    <div className="stackScroller left">
                        <i className="bx bx-star"/>
                        <div className="techItem">Node.js</div>
                        <i className="bx bx-star"/>
                        <div className="techItem">JavaScript</div>
                        <i className="bx bx-star"/>
                        <div className="techItem">HTML5/CSS3</div>
                        <i className="bx bx-star"/>
                        <div className="techItem">React.js</div>
                    </div>

                    <div className="stackScroller right">
                        
                        <i className="bx bx-star"/>
                        <div className="techItem">Remix.run</div>
                        <i className="bx bx-star"/>
                        <div className="techItem">Express.js</div>
                        <i className="bx bx-star"/>
                        <div className="techItem">Passport.js</div>
                        <i className="bx bx-star"/>
                        <div className="techItem">SASS</div>
                        <i className="bx bx-star"/>
                        <div className="techItem">Docker</div>
                    </div>

                    <div className="stackScroller left offset">
                        <i className="bx bx-star"/>
                        <div className="techItem">PostgreSQL</div>
                        <i className="bx bx-star"/>
                        <div className="techItem">DigitalOcean</div>
                        <i className="bx bx-star"/>
                        <div className="techItem">Instatus</div>
                        <i className="bx bx-star"/>
                        <div className="techItem">Vercel</div>
                        <i className="bx bx-star"/>
                        <div className="techItem">Boxicons</div>
                    </div>
                </div>
            </div>
        </div>
    )
};