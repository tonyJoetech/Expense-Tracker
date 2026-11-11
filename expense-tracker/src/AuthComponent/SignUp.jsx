import { useState } from "react"
export default function Signup({ setSignUp }) {

    const [namemessage, setnamemessage] = useState(false)

    const [emailmessage, setemailmessage] = useState(false)

    const [passwordmessage, setpasswordmessage] = useState(false)

    const [confirmpasswordmessage, setconfirmpasswordmessage] = useState(false)


    function handleSubmit(formdata) {
        const form = Object.fromEntries(formdata)

        // if (form.fullname.trim() === "" || form.email.trim() === "" || form.password.trim() === "" || form.confrimpassword.trim() === "") {

        //     setnamemessage(true)
        //     setemailmessage(true)
        //     setconfirmpasswordmessage(true)
        //     setpasswordmessage(true)
        //     setTimeout(() => {
        //         setnamemessage(false)
        //         setemailmessage(false)
        //         setconfirmpasswordmessage(false)
        //         setpasswordmessage(false)
        //     }, 5000)

        //     return;
        // }

       if (form.fullname.trim() === "") {

            setnamemessage(true)

            setTimeout(() => {
                setnamemessage(false)
            }, 5000)
            return;
        }

        else if (form.email.trim() === "") {
            setemailmessage(true)

            setTimeout(() => {
                setemailmessage(false)
            }, 5000)
            return;
        }

        else if (form.password.trim() === "") {
            setpasswordmessage(true)

            setTimeout(() => {
                setpasswordmessage(false)
            }, 5000)
            return;
        }
        else if (form.confrimpassword.trim() === "") {
            setconfirmpasswordmessage(true)

            setTimeout(() => {
                setconfirmpasswordmessage(false)
            }, 5000)
            return;
        }
        else {
            setSignUp()
        }

    }

    return (
        <section className="bg-background min-h-screen w-screen flex items-center py-4">
            <div className="min-h-140 border-2 border-border w-120 rounded-2xl m-auto flex flex-col items-center py-4 px-6 bg-sidebar">
                <h1 className="text-text font-semibold text-3xl">Create Account</h1>
                <p className="text-muted text-lg">Sign Up to get started</p>

                <form action={handleSubmit} className="w-full">

                    <div className="flex w-full border-transparent bg-surface h-13 mt-8 rounded-lg flex items-center justify-center gap-3 px-3 focus-within:border-border focus-within:border-2">
                        <i className="fa-solid fa-user text-muted text-2xl "></i>

                        <input type="text" name="fullname" id="fullname" className="focus:outline-none text-text w-full  h-10 f" placeholder="Full Name" />
                    </div>
                    <small className="text-danger mt-2" style={namemessage ? (
                        { display: "block" }
                    ) : (
                        { display: "none" }
                    )}>{namemessage && "Please fill out your full name"}</small>

                    <div className="flex w-full border-border bg-surface h-13 mt-8 rounded-lg flex items-center justify-center gap-3 px-3 focus-within:border-border focus-within:border-2">
                        <i className="fa-solid fa-envelope text-muted text-2xl "></i>

                        <input type="text" name="email" id="email" className="outline-none text-text w-full h-10" placeholder="Enter a valid email address" />
                    </div>
                    <small className="text-danger mt-2" style={emailmessage ? (
                        { display: "block" }
                    ) : (
                        { display: "none" }
                    )}>{emailmessage && "Please enter a valid email address"}</small>

                    <div className="flex w-full border-border bg-surface h-13 mt-8 rounded-lg flex items-center justify-center gap-3 px-3 focus-within:border-border focus-within:border-2">
                        <i className="fa-solid fa-key text-muted text-2xl "></i>

                        <input type="text" name="password" id="password" className="outline-none text-text w-full h-10" placeholder=" Password" />
                        <i className="fa-solid fa-eye-slash text-muted text-xl cursor-pointer"></i>
                    </div>
                    <small className="text-danger mt-2" style={passwordmessage ? (
                        { display: "block" }
                    ) : (
                        { display: "none" }
                    )}>{passwordmessage && "Please enter a strong password"}</small>

                    <div className="flex w-full border-border bg-surface h-13 mt-8 rounded-lg flex items-center justify-center gap-3 px-3 focus-within:border-border focus-within:border-2">
                        <i className="fa-solid fa-key text-muted text-2xl "></i>

                        <input type="text" name="confirmpassword" id="confirmpassword" className="outline-none text-text w-full h-10" placeholder="Confirm Password" />
                        <i className="fa-solid fa-eye-slash text-muted text-xl cursor-pointer"></i>
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