import React from "react";

// Components
import { NavLink } from "@remix-run/react";
import "./navBar.scss";

export default function NavBar ({active}) {
    
    // States
    const [showMenu, setShowMenu] = React.useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="navBar">
            <NavLink to="/" className="sitename">
                Syntaxis
                <span>CS</span>
            </NavLink>

            <div className="items">
                <NavLink to="/" className={`item ${active === "home" ? "active" : ""}`}>Home</NavLink>
                <NavLink to="/projects" className={`item ${active === "projects" ? "active" : ""}`}>Projects</NavLink>
                <NavLink to="/about" className={`item ${active === "about" ? "active" : ""}`}>About</NavLink>
            </div>

            <NavLink to="/contact" className="contactBtn">
                <i className="bx bx-message-rounded-detail"/>
            </NavLink>

            <div className="menuBar">
                {showMenu ?
                    <i className="bx bx-menu-alt-right" onClick={toggleMenu}/>
                :
                    <i className="bx bx-menu" onClick={toggleMenu}/>
                }

                {showMenu && (
                    <div className="menuContent">
                        <div className="links">
                            <NavLink to="/">Home</NavLink>
                            <NavLink to="/projects">Projects</NavLink>
                            <NavLink to="/about">About</NavLink>
                            <NavLink to="/contact">Get in Contact</NavLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};