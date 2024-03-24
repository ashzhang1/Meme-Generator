import React from "react"
import trollImage from '../images/Troll-Face.png';


export default function Navbar() {
    return (
        <header className="header">
            <img 
                src={trollImage} 
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
        </header>
    )
}