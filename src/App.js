import React,{useState} from 'react'; 
import './App.css';
import Alerts from './Components/Alerts';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; 


function App() {   
 const [mode, setMode] = useState('light');
 const [alert,setalert]=useState(null); 

 const showalert = (message,type)=>{
  setalert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setalert(null)
  },1500);
 }
 
 const toggleMode= ()=>{
  if(mode=== 'light'){
    setMode('dark');
    document.body.style.backgroundColor= 'grey';
    showalert("Darkmode has been enabled","success");
  }
  else{
    setMode('light');
    document.body.style.backgroundColor= 'white';
    showalert("Lightmode has been enabled","success");
  }
 }
  return (
    <>
    <Router>
    <Navbar title="Vivek's page" about="About us" mode={mode} toggleMode={toggleMode}/> 
    {/*<Navbar />*/}
    <Alerts alert={alert} />
    <div className='container'>
    <Routes>
      <Route exact path='/about' element={<About mode={mode} />}/>
       
      
      <Route path='/' element={<TextForm heading="Text for Analyze" mode={mode} showalert={showalert}/>}/>
       
      

    </Routes>
    </div>
    </Router>
  </>
  );
}

export default App;
