import React from "react";

function Header() {
    return (
        <header className="header">
            <img src={require('../images/troll-face.png')} alt="" />
            <h2>Header Component</h2>
            <h4>React Course - Project 3</h4>
        </header>
    )
}

export default Header