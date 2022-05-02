import { AuthContext } from "../contexts/AuthContext";
import { useContext, useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export const Login = () => {
  const {handleAuth}=useContext(AuthContext);
  const [data,setData]=useState([])
  const [formState, setFormState]=useState({
    username:"",
    password:""
  })
  const navigate=useNavigate()
  useEffect(()=>{
    getData();
},[])
async function getData(){
    const data=await fetch(`http://localhost:8080/users`)
    .then(d=>d.json());
    setData(data)
    
}

  const handleChange=(e)=>{
    if(e.target.name==="username"){
      setFormState({...formState ,username:e.target.value})
    }
    if(e.target.name==="password"){
      setFormState({...formState ,password:e.target.value})
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(formState.username==""){
      alert("sorry")
    }
    else{
      console.log("form is:" , formState)
        data.map((item)=>{
        if(formState.username==item.username && formState.password==item.password){
          
          return true
        }
      })
      navigate("/neworder",{replace:true})
    }
    handleAuth(true)
    // navigate("/",{replace:true})
  }
  return (
    <div>
      
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username"
        onChange={handleChange}
      />
      <input
        className="password"
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter password"
      />
      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={handleSubmit}>Login</button>
    </div>
  );
};
