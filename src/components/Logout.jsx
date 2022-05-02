// export const Logout = () => {
//   // Logout component, just log user out and take him to `/` homepage

//   // suggestion: if you are storing anyting in redux it's a good idea to
//   // empty it before loggin out. eg: order

//   return <></>;
// };

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
export const Logout=()=>{
    const {handleAuth}=useContext(AuthContext);
    const navigate=useNavigate();
    return (
        <button onClick={()=>{
            handleAuth(false)
            navigate("/",{replace:true})
        }}>Logout</button>
    )
}