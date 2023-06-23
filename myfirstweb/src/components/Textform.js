import React, {useState} from 'react'

export default function Textform(props) {
  const handleUpClick=()=>{
   // console.log("Uppercase was clicked");
      let newText = text.toUpperCase();
      setText(newText);
  }
  const handleLoClick=()=>{
   // console.log("Uppercase was clicked");
      let newText = text.toLowerCase();
      setText(newText);
  }
  const clearText=()=>{
     let newText = "";
     setText(newText);
  }
  const handleOnChange=(event)=>{
    setText(event.target.value);
    //console.log("HandleOnChange was clicked");
}
    const [text,setText] = useState("Enter text here");
  return (
  <>
      <div className="conatainer" style={{color:props.mode==='dark'?'white':'#0b0768'}}>
        <div className="mb-03">
        <h4>{props.Heading}</h4>
        <textarea className="form-control" value = {text} onChange={handleOnChange} style={{backgroundcolor:props.mode==='dark'?'grey':'white'}} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert To Uppercase</button>
        <button className="btn btn-success mx-3" onClick={handleLoClick}>Convert To Lowercase</button>
        <button className="btn btn-danger" onClick={clearText}>Clear Text</button>
        </div>
        <div className="container" style={{color:props.mode==='dark'?'white':'#0b0768'}}>
          <h1>Your Text Summery</h1>
          <p>{text.split(" ").length} Words {text.length} Character</p>
          <p>{0.008* text.split(" ").length} Minutes To Read</p>
          <h1>Preview</h1>
          <p>{(text.length >0 ?text:"Enter Text To Preview")}</p>
        </div>
   </>

  )
}
