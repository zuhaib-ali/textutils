import React, {useState} from 'react'

const operatonButtonStyle = {
    margin:"0px 3px"
}

export default function TextForm(props) {
    const [text, setText] = useState("");

    function textFormHandler(event){
        setText(event.target.value);
    }

    // COPY TEXT
    function copyHandler(){
        let para = document.getElementById("paragraph");
        let selected_text = para.value.slice(para.selectionStart, para.selectionEnd);
        if(selected_text === "" || selected_text === undefined){
            selected_text = para.select();
        }
        navigator.clipboard.writeText(selected_text);

        props.setAlert({
            title:"Success",
            message:"Text coppied"
        });
    }

    // TEXT UPPER CASE
    function uppercaseHandler(){
        let textarea_tag = document.getElementById("paragraph");
        let start_index = textarea_tag.selectionStart;
        let end_index = textarea_tag.selectionEnd;
        let selected_string = textarea_tag.value.slice(start_index, end_index);
        let start_content = textarea_tag.value.substr(0, start_index);
        let end_content = textarea_tag.value.substr(end_index, textarea_tag.value.length);
        setText(start_content+selected_string.toUpperCase()+end_content);
    }

    // TEXT LOWER CASE
    function lowwercaseHandler(){
        let textarea_tag = document.getElementById("paragraph");
        let start_index = textarea_tag.selectionStart;
        let end_index = textarea_tag.selectionEnd;
        let selected_string = textarea_tag.value.slice(start_index, end_index);
        let start_content = textarea_tag.value.substr(0, start_index);
        let end_content = textarea_tag.value.substr(end_index, textarea_tag.value.length);
        setText(start_content+selected_string.toLowerCase()+end_content);
    }

    // REMOVE EXTRA WHITE SPACES
    function extraSpacesRemoveHandler(){
        setText(text.split(/[ ]+/).join(" "));
    }

    // CLEAR ALL TEXT
    function clearTextHandler(){
        setText("");
    }
    
    return (
        <div className="container mt-5 p-5" style={props.mode}>
            {/* TEXT AREA */}
            <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">{props.formHeading}</label>
                <textarea className="form-control" style={props.mode} placeholder="Type here..." value={text} id="paragraph" rows="3" onChange={textFormHandler}></textarea>
                <br />
                <div style={{display:"flex", justifyContent:"space-between"}}>
                    {/* OPERATIONS */}
                    <div>
                        <button className="btn btn-secondary btn-sm" onClick={copyHandler} style={operatonButtonStyle}>Copy</button>
                        <button className="btn btn-primary btn-sm" onClick={uppercaseHandler} style={operatonButtonStyle}>UPPER</button>
                        <button className="btn btn-primary btn-sm" onClick={lowwercaseHandler} style={operatonButtonStyle}>lower</button>
                        <button className="btn btn-warning btn-sm" onClick={extraSpacesRemoveHandler} style={operatonButtonStyle}>Remove Extra Spaces</button>
                        <button className="btn btn-danger btn-sm" onClick={clearTextHandler} style={operatonButtonStyle}>Clear</button>
                    </div>

                    {/* TEXT DETAILS */}
                    <div className="details">
                        <span><i>Characters</i> : <b>{text.length}</b>, </span>
                        <span><i>Words</i> : <b>{text.split(" ").length-1}</b></span>
                    </div>
                </div>
                
            </div>

            
            
            <br />
            <br />

            {/* PREVIEW */}
            <div style={{border:"1px solid lightgrey", padding:'20px'}}>
                <h2>Preview</h2>
                <hr />
                <p>
                    {text}
                </p>
            </div>
        </div>
    )
}
