import { useState } from 'react'
import './App.css'

function UpperCase() {
 const [input ,setinput]=useState("");
 const [result, setResult] = useState(""); 
 const handleInput=(event)=>{
  setinput(event.target.value);
 };
  //Function to Change  upperCase
 const changeCase = (event)=>{
  setResult(input.toUpperCase());
 };
 //Function to change toLowerCase
 const lowerCase = () => {
  setResult(input.toLowerCase());
};

  return (
    <>
      <div className='container'>
          <div className='text-1'>
            <textarea 
            value={input}
            rows="20"
            cols="20"
            className="text-input"
            placeholder='Type your noote here....'
            onChange={handleInput}
            />
          </div>
          
          <div 
          className='button-group'>
    <button 
    
      onClick={changeCase}
      className='btn'>UpperCase
      </button>
    <button 
      onClick={lowerCase}
      className='btn-2'>LowerCase
    </button>
     </div>

    {/* Result div to display the modified text */}

     <div className="res">
          <h3>Result</h3>
          <p>{result}</p>
        </div>
   </div>
  
    </>
  )
}

export default UpperCase;
