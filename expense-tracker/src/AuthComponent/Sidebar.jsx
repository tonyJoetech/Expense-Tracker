import DashBoard from "./Dashboard"

export default function SideBar() {


    return (
        <main className="flex min-h-screen w-screen bg-background p-1 ">
            <aside className="w-[19.8%] bg-sidebar rounded-l-xl p-2  flex flex-col gap-8 max-h-150 max-[1000px]:hidden">

                <div className="h-20 w-full border-2 flex items-center justify-center gap-2 relative">
                    <div className="h-18 w-1/3 border border-2"></div>
                    <div className="w-2/4">
                        <h2 className="text-text font-semibold text-2xl">Expense</h2>
                        <h3 className="text-primary font-semibold text-xl">Tracker</h3>
                    </div>
                    <i className="fa-solid fa-xmark text-text absolute top-0 right-0 hidden! max-[100px]:block "></i>
                </div>
                <div className="h-90 px-3">
                    <div className="w-full flex items-center  h-12 rounded-2xl cursor-pointer mt-1 px-3 gap-5 bg-primary transition-background ease duration-200 hover:bg-primary">
                        <i className="fa-solid fa-house text-xl text-muted"></i>
                        <button className="text-muted font-medium text-lg ">Dashboard</button>
                    </div>

                    <div className="w-full flex items-center gap-5 px-3 h-12 rounded-2xl cursor-pointer mt-2 transition-background ease duration-500 hover:bg-primary">
                        <i className="fa-solid fa-money-bill-transfer text-xl text-muted"></i>
                        <button className="text-muted font-medium text-xl ">Transactions</button>
                    </div>

                    <div className="w-full flex items-center gap-5 h-12 px-3 rounded-2xl cursor-pointer mt-2 transition-background ease duration-500 hover:bg-primary">
                        <i className="fa-solid fa-wallet text-xl text-muted"></i>
                        <button className="text-muted font-medium text-xl ">Wallet</button>
                    </div>

                    <div className="w-full flex items-center gap-5 h-12 px-3 rounded-2xl cursor-pointer mt-2 transition-background ease duration-500 hover:bg-primary">
                        <i className="fa-solid fa-bullseye text-xl text-muted"></i>
                        <button className="text-muted font-medium text-xl ">Goals</button>
                    </div>

                    <div className="w-full flex items-center gap-5 h-12 px-3 rounded-2xl cursor-pointer mt-2 transition-background ease duration-500 hover:bg-primary">
                        <i className="fa-solid fa-money-bill-transfer text-xl text-muted"></i>
                        <button className="text-muted font-medium text-xl ">Budget</button>
                    </div>

                    <div className="w-full flex items-center gap-5 h-12 px-3 rounded-2xl cursor-pointer mt-2 transition-background ease duration-500 hover:bg-primary">
                        <i className="fa-solid fa-chart-line text-xl text-muted"></i>
                        <button className="text-muted font-medium text-xl ">Analytics</button>
                    </div>

                    <div className="w-full flex items-center gap-5 h-12 px-3 rounded-2xl cursor-pointer mt-2 transition-background ease duration-500 hover:bg-primary">
                        <i className="fa-solid fa-gear text-xl text-muted"></i>
                        <button className="text-muted font-medium text-xl ">Setting</button>
                    </div>
                </div>
                <div className="w-full px-3">
                    <div className="w-full flex items-center gap-5 px-3 h-12 rounded-2xl cursor-pointer mt-5 transition-background ease duration-500 hover:bg-primary">
                        <i className="fa-solid fa-right-from-bracket text-xl text-muted"></i>
                        <button className="text-muted font-medium text-xl ">Logout</button>
                    </div>
                </div>

            </aside>

            <DashBoard />
        </main >
    )
}