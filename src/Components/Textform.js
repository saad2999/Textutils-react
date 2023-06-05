import React, {useState} from 'react'

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick=()=>{
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showAlert("Coverted to upper case","success");
  }
  const handlelowClick=()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Coverted to lower case","success");
  }
  const handleClear=()=>{
   
    setText("");
    props.showAlert("texted cleared","success");
  }
  const handleExtraSpaces=()=>{
   let newtext=text.split(/[ ]+/).join(" ");
   
 
  
   setText(newtext);
   props.showAlert("extra spaces removed","success");
    
  }
  const handleCopy=()=>{
   
   navigator.clipboard.writeText(text);
   props.showAlert("your text is copyied to  clipboard","success");
    
  }
  const handleOnChange=(event)=>{
    setText(event.target.value)
  }
  return (
    <>
    <div className='container' style={{color:props.Mode==='dark'?'white':'black' }} >
         <h2 className='mb-2'> {props.heading}</h2>
        <div className="mb-3">
        
        <textarea  className={`form-control text-${props.Mode==='light'?'dark':'light'}`} value={text} style={{backgroundColor:props.Mode==='dark'?'#13466e':'white' }} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0}  className='btn btn-primary mx-1 my-1'onClick={handleUpClick}>Convert to Uppercase</button>
        <button disabled={text.length===0}className='btn btn-primary mx-1 my-1'onClick={handlelowClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1'onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-1 my-1'onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0}className='btn btn-primary mx-1 my-1'onClick={handleExtraSpaces}>Copy remove extra spaces</button>
    </div>
    <div className="container my-3"  style={{color:props.Mode==='dark'?'white':'black' }}>
      <h1>your Text Summary </h1>
      <p>
        {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Words and {text.length} characters in your Text</p>
        <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:" nothingto preview!"}</p>

    </div>
    </>
  )
}
