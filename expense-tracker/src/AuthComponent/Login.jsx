export default function Login({ setLogin }) {


    return (
        <section className="bg-background min-h-screen w-screen flex items-center py-4">
            <div className="min-h-110 border-2 border-border w-120 rounded-2xl m-auto flex flex-col items-center py-4 px-6 bg-sidebar justify-center">
                <h1 className="text-text font-semibold text-3xl">Welcome Back!</h1>
                <p className="text-muted text-lg">Login to your account to continue</p>

                <form action="" className="w-full">
                    <div className="flex w-full border-border bg-surface h-13 mt-8 rounded-lg flex items-center justify-center gap-3 px-3 focus-within:border-border focus-within:border-2">
                        <i className="fa-solid fa-envelope text-muted text-2xl "></i>

                        <input type="text" name="email" id="email" className="outline-none text-text w-full h-10" placeholder="Enter a valid email address" />
                    </div>

                    <div className="flex w-full border-border bg-surface h-13 mt-8 rounded-lg flex items-center justify-center gap-3 px-3 focus-within:border-border focus-within:border-2">
                        <i className="fa-solid fa-key text-muted text-2xl "></i>

                        <input type="text" name="password" id="password" className="outline-none text-text w-full h-10" placeholder=" Password" />
                        <i className="fa-solid fa-eye-slash text-muted text-xl cursor-pointer"></i>
                    </div>

                    <button onClick={setLogin} className="cursor-pointer w-full h-13 text-text bg-primary mt-8 rounded-xl font-semibold hover:bg-secondary">Sign Up</button>
                </form>

                <p className="text-text mt-3"> Already have an account? <button type="button" onClick={setLogin} className="text-primary hover:underline cursor-pointer" > Sign Up</button> </p>

            </div>
        </section>
    )
}