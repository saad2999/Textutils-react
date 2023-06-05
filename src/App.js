import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





function App() {
  const [Mode,Setmode] = useState("light")
  const [alert,setAlert]=useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      type:type,
      message:message
    })
    setTimeout(()=>{
      setAlert(null)
    },1500)
  }
  const toggleMode=()=>{
    if(Mode==="light"){
      Setmode("dark");
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark Mode is enabled.", "success");
    }
    else{
      Setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light Mode is enabled.", "success");
    }
    
  }
  return (
<>



<div >
<Navbar title="TextUtlis" aboutText="About" Mode={Mode} toggleMode={toggleMode} />
<Textform heading=" Try TextUtils - Word Counter, Character Counter, Remove extra spaces"Mode={Mode} showAlert={showAlert}/>
    {/* <Router>
  <Navbar title="TextUtlis" aboutText="About" Mode={Mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
 
      
        <Routes>   
          <Route  exect path="/about" element={<About Mode={Mode} />} />
          <Route exect path="/" element={ <Textform heading=" Try TextUtils - Word Counter, Character Counter, Remove extra spaces"Mode={Mode} showAlert={showAlert}/>} />
        </Routes>
      
   </Router> */}



    {/* <About/> */}
    
</div>


</>
   
  );
}

export default App;
