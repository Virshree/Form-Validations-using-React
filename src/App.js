
import { useState } from 'react';
import './App.css';
import {validEmail,validPassword} from './Valid';
function App() {
  const [username,setusername]=useState("");
  const [age,setage]=useState("");
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [confirmpass,setconfirmpass]=useState("");
  function handleSubmit(){
    alert(`Name is ${username} ,age is ${age} & email is ${email}`)
   
  }

  return (
    <div className="App">
       <div className='form-container'>
      <h1>SignUp</h1>
     
      <form className='form'>
       
      <label for="name" >Name:</label> <input type="text" 
       value={username}
       onChange={(e)=>setusername(e.target.value)}  />


       <label for="age">Age:</label><input type="number"  
       value={age}
       onChange={(e)=>setage(e.target.value)}
       />


       <label for="email">Email:</label>
        <input type="email"  
        value={email} required
        onChange={(e)=>setemail(e.target.value)}
        />
        {(email!=="") && (validEmail.test(email)? <p style={{color:"green"}}>Valid Email</p>: <p style={{color:"red"}}>Invalid Email </p>)}

        <label for="password">Password:</label>
       <input type="password" 
        value={password}
        onChange={(e)=>setpassword(e.target.value)}

        />
        {(password!=="") && (validPassword.test(password) ? <p style={{color:"green"}}>Password Accepted</p>:<p style={{color:"red"}}>Password must contain One Uppercase,Lowercase,number and atleast one special characters </p>)}

        <label for="confirmpass">Confirm Password:</label>
       <input type="password"
       value={confirmpass}
        onChange={(e)=>setconfirmpass(e.target.value)}
       
       />
       
       {(password!=="")&& (password===confirmpass ? <p style={{color:"green",fontSize:"18px"}}>Password Match</p> :<p style={{color:"red",fontSize:"18px"}}>Password does not Match</p>)}
       
        <button  className="btn-submit"onClick={handleSubmit}>Submit</button>
      
      </form>
      </div>
      
    </div>
  );
}

export default App;
