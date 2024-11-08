import React from "react";
import '../styles/Header.css';
import { Link } from "react-router-dom";

function Header()
{
    return(
        <header className="header">
            <h1>Mon Protfolio</h1>
            <nav>
                <Link  to="/">About</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </nav>

        </header>
    );
}
export default Header;