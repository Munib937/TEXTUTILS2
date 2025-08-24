

import { useState } from "react";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import Alert from "./component/Alert";
import About from "./component/About";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";




function App() {
 
  const [mode, setmode] = useState('light');

  const [alert , setalert] = useState();

  const showalert = (message , type)=>{
    setalert({
          msg: message,
          type: type
    })

    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

 

  const togglemodes = ()=>{
    if(mode==='light'){
      setmode("dark");
      document.body.style.backgroundColor = '#78809d'
      showalert("Dark mode enable" , "success:");
      document.title = "TextUtils - Dark"  ///  title change jrna ka liya ;
      //title daynamic change krna ka liya;
      // setInterval(() => {
      //    document.title = "TextUtils install now" 
      // }, 1500);

      //             setInterval(() => {
      //    document.title = "TextUtils its good" 
      // }, 2000);
    }
    else{
      setmode("light");
          document.body.style.backgroundColor = 'white'
          showalert("Light mode enable", "success:");
                document.title = "TextUtils - Light"      // title change krna ka liya;
               /// daynamic title change krna ka liya;
              //             setInterval(() => {
              //    document.title = "TextUtils its good" 
              // }, 2000);




    }
  }


  return (                          //multiple compnent bna kr use krsaktay hain.
    <>
    <Router>
   <Navbar title="Textutils" about="About" mode={mode} togglemodes={togglemodes}/>
   <Alert alert={alert}/>
    
        <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact
          path="/"
          element={<TextForm showalert={showalert} heading="Enter your text to Analysis" mode={mode} />}
        />
      </Routes>

  </Router>
    </>
  );
}

export default App;
