import React from "react"
import memesData from "../memeData.js"

export default function Form() {

    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
        
    }

    return (
        <div className="form--container">
            <div className="input--container">
                <div className="top--text--container">
                    <label htmlFor="top--text">Top text</label>
                    <input type="text" id="top--text" placeholder="Shut up" />
                </div>
                <div className="bottom--text--container">
                    <label htmlFor="bottom--text">Bottom text</label>
                    <input type="text" id="bottom--text" placeholder="And take my money" />
                </div>
            </div>
            <div className="button--container">
                <button className="generate--button" onClick={getMemeImage}>Get a new meme image 🖼</button>
                <img src={memeImage} className="meme--image"/>
            </div>
        </div>
    )
}