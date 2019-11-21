import React, { useEffect, useRef } from "react";
import TypeIt from "typeit";
import "./style.scss";

const Index = () => {
    const descriptionEle = useRef(null);
    useEffect(() => {
        new TypeIt(descriptionEle.current, {
            strings: ["oh oh sometimes ~", "i get a good feeling ~"],
            speed: 50,
            waitUntilVisible: true,
            cursor: false,
        }).go();
    }, []);
    return (
        <div className="bio-wrap">
            <div className="avatar" />
            <p className="description" ref={descriptionEle} />
        </div>
    );
};

export default Index;
