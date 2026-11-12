import { useState } from "react"
import { createPortal } from "react-dom";
export default function Signup({ setSignUp }) {

    const [namemessage, setnamemessage] = useState(false)

    const [emailmessage, setemailmessage] = useState(false)

    const [passwordmessage, setpasswordmessage] = useState(false)

    const [confirmpasswordmessage, setconfirmpasswordmessage] = useState(false)

    const [showmodel, setShowmodal] = useState(false)

    const [showpassword, setShowpassword] = useState(false)

    function handlechage() {
        setnamemessage(false)
        setemailmessage(false)
        setconfirmpasswordmessage(false)
        setpasswordmessage(false)
    }   

    function modal(){

        return createPortal(
            <div className="w-100 h-13 bg-accent absolute top-6 transition-top ease duration-300 flex items-center justify-center rounded-xl right-110">
                <h3 className="text-text text-xl font-medium">User Already Exist!</h3>
            </div>,

            document.body
        )
    }

    function viewpassword(){
        setShowpassword(prev => !prev)
    }

    function handleSubmit(e) {
        e.preventDefault();

        const olduser = JSON.parse(localStorage.getItem("user"));
      
        
      
        const formdata = new FormData(e.currentTarget);

        const form = Object.fromEntries(formdata)

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

        const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (form.fullname.trim() === "" || form.fullname.length <= 3) {
            setnamemessage(true);
            return;
        } else {
            setnamemessage(false);
        }

        if (form.email.trim() === "" || !emailPattern.test(form.email)) {
            setemailmessage(true);
            return;
        } else {
            setemailmessage(false);
        }

        if (form.password.trim() === "" || !strongPassword.test(form.password)) {
            setpasswordmessage(true);
            return;
        } else {
            setpasswordmessage(false);
        }

        if (form.confirmpassword.trim() === "") {
            setconfirmpasswordmessage(true);
            return;
        } else if (form.confirmpassword !== form.password) {
            setconfirmpasswordmessage(true);
            return;
        } else {
            setconfirmpasswordmessage(false);
        }

          if(olduser.email.trim()){
            setShowmodal(true)

            setTimeout(()=>{
                setShowmodal(false)
            }, 5000)
            return;
        }

        const userDetails = {
            fullname: form.fullname,
            email: form.email,
            password: form.password
        }

    

        const rec = JSON.stringify(userDetails)

            const user = localStorage.setItem( "user", rec);
        console.log(user);
        

            setSignUp()


    }

    return (
        <section className="bg-background min-h-screen w-screen flex items-center py-4 px-3">
            <div className="min-h-140 border-2 border-border w-120 rounded-2xl m-auto flex flex-col items-center py-4 px-6 bg-sidebar relative justify-center">
                {showmodel && modal()}
                <h1 className="text-text font-semibold text-3xl">Create Account</h1>
                <p className="text-muted text-lg">Sign Up to get started</p>

                <form onSubmit={handleSubmit} className="w-full">

                    <div className="flex w-full border-transparent bg-surface h-13 mt-8 rounded-lg flex items-center justify-center gap-3 px-3 focus-within:border-border focus-within:border-2">
                        <i className="fa-solid fa-user text-muted text-2xl "></i>

                        <input type="text" name="fullname" id="fullname" onChange={handlechage} className="focus:outline-none text-text w-full  h-10 f" placeholder="Full Name" />
                    </div>
                    <small className="text-danger mt-2" style={namemessage ? (
                        { display: "block" }
                    ) : (
                        { display: "none" }
                    )}>{namemessage && "Full Name must be more than three characters"}</small>

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

                        <input type={showpassword ? "text" :"password"} name="password" id="password" onChange={handlechage} className="outline-none text-text w-full h-10" placeholder=" Password e.g Joetech@22" />
                       {showpassword? <i onClick={viewpassword} className="fa-solid fa-eye text-muted text-xl cursor-pointer"></i> :<i onClick={viewpassword} className="fa-solid fa-eye-slash text-muted text-xl cursor-pointer"></i>}
                    </div>
                    <small className="text-danger mt-2" style={passwordmessage ? (
                        { display: "block" }
                    ) : (
                        { display: "none" }
                    )}>{passwordmessage && "Password must contain uppercase, lowercase, numbers and special characters"}</small>

                    <div className="flex w-full border-border bg-surface h-13 mt-8 rounded-lg flex items-center justify-center gap-3 px-3 focus-within:border-border focus-within:border-2">
                        <i className="fa-solid fa-key text-muted text-2xl "></i>

                        <input type={showpassword ? "text" :"password"} name="confirmpassword" id="confirmpassword" onChange={handlechage} className="outline-none text-text w-full h-10" placeholder="Confirm Password" />
                       
                    </div>
                    <small className="text-danger mt-2" style={confirmpasswordmessage ? (
                        { display: "block" }
                    ) : (
                        { display: "none" }
                    )}>{confirmpasswordmessage && "Password mismatch"}</small>

                    <button className="cursor-pointer w-full h-13 text-text bg-primary mt-8 rounded-xl font-semibold hover:bg-secondary">Sign Up</button>

                </form>

                <p className="text-text mt-3"> Already have an account? <button type="button" onClick={setSignUp} className="text-primary hover:underline cursor-pointer" > Login </button>
                </p>
            </div>
        </section>
    )
}