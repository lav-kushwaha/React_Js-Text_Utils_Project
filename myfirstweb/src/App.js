import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import Alert from './components/Alert';
import { useState } from 'react';
import About from './components/About';

function App() {
  const[alert,setAlert] = useState(null);

const showAlert=(message,type)=>{
  setAlert({msg : message,
            type: type})
}
    

  const [mode,setMode] = useState("dark");
  const toggleMode=()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#0b0768"
      showAlert("Dark Mode Is Enable","succes");
     
    }
    else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light Mode Is Enable","succes");
    }
    }
  return (
    <>
    
   {/* <Navbar tittle="Lav" about="About us"/> */}
   <Navbar tittle="TextUtils Lav App" mode={mode} toggleMode = {toggleMode}/>
   {/* <Alert alert={alert}/> */}
   <div className="container my-5" >
   <Textform Heading ="Enter the text to analyze below" mode={mode}/>
   {<About/>}
   </div>
  
   </>
  );
}

export default App;
