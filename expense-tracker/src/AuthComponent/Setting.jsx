export default function Setting() {

    return (
        <section className="w-[79%] border-border border-2 lg:rounded-r-xl px-2 pb-4 max-[1000px]:w-[100%] max-[1000px]:rounded-xl pr-3">
            <header className="h-22 w-full border-border border-b-2 flex px-3 justify-between items-center gap-3">
                <div className="max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center h-10 w-10 rounded-lg bg-sidebar hidden max-[1000px]:block">
                    <i className="fa-solid fa-list text-text text-2xl"></i>
                </div>
                <div className="h-20 flex flex-col items-start justify-center  w-[70%] ">

                    <h1 className="text-text font-semibold text-2xl">Setting</h1>
                    <p className="text-muted text-sm mt-2">Manage your account prefernce</p>

                </div>

            </header>

            <div className="w-full mt-2 min-h-50 px-3 bg-sidebar rounded-2xl py-3">
                <div className="w-[70%] h-15 flex flex-col justify-center px-3">
                    <h5 className="text-text font-medium text-xl"> Prefernces</h5>
                </div>


                <div className="flex w-full h-15 gap-6 items-center mt-3 hover:bg-surface px-3 rounded-xl ">

                    <div className="w-[70%] h-15 flex flex-col justify-center">
                        <h5 className="text-text font-medium text-lg"> Currency</h5>
                    </div>
                    <div className="flex w-[20%] h-15 items-center px-2 justify-between">
                        <button className="border-2 p-2 w-70 rounded-xl border-border text-muted font-semibold cursor-pointer "> Nigeria Naira (₦) <i className="fa-solid fa-chevron-down "></i></button>
                    </div>

                </div>

                <div className="flex w-full h-15 gap-6 items-center mt-3 hover:bg-surface px-3 rounded-xl">

                    <div className="w-[70%] h-15 flex flex-col justify-center">
                        <h5 className="text-text font-medium text-xl">Theme</h5>
                    </div>
                    <div className="flex w-[25%] h-15 items-center justify-between">
                        <div className="w-full flex justify-between">
                            <button className="w-25 h-8 border-1 border-border rounded-md cursor-pointer text-muted"><i className="fa-solid fa-sun text-muted"></i>  light</button>
                            <button className="w-25 h-8 border-1 border-border rounded-md cursor-pointer text-muted bg-primary"><i className="fa-solid fa-moon text-muted"></i>  Dark</button></div>
                    </div>

                </div>

                <div className="flex w-full h-15 gap-6 items-center hover:bg-surface mt- px-3 rounded-xl">

                    <div className="w-[70%] h-15 flex flex-col justify-center">
                        <h5 className="text-text font-medium text-lg"> Notification</h5>
                    </div>
                    <div className="flex w-[20%] h-15 items-center px-2 justify-between">
                        <h3 className="text-accent font-semibold text-lg">
                            <button className="w-12 h-6 rounded-full p-1 flex items-center transition  bg-gray-500 justify-start cursor-pointer" >
                                <span className="w-4 h-4 bg-white rounded-full"></span>
                            </button>
                        </h3>
                    </div>

                </div>
            </div>

            <div className="w-full mt-2 min-h-30 px-3 bg-sidebar rounded-2xl py-3">
                <div className="w-[70%] h-15 flex flex-col justify-center px-3">
                    <h5 className="text-text font-medium text-xl"> Account</h5>
                </div>


                <div className="flex w-full h-15 gap-6 items-center hover:bg-surface mt-3 px-3 rounded-xl cursor-pointer">

                    <div className="w-[70%] h-15 flex items-center gap-3">
                        <i className="fa-solid fa-lock text-lg text-muted"></i>
                        <h5 className="text-text font-medium text-lg"> Change Password</h5>
                    </div>
                    <div className="flex w-[25%] h-15 items-center justify-end">
                        <button><i className="fa-solid fa-chevron-right text-muted"></i></button>
                    </div>
                </div>

                <div className="flex w-full h-15 gap-6 items-center mt-3 hover:bg-surface  px-3 rounded-xl cursor-pointer">

                    <div className="w-[70%] h-15 flex gap items-center gap-5">
                        <i className="fa-solid fa-trash text-lg text-danger"></i>
                        <h5 className="text-danger font-medium text-xl">Logout</h5>
                    </div>
                    <div className="flex w-[25%] h-15 items-center justify-end">
                        <button><i className="fa-solid fa-chevron-right text-muted"></i></button>
                    </div>

                </div>


            </div>
        </section>
    )
}