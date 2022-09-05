//import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import React, {useState} from "react";

export default function Form(props) {
  const textBoxChanged=(event)=>{
    //console.log("text box changed");
    setText(event.target.value)
  }
  
  const removeExtraSpaces=()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces","success");
  }
  const upperButtonClicked=()=>{
    //console.log("upper button clicked")
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }
  const lowerButtonClicked=()=>{
    //console.log("lower button clicked")
    let newText= text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }
  const clearText=()=>{
    setText("");
  }
  const copyToCb=()=>{
    navigator.clipboard.writeText(text);
    props.showAlert("Copied text to clipboard","success");
  };

  const [text,setText] = useState("");

  let numWords=text.split(/\s+/).filter((element)=>{return element.length!==0}).length;
  return (
    <>
    <div className="container" >
         <h2>{props.heading}</h2> {/*my-number is bootstrap class which gives margin from upside in Y dirn */} 
      <div className="mb-3">
        <textarea className="form-control"rows="5" id="myBox" value={text} style={{backgroundColor:props.mode==='light'?"white":"lightsteelblue",color:props.mode==='light'?"black":"white"}} onChange={textBoxChanged}></textarea>
      </div>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1 my-1`} onClick={upperButtonClicked}>Convert to Uppercase</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1 my-1`} onClick={lowerButtonClicked}>Convert to Lowercase</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1 my-1`} onClick={clearText}>clear text</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1 my-1`} onClick={removeExtraSpaces}>remove extra spaces</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'primary':'dark'} mx-1 my-1`} onClick={copyToCb}>Copy to ClipBoard</button>
    </div>
    <div className="container my-3" >
      <h2>your text information</h2>
      <p>number of words: {numWords} and number of characters: {text.length}</p>
      <p>average time to read: {numWords*0.008} minutes</p>
      <h1>Preview</h1>
      <p>{numWords>0?text.toLowerCase():"Nothing to preview!"}</p>
    </div>
    </>
  );
}
