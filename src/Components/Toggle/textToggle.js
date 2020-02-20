import React, { useState, useEffect } from "react";
import "./style.scss";

const TextThemeToggle = () => {
    const [text, setText] = useState("");
    const onToggle = () => {
        const nextTheme = text === "LIGHT" ? "DARK" : "LIGHT";
        setText(nextTheme);
        window.localStorage.setItem("blogTheme", nextTheme);
    };

    useEffect(() => {
        document.body.className = text.toLowerCase();
    }, [text]);

    useEffect(() => {
        const current = window.localStorage.getItem("blogTheme").toUpperCase();
        setText(current);
    }, []);

    return (
        <span
            tabIndex="-1"
            role="button"
            className="text-theme-toggle"
            onClick={onToggle}
            onKeyDown={()=>{}}
        >
            {text === "LIGHT" ? "DARK" : "LIGHT"}
        </span>
    );
};

export default TextThemeToggle;
