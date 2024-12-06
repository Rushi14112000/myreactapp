import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText)
    }

    const clearText = () => {
        let newText = '';
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}></textarea>
                </div>
                <button className="btn btn-primary mx-3" onClick={handleUpClick}>convert to uppercase</button>
                <button className="btn btn-secondary mx-3" onClick={clearText}>Clear Text</button>
            </div>

            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>Number of words: {text.split(" ").length}</p>
                <p>Number of characters: {text.length}</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>

            </div>
        </>
    )
}
