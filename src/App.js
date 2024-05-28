import './App.css';
import {  useRef, useState } from 'react';
import TableComponent from './TableComponent';

function App() {
  const [check,setcheck] = useState('False');
  const name=useRef();
  // const [val,setval]=useState();
   const age=useRef();
   const dob=useRef();
   const city=useRef();
 
  function handleSubmit(e){
      e.preventDefault();  
      setcheck('True');
    }
  return (<>
  <div className='App'>
    <h1>FORM - USING REF</h1>
    <input  onChange={(e)=>name.current=e.target.value} name='Name' placeholder='Enter name' type='text'/>
    <input  onChange={(e)=>age.current=e.target.value} name='Age' placeholder='Enter age' type='number'/>
    <input  onChange={(e)=>dob.current=e.target.value} name='Date' placeholder='Enter DOB' type='date'/>
    <input  onChange={(e)=>city.current=e.target.value} name='City' placeholder='Enter city' type='select'/><br></br>
    <button onClick={handleSubmit}>Submit</button>
    
  </div>
  <div className='Table'>
  <h2>Table</h2>
  {check==='True'?<TableComponent name={name.current} age={age.current} dob={dob.current} city={city.current} />:<h1>Nothing to render</h1>} 
  </div>
  </>
  );
}

export default App;
