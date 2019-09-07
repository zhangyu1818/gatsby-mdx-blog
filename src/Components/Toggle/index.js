import React, { createRef } from "react";
import "./style.scss";

class Toggle extends React.PureComponent {
    inputRef = createRef();

    onSwitch = () => {
        const body = document.body;
        const checked = this.inputRef.current.checked;
        body.className = checked ? "light" : "dark";
        this.inputRef.current.focus();
        localStorage.setItem("blogTheme", body.className);
    };

    componentDidMount() {
        const bodyClass = document.body.className;
        this.inputRef.current.checked = bodyClass === "dark";
    }

    render() {
        return (
            <div>
                <input
                    ref={this.inputRef}
                    type="checkbox"
                    id="theme-toggle"
                    className="offscreen"
                />
                <label
                    onClick={this.onSwitch}
                    htmlFor="theme-toggle"
                    className="switch"
                />
            </div>
        );
    }
}

export default Toggle;
