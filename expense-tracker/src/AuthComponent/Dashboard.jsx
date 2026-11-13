import { useState } from "react"
export default function DashBoard() {

    const user = JSON.parse(localStorage.getItem("user"))

    const [sidebar, setSidebar] = useState(false)

    function showsidebar(){
        setSidebar(true)
    }
    const username = user.fullname.split(" ")[0]

    return (
    

            <div className="w-[80%] border-border border-2 lg:rounded-r-xl px-2 pb-4 max-[1000px]:w-[100%] max-[1000px]:rounded-xl">
                <header className="h-22 w-full border-border border-b-2 flex px-3 justify-between items-center gap-3">
                    <div className="max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center h-10 w-10 rounded-lg bg-sidebar hidden max-[1000px]:block">
                        <i className="fa-solid fa-list text-text text-2xl"></i>
                    </div>
                    <div className="h-20 flex flex-col items-start justify-center  w-[70%] ">

                        <h1 className="text-text font-semibold text-2xl">Welcome Back {username}!</h1>
                        <p className="text-muted text-sm mt-2">Track your expense and reach your goals.</p>

                    </div>
                    <div className="flex h-20 w-2/7 items-center">
                        <button className="text-muted w-2/4 border-2 border-border h-13 rounded-xl bg-sidebar cursor-pointer">This Month <i className="fa-solid fa-chevron-down"></i></button>
                    </div>
                </header>

                <div className="flex w-full h-fit py-3 justify-around flex-wrap mt-5">
                    <div className="w-[32%] relative bg-blue-900 h-35 rounded-xl p-3 ">
                        <h4 className="text-muted font-semibold text-lg">Total Balance</h4>
                        <h2 className="text-text text-2xl font-bold mt-3">₦ 250,000</h2>
                        <p className="mt-3 text-accent font-medium"><i className="fa-solid fa-arrow-up rotate-40 text-accent "></i>  +12%</p>
                        <div className="absolute h-15 w-15 bg-secondary right-6 top-8 rounded-xl flex items-center justify-center">
                            <i className="fas fa-wallet text-primary text-4xl"></i>
                        </div>
                    </div>

                    <div className="w-[32%] relative bg-green-900 h-35 rounded-xl p-3">
                        <h4 className="text-green-300 font-semibold text-lg">Total Balance</h4>
                        <h2 className="text-text text-2xl font-bold mt-3">₦ 250,000</h2>
                        <p className="mt-3 text-accent font-medium"><i className="fa-solid fa-arrow-up rotate-40 text-accent "></i>  +12%</p>
                        <div className="absolute h-15 w-15 bg-green-500 right-6 top-8 rounded-xl flex items-center justify-center">
                            <i className="fa-solid fa-arrow-down text-green-700 text-4xl"></i>
                        </div>
                    </div>
                    <div className="w-[32%] relative bg-red-900 h-35 rounded-xl p-3">
                        <h4 className="text-red-300 font-semibold text-lg">Total Expense</h4>
                        <h2 className="text-text text-2xl font-bold mt-3">₦ 250,000</h2>
                        <p className="mt-3 text-red-300 font-medium"><i className="fa-solid fa-arrow-up rotate-40 "></i>  +12%</p>
                        <div className="absolute h-15 w-15 bg-red-500 right-6 top-8 rounded-xl flex items-center justify-center">
                            <i className="fa-solid fa-arrow-up text-red-700 text-4xl"></i>
                        </div>
                    </div>
                </div>

                <div className="flex w-full min-h-60 mt-4 justify-around">
                    <div className="p-3 bg-sidebar min-h-40 w-[60%] rounded-xl">
                        <div className="flex h-10 w-full     items-start justify-between">
                            <h3 className="text-text font-medium text-lg">Recent transaction</h3>
                            <button className="border-0 text-primary cursor-pointer"> View all <i className="fa fa-arrow-right"></i></button>
                        </div>

                        <div className="flex w-full h-20 gap-3 items-center border-border border-b-2 cursor-pointer mt-3">
                            <div className="flex w-13 h-13 bg-accent rounded-full items-center justify-center">
                                <i className="fa-solid fa-arrow-up text-text text-xl"></i>
                            </div>
                            <div className="w-[70%] h-18 flex flex-col justify-center">
                                <h5 className="text-text font-medium text-xl"> Salary</h5>
                                <small className="text-muted mt-2 font-medium text-md">Dec 1, 2026 . <span>Income</span></small>
                            </div>
                            <h3 className="text-accent font-semibold text-lg">+₦80,000</h3>
                        </div>




                    </div>

                    <div className="p-3 bg-sidebar max-h-60 w-[37%] rounded-xl f">
                        <h2 className="text-text font-medium text-lg">Spending Overview</h2>

                        <div className="flex h-50 w-full items-center justify-between px-3">

                            <div className="w-35 h-35 rounded-full flex items-center justify-center bg-[conic-gradient(red,yellow,green,blue,red)]">
                                <div className="w-20 h-20 rounded-full bg-sidebar"></div>
                            </div>

                            <div>
                                <div className="flex items-start gap-2">
                                    <div className="rounded-full h-2 w-2 bg-primary mt-2"></div>
                                    <div>
                                        <h5 className="text-text font-medium h-4">Food</h5>
                                        <small className="text-muted m-0">40%</small>
                                    </div>

                                </div>

                                <div className="flex items-start gap-2">
                                    <div className="rounded-full h-2 w-2 bg-danger mt-2"></div>
                                    <div>
                                        <h5 className="text-text font-medium h-4">Transport</h5>
                                        <small className="text-muted m-0">40%</small>
                                    </div>

                                </div>

                                <div className="flex items-start gap-2">
                                    <div className="rounded-full h-2 w-2 bg-accent mt-2"></div>
                                    <div>
                                        <h5 className="text-text font-medium h-4">Others</h5>
                                        <small className="text-muted m-0">40%</small>
                                    </div>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}