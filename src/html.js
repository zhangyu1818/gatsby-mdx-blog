import React from "react";

export default class HTML extends React.Component {
    render() {
        return (
            <html {...this.props.htmlAttributes}>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no,user-scalable=no"
                    />
                    {this.props.headComponents}
                </head>
                <body {...this.props.bodyAttributes} className="dark">
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                    const getThemeByOS = () => {
                        let pref = window.matchMedia("(prefers-color-scheme: dark)");
                        if (pref.matches) return "dark";
                        pref = window.matchMedia("(prefers-color-scheme: light)");
                        if (pref.matches) return "light";
                    };

                    const getThemeByTime = () => {
                        const hour = new Date().getHours();
                        if (hour > 17 || hour < 6) return "dark";
                        return "light";
                    };
                    
                    const getTheme = () => {
                        let theme = getThemeByOS();
                        if (!theme) theme = getThemeByTime();
                        return theme;
                    };
                    
                    const setTheme = () => {
                        const themeClassName = getTheme();
                        document.body.className = themeClassName;
                        window.localStorage.setItem("blogTheme", themeClassName);
                    };
                    
                    setTheme();
                    setTimeout(()=>{
                        document.body.classList.add("transition");
                    })
                    `,
                        }}
                    />
                    {this.props.preBodyComponents}
                    <div
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                </body>
            </html>
        );
    }
}
