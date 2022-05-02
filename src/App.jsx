import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Logout } from "./components/Logout";
import { NewOrder } from "./components/NewOrder";
import { Orders } from "./components/Orders";
import {Routes , Route} from "react-router-dom"
import { Link } from "react-router-dom";
import { ProtectedRoute } from "./components/ProtextedRoute";
import "./App.css"
import { useContext } from "react";
import {AuthContext} from "./contexts/AuthContext"
function App() {
  const isAuth=useContext({AuthContext})
  return (
    <div className="App">
      <div className="nav">
        <Link className="nav-home"to ={<Home/>}>
          Home
        </Link>
        {/* Show either login or logout below */}
        {/* <Link className="nav-logout" to="/logout">
          Logout
        </Link>
        <Link className="nav-login" to="/login">
          Login
        </Link> */}
        <Link to={isAuth?"/logout":"/login"}>{isAuth?"LogOut":"LogIn"}</Link>
      </div>

      <Routes>
        {/* Routes are as follows:
        Route      Component
        /           Home
        /login      Login
        /logout     Logout
        /orders     Orders    Protected
        /neworder   NewOrder  Protected
      */}
          <Route path="/" element={<Home/>}></Route>  
          <Route path="/login" element={<Login/>}></Route> 
          <Route path="/logout" element={<Logout/>}></Route> 
          <Route path="/neworder" element={<NewOrder/>}></Route> 
      </Routes>
    </div>
  );
}

export default App;
