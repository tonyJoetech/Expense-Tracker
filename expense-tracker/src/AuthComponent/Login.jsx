import { useState } from "react"
import { createPortal } from "react-dom";
import SideBar from "./Sidebar"
import { Fragment } from "react";

export default function Login({ setLogin }) {

    const [emailmessage, setemailmessage] = useState(false)

    const [passwordmessage, setpasswordmessage] = useState(false)

    const [showmodel, setShowmodal] = useState(false)

    const [showpassword, setShowpassword] = useState(false)

    const [login, checkLogin] = useState(false)

    function viewpassword() {
        setShowpassword(prev => !prev)
    }

    function modal() {

        return createPortal(
            <div className="w-100 h-13 bg-accent absolute top-12 transition-top ease duration-300 flex items-center justify-center rounded-xl right-110 ">
                <h3 className="text-text text-xl font-medium">Login Sucessful!</h3>
            </div>,

            document.body
        )
    }

 function handlechage() {
        setemailmessage(false)
        setpasswordmessage(false)
    }   


    function handleLogin(e) {
        e.preventDefault();

        const olduser = JSON.parse(localStorage.getItem("user"));
        console.log(olduser);



        const formdata = new FormData(e.currentTarget)

        const form = Object.fromEntries(formdata)

        if (form.email.trim() !== olduser.email) {
            setemailmessage(true);
            return;
        } else {
            setemailmessage(false);
        }

        if (form.password.trim() !== olduser.password) {
            setpasswordmessage(true);
            return;
        } else {
            setpasswordmessage(false);
        }

        if (olduser) {
            setShowmodal(true)

            setTimeout(() => {
                setShowmodal(false)
            }, 5000)
        }

        checkLogin(true)

    }

    
        if(login){
            return <SideBar />
        }

    return (
        <>
            
            <section className="bg-background min-h-screen w-screen flex items-center py-4 px-3">
                <div className="min-h-110 border-2 border-border w-120 rounded-2xl m-auto flex flex-col items-center py-4 px-2 bg-sidebar justify-center sm:px-6">
                    {showmodel && modal()}
                    <h1 className="text-text font-semibold text-3xl">Welcome Back!</h1>
                    <p className="text-muted text-lg">Login to your account to continue</p>

                    <form onSubmit={handleLogin} className="w-full">
                        <div className="flex w-full border-border bg-surface h-13 mt-8 rounded-lg flex items-center justify-center gap-3 px-3 focus-within:border-border focus-within:border-2">
                            <i className="fa-solid fa-envelope text-muted text-2xl "></i>

                            <input type="email" name="email" id="email" onChange={handlechage} className="outline-none text-text w-full h-10" placeholder="Enter a valid email address" />
                        </div>
                        <small className="text-danger mt-2" style={emailmessage ? (
                            { display: "block" }
                        ) : (
                            { display: "none" }
                        )}>{emailmessage && "Please enter a valid email address"}</small>

                        <div className="flex w-full border-border bg-surface h-13 mt-8 rounded-lg flex items-center justify-center gap-3 px-3 focus-within:border-border focus-within:border-2">
                            <i className="fa-solid fa-key text-muted text-2xl "></i>

                            <input type={showpassword ? "text" : "password"} name="password" id="password" className="outline-none text-text w-full h-10" placeholder=" Password" />
                            {showpassword ? <i onClick={viewpassword} className="fa-solid fa-eye text-muted text-xl cursor-pointer"></i> : <i onClick={viewpassword} className="fa-solid fa-eye-slash text-muted text-xl cursor-pointer"></i>}
                        </div>
                        <small className="text-danger mt-2" style={passwordmessage ? (
                            { display: "block" }
                        ) : (
                            { display: "none" }
                        )}>{passwordmessage && "Incorrect Password"}</small>

                        <button className="cursor-pointer w-full h-13 text-text bg-primary mt-8 rounded-xl font-semibold hover:bg-secondary">Login</button>
                    </form>

                    <p className="text-text mt-3"> Don't have an account? <button type="button" onClick={setLogin} className="text-primary hover:underline cursor-pointer" > Sign Up</button> </p>

                </div>
            </section>
        </>
    )
}