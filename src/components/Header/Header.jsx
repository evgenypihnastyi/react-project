import React from "react";
import s from "./Header.module.css";
import logo from "./../../images/logo.png"

const Header = () => {
    return <header className={s.header}>
        <img src={logo} />
    </header>
}
console.log("My reference= " + logo)
export default Header;
