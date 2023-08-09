import React,{useState} from 'react';
 
export default function TextForm(props) {
  
   const handleUpClick=()=>{
       let uppertext= text;
       setText(uppertext.toUpperCase());
       props.showalert("Converted to upper case","success");
   }

   const copyText = ()=>{
     var text1= document.getElementById("myBox");
     text1.select();
     navigator.clipboard.writeText(text1.value);
     document.getSelection().removeAllRanges();
     props.showalert("Text is successfully copied","success");
   }

   const handleOnChange=(event)=>{
       setText(event.target.value);
   }

   const handleLowClick= ()=>{
     let lowtext = text;
     setText(lowtext.toLowerCase());
     props.showalert("Text is converted to lowercase","success");
   }

   const clearText1= ()=>{
     setText("");
     props.showalert("Textarea is cleared successfully","success");
   }

   const [text,setText]=useState('');
  
   return (
   <>
    <div className='container my-2' style={{color: props.mode ==='dark'?'white':'black'}}>
       <h1>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}}></textarea>
       </div>
       <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to uppercase</button>
       <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={handleLowClick}>Convert to lower</button>
       <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={clearText1}>Clear text</button>
       <button disabled={text.length===0} className='btn btn-primary mx-1' onClick={copyText}>Copy text</button>
    </div>
   <div className='container my-3' style={{color: props.mode ==='dark'?'white':'black'}}>
     <h1>Your text summary</h1>
     <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
     <h2>Preview</h2>
     <p>{text.length>0 ? text:'Nothing to preview'}</p>
   </div>
   </>

  );
}
