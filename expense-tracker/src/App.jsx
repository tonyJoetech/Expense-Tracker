import Signup from "./AuthComponent/SignUp";
import Login from "./AuthComponent/Login";
import { Fragment } from "react";
import { useState } from "react";

export default function App() {

  const [currentpage, setCurrentpage] = useState("login");


  function handleLogin() {
    setCurrentpage("signUp")
  }
  function handleSignup() {
    setCurrentpage("login")
  }


  return (
    <>
     {currentpage === "login"?
     <Login setLogin={handleLogin}/>:

     <Signup setSignUp={handleSignup}/>

     }

    </>
  )
}


