import React from "react"
import trollImage from '../images/Troll-Face.png';


export default function Navbar() {
    return (
        <nav className='navbar--container'>
            <img src={trollImage} className="troll--image"/>
            <h1 className="navbar--title">MemeGenerator</h1>
        </nav>
    )
}