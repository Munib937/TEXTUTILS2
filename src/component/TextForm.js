import React ,{ useState } from 'react'


export default function TextForm(props) {
  const [text, settext] = useState('');

    const handleup = ()=>{
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("convert to uppercase" , "success:");
  }


   const handlelo= ()=>{
    let newtext = text.toLowerCase();
    settext(newtext);
        props.showalert("convert to Lowercase" , "success:");

  }

    const handleclear= ()=>{
    let newtext = '';
    settext(newtext);
        props.showalert("clear Text" , "success:");

  }

  const  copyText =()=> {
  let text = document.getElementById("box");
  text.select();
  navigator.clipboard.writeText(text.value);
      props.showalert("copyText" , "success:");

 
}

  const  removespace =()=> {
    let newtxt = text.split(/[  ]+/);     //javascript ragax method use howa hain;
   settext(newtxt.join(' '));
       props.showalert("Remove Space" , "success:");

 
}






  
  const handlechange = (event)=>{       //ya humay textarea ma text liknay ka liya usew hita hain.
    console.log("onchange");
    settext(event.target.value);
  }






  return (
    <>
      <div className='container'  style={{color: props.mode ==='dark' ? 'white': 'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handlechange} id="box" rows="10" style={{backgroundColor: props.mode ==='dark' ? '#3c466cff': 'white' , color:props.mode ==='dark' ? 'white': 'black'}} ></textarea>
        </div>

        <button className="btn btn-primary" onClick={handleup} > Convert to Uppercase</button>
        <button className="btn btn-primary mx-2 " onClick={handlelo} > Convert to Lowercase</button>
        <button className="btn btn-primary" onClick={handleclear} > ClearText</button>
        <button className="btn btn-primary mx-2 " onClick={copyText} > CopyText</button>
        <button className="btn btn-primary" onClick={removespace} >Remove Space</button>
 
        </div>

        <div className="container" style={{color: props.mode ==='dark' ? 'white': 'black'}}>
        <h2>Your text Summary</h2>
        <p>{text.split(' ').length} word and {text.length} character</p>
        <p>{ 0.008 * text.split(' ').filter((element)=>{return element.length !== 0}).length} Mintues</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text :  'Enter some text and previeew'}</p>


        </div>

  
    
 </>
  )
}
