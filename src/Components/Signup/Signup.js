import React,{useState} from 'react'
import "./Signup.css"

const Signup = () => {
    const[passcode,setPasscode]=useState(0);

    function Check(){
        if (passcode.match(/\d+/g)){
            alert("Successful Login")
        }
        else{
            alert("Invalid Passcode")
        }
        
    }
  return (
    <div className='Main'>

      <p>WELCOME!!!</p>
      <label>Enter Passcode</label>
      <input type='text' onChange={(variable) => setPasscode(variable.target.value)}/>
      <button className='Submit-button' onClick={Check}>Submit</button>

    </div>
  )
}

export default Signup
