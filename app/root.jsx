import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useNavigation,
    useRouteError
} from "@remix-run/react";
import { useEffect, useRef } from "react";

// Components
import LoadingBar from "react-top-loading-bar";
import "./index.scss";

export const meta = () => {
    return [
        { title: "SyntaxisCS" },
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

export const links = () => {
    return [
        { rel: "icon", href: "/favicon.ico?v=2.0"},
        { rel: "icon", type: "image/png", sizes: "32x32", href:"/favicon-32x32.png?v=2.0"},
        { rel: "icon", type: "image/png", sizes: "16x16", href:"/favicon-16x16.png?v=2.0"},
        { rel: "apple-touch-icon", sizes: "180x108", href: "/apple-touch-icon.png?v=2.0"},
        { rel: "mask-icon", href:"/safari-pinned-tab.svg?v=2.0", color: "#603cba"},
        { rel: "shortcut-icon", href: "/favicon.ico?v=2.0"},
        { rel: "manifest", href: "/site.webmanifest?v=2.0"},
        // Bunny
        { rel: "preconnect", href: "https://fonts.bunny.net"},
        { rel: "stylesheet", href: "https://fonts.bunny.net/css?family=inter:100,200,300,400,500,600,700,800,900|quicksand:300,400,500,600,700" },
        // Boxicons
        { rel: "stylesheet", href: "https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"}
    ]
}

export const ErrorBoundary = () => {
    const error = useRouteError();

    if (error.status === 404) {
        return (
            <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <Links/>
                <Meta/>
            </head>
            <body>
                <div className="topBar" style={{display: "flex", padding: "20px 50px 20px 50px", justifyContent: "space-between"}}>
                    <a href="/" style={{fontFamily:"'Inter', sans-serif",color: "#040309",fontSize: "18px",fontWeight:"bold",textDecoration:"none"}}>Syntaxis<span style={{background:"linear-gradient(to right, #6C06f1, #ec4b8a)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",textFillColor:"transparent"}}>CS</span></a>
                    <a href="/" style={{fontFamily: "'Inter', sans-serif", color: "#fcfcfd", padding: "0.5em", textAlign: "center", display: "flex", alignItems: "center", textDecoration: "none", fontSize: "22px", height: "43px", boxSizing: "border-box", backgroundColor: "#6C06f1", borderRadius: "5px"}}>Home</a>
                    
                </div>
                <div id="notfound" style={{ position: "relative", height: "90vh" }}>
                    <div className="notfound" style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}>
                        <div className="notfound-404" style={{ position: "relative", height: "240px" }}>
                        <h3 style={{ fontFamily: "'Inter', sans-serif", position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", fontSize: "232px", fontWeight: "900", margin: "0px", color: "#040309", textTransform: "uppercase", letterSpacing: "-40px", marginLeft: "-20px" }}>
                            <span style={{ textShadow: "-8px 0px 0px #6C06f1" }}>4</span>
                            <span style={{ textShadow: "-8px 0px 0px #6C06f1" }}>0</span>
                            <span style={{ textShadow: "-8px 0px 0px #6C06f1" }}>4</span>
                        </h3>
                        <h3 style={{ fontFamily: "'Inter', sans-serif", position: "relative", fontSize: "16px", fontWeight: "700", textTransform: "uppercase", textAlign: "center", color: "#040309", margin: "0px", letterSpacing: "3px", paddingLeft: "6px" }}>Oops! Page not found</h3>
                        </div>
                        <h2 style={{ fontFamily: "'Inter', sans-serif", fontSize: "20px", fontWeight: "400", textTransform: "uppercase", textAlign: "center", color: "#040309", marginTop: "0px", marginBottom: "25px" }}>
                        we are sorry, but the page you requested was not found
                        </h2>
                    </div>
                </div>

                <ScrollRestoration/>
                <Scripts/>
            </body>
            </html>
        )
    }
};

export default function App() {
    // Utils
    const transition = useNavigation();
    const ref = useRef();

    useEffect(() => {
        if (transition.state === "loading") {
            ref.current.continuousStart();
        }

        if (transition.state === "idle") {
            ref.current.complete();
        }
    }, [transition.state]);

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <Links/>
                <Meta/>
            </head>
            <body>
                <div id="root">
                    <LoadingBar color="#6e06f1" ref={ref}/>
                    <Outlet/>
                    <ScrollRestoration/>
                    <Scripts/>
                </div>
            </body>
        </html>
    );
};