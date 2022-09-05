import "./App.css";
import Navbar from "./components/Navbar";
import Form from './components/Form';
import React, { useState } from 'react'
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [mode,setMode]=useState('light');
  const [alert,setAlert]=useState(null);
  const showAlert=(text,type)=>{
    setAlert({message:text,alertType:type});
    setTimeout(()=>{
      setAlert(null);
    },1500);
  };
  // const removeColorClass= ()=>{
  //     document.body.classList.remove('bg-primary');
  //     document.body.classList.remove('bg-danger');
  //     document.body.classList.remove('bg-light');
  //     document.body.classList.remove('bg-dark');
  //     document.body.classList.remove('bg-success');
  //     document.body.classList.remove('bg-warning');
  // }
  const toggleMode=(colorClass)=>{
    // removeColorClass();
    // document.body.classList.add('bg-'+colorClass);
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='grey ';
      showAlert("Dark mode enabled","success");
      // document.title = "Text Utils - Dark mode";
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode enabled","success");
      // document.title = "Text Utils - Light mode";
    }
  }
  return (
    <>
      {/* <Navbar/> */}
      <BrowserRouter>
          <Navbar title="Text Utils" colour="light" mode={mode} toggleTheme={toggleMode} aboutText="about us"/>
          {/* <Navbar aboutText="Random text"/> */}
          <Alert params={alert}/>
          <div className="container my-3" style={{color:mode==='light'?"black":"white"}} > {/* container is bootstrap class which gives a container 
          type look to inside components,fragments,divs. my-3 gives upper margin by 3 */}
          <Routes>
            <Route exact path="/" element={<Form mode={mode} showAlert={showAlert} heading="Text Utility - convert to uppercase/lowercase | remove extra spaces"/>} />
            <Route exact path="/about" element={<About mode={mode}/>} />
            {/* we use exact because when exact is used react do exact path matching otherwise it will do partial matching
            suppose we have /kerala/banana and /kerala so when we try to open kerala/banana then /kerala page might open. */}
          </Routes>
            
            
          </div>
        </BrowserRouter>
    </>
  );
}

export default App; // exports the function or value as default when we import
// in another js file with any name from this js file.
