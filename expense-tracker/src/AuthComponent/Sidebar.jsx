import { useState } from "react"
import DashBoard from "./Dashboard"
import Transaction from "./Transaction"
import Goals from "./Goals"
import Budget from "./Budget"
import Wallet from "./Wallet"
import Analytics from "./Analytics"
import Setting from "./Setting"

export default function SideBar() {

    const [dashboard, setdashboard] = useState(true);

    const [transaction, setTransaction] = useState(false)

    const [goals, setGoals] = useState(false);

    const [budget, setbudget] = useState(false);

    const [wallet, setwallet] = useState(false);
    const [analytics, setanalytics] = useState(false);

    const [setting, setSettings] = useState(false);

    function handleDashboard() {
        setdashboard(true)
        setTransaction(false)
        setGoals(false)
        setbudget(false)
        setwallet(false)
        setanalytics(false)
        setSettings(false)

        if (dashboard) {
            return (
                <DashBoard />
            )
        }
    }

    function handletransaction() {
        setTransaction(true)
        setdashboard(false)
        setGoals(false)
        setbudget(false)
        setwallet(false)
        setanalytics(false)
        setSettings(false)

        if (transaction) {
            return (
                <Transaction />
            )
        }
    }

    function handleGoal() {
        setdashboard(false)
        setTransaction(false)
        setGoals(true)
        setbudget(false)
        setwallet(false)
        setanalytics(false)
        setSettings(false)

        if (goals) {
            return (
                <Goals />
            )
        }
    }

    function handleBudget() {
        setdashboard(false)
        setTransaction(false)
        setGoals(false)
        setbudget(true)
        setwallet(false)
        setanalytics(false)
        setSettings(false)

        if (budget) {
            return (
                <Budget />
            )
        }
    }


    function handleWallet() {
        setdashboard(false)
        setTransaction(false)
        setGoals(false)
        setbudget(false)
        setwallet(true)
        setanalytics(false)
        setSettings(false)

        if (wallet) {
            return (
                <Wallet />
            )
        }
    }

    function handleAnalytics() {
        setdashboard(false)
        setTransaction(false)
        setGoals(false)
        setbudget(false)
        setwallet(false)
        setanalytics(true)
        setSettings(false)

        if (analytics) {
            return (
                <Analytics />
            )
        }
    }

    function handleSetting() {
        setdashboard(false)
        setTransaction(false)
        setGoals(false)
        setbudget(false)
        setwallet(false)
        setanalytics(false)
        setSettings(true)

        if (setting) {
            return (
                <Setting />
            )
        }
    }

    return (
        <main className="flex min-h-screen w-screen bg-background p-1 ">
            <aside className="w-[19.8%] bg-sidebar rounded-l-xl p-2  flex flex-col gap-8 max-h-150 max-[1000px]:hidden">

                <div className="h-20 w-full border-2 flex items-center justify-center gap-2 relative">
                    <div className="h-18 w-1/3 border border-2"></div>
                    <div className="w-2/4">
                        <h2 className="text-text font-semibold text-2xl">Expense</h2>
                        <h3 className="text-secondary font-semibold text-xl">Tracker</h3>
                    </div>
                    <i className="fa-solid fa-xmark text-text absolute top-0 right-0 hidden! max-[100px]:block "></i>
                </div>
                <div className="h-90 px-3">
                    <div onClick={handleDashboard} className={`w-full flex items-center gap-5 h-12 px-3 rounded-2xl cursor-pointer mt-2 transition-colors duration-500 hover:bg-primary ${dashboard ? "bg-[#5935F5]" : "bg-transparent"
                            }`} >
                        <i className="fa-solid fa-house text-xl text-muted"></i>
                        <button className="text-muted font-medium text-lg cursor-pointer">Dashboard</button>
                    </div>

                    <div onClick={handletransaction} className={`w-full flex items-center gap-5 h-12 px-3 rounded-2xl cursor-pointer mt-2 transition-colors duration-500 hover:bg-primary ${transaction ? "bg-[#5935F5]" : "bg-transparent"
                            }`} >
                        <i className="fa-solid fa-money-bill-transfer text-xl text-muted"></i>
                        <button className="text-muted font-medium text-xl cursor-pointer" >Transactions</button>
                    </div>

                    <div onClick={handleWallet} className={`w-full flex items-center gap-5 h-12 px-3 rounded-2xl cursor-pointer mt-2 transition-colors duration-500 hover:bg-primary ${wallet? "bg-[#5935F5]" : "bg-transparent"
                            }`} >
                        <i className="fa-solid fa-bullseye text-xl text-muted"></i>
                        <button className="text-muted font-medium text-xl cursor-pointer">Wallet</button>
                    </div>

                    <div onClick={handleGoal} className={`w-full flex items-center gap-5 h-12 px-3 rounded-2xl cursor-pointer mt-2 transition-colors duration-500 hover:bg-primary ${goals ? "bg-[#5935F5]" : "bg-transparent"
                            }`} >
                        <i className="fa-solid fa-bullseye text-xl text-muted"></i>
                        <button className="text-muted font-medium text-xl cursor-pointer">Goals</button>
                    </div>

                    <div onClick={handleBudget} className={`w-full flex items-center gap-5 h-12 px-3 rounded-2xl cursor-pointer mt-2 transition-colors duration-500 hover:bg-primary ${budget ? "bg-[#5935F5]" : "bg-transparent"
                            }`} >
                        <i className="fa-solid fa-money-bill-transfer text-xl text-muted"></i>
                        <button className="text-muted font-medium text-xl cursor-pointer">Budget</button>
                    </div>

                    <div onClick={handleAnalytics} className={`w-full flex items-center gap-5 h-12 px-3 rounded-2xl cursor-pointer mt-2 transition-colors duration-500 hover:bg-primary ${analytics ? "bg-[#5935F5]" : "bg-transparent"
                            }`} >
                        <i className="fa-solid fa-chart-line text-xl text-muted"></i>
                        <button className="text-muted font-medium text-xl cursor-pointer">
                            Analytics
                        </button>
                    </div>

                    <div onClick={handleSetting} className={`w-full flex items-center gap-5 h-12 px-3 rounded-2xl cursor-pointer mt-2 transition-colors duration-500 hover:bg-primary ${setting ? "bg-[#5935F5]" : "bg-transparent"
                            }`} >
                        <i className="fa-solid fa-gear text-xl text-muted"></i>
                        <button className="text-muted font-medium text-xl cursor-pointer">Setting</button>
                    </div>
                </div>
                <div className="w-full px-3">
                    <div className="w-full flex items-center gap-5 px-3 h-12 rounded-2xl cursor-pointer mt-5 transition-background ease duration-500 hover:bg-primary">
                        <i className="fa-solid fa-right-from-bracket text-xl text-muted"></i>
                        <button className="text-muted font-medium text-xl cursor-pointer">Logout</button>
                    </div>
                </div>

            </aside>

            {dashboard ? (<DashBoard />) : transaction ? (<Transaction />) : goals ? (<Goals />) : budget ? (<Budget />) : wallet ? (<Wallet />) : analytics ? (<Analytics />) : setting ? (<Setting />) : null}
        </main >
    )
}