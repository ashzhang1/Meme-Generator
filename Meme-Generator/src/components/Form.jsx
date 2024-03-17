import React from "react"

export default function Form() {
    return (
        <form className="form--container">
            <div className="input--container">
                <div className="top--text--container">
                    <label>Top text</label>
                    <input type="text" id="top--text" placeholder="Shut up" />
                </div>
                <div className="bottom--text--container">
                    <label>Bottom text</label>
                    <input type="text" id="bottom--text" placeholder="And take my money" />
                </div>
            </div>
            <div className="button--container">
                <button className="generate--button">Get a new meme image 🖼</button>
            </div>
        </form>
    )
}