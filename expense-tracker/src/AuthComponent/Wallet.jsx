
export default function Wallet() {


    return (

        <div className="w-[80%] border-border border-2 lg:rounded-r-xl px-2 pb-4 max-[1000px]:w-[100%] max-[1000px]:rounded-xl">
            <header className="h-22 w-full border-border border-b-2 flex px-3 justify-between items-center gap-3">
                <div className="max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center h-10 w-10 rounded-lg bg-sidebar hidden max-[1000px]:block">
                    <i className="fa-solid fa-list text-text text-2xl"></i>
                </div>
                <div className="h-20 flex flex-col items-start justify-center  w-[70%] ">

                    <h1 className="text-text font-semibold text-2xl">My wallet</h1>
                    <p className="text-muted text-sm mt-2">Your financial overview</p>

                </div>
                <div className="flex h-20 w-2/7 items-center justify-end pr-5">
                    <button className="text-text  border-2 border-border px-4 py-2 rounded-xl bg-primary hover:bg-secondary cursor-pointer font-semibold">+ Top Up </button>
                </div>
            </header>

            <div className="flex w-full h-fit p-3 justify-between flex-wrap mt-5">
                <div className="w-[50%] relative bg-primary h-35 rounded-xl px-2 flex gap-4">
                    <div className="h-full w-[30%] left-6 top-8 rounded-xl flex items-center justify-center">
                        <i className="fas fa-money-check-dollar text-blue-900 text-8xl"></i>
                    </div>

                    <div className="w-[60%] flex flex-col items-start justify-center">
                        <h4 className="text-muted font-semibold text-lg">Wallet Balance</h4>
                        <h2 className="text-text text-2xl font-bold mt-3">₦ 250,000</h2>
                    </div>
                </div>

                <div className="w-[32%] relative h-35 rounded-xl p-3">

                    <button className="text-text px-12 py-2 bg-accent rounded-xl font-semibold text-md cursor-pointer hover:bg-transparent border-2 border-border transition duration-300 ease">+  Add Money</button>


                    <button className="text-text px-14 py-2 bg-transparent rounded-xl font-semibold text-md cursor-pointer  border-2 border-border transition duration-300 ease mt-4 hover:bg-danger">-  Withdraw</button>
                </div>
            </div>
            <div className="h-10 flex w-full items-center pr-8 justify-between mt-3 px-2">
                <p className="text-text font-semibold text-lg">Your Goals</p>
                <button className="text-primary text-md cursor-pointer">View All <i className="fa-solid fa-arrow-right"></i></button>
            </div>

            <div className="w-full mt-2 min-h-50 px-3">
                <div className="flex w-full h-17 gap-6 items-center cursor-pointer mt-3 bg-surface px-3 rounded-xl">
                    <div className="flex w-11 h-11 bg-accent rounded-full items-center justify-center">
                        <i className="fa-solid fa-arrow-up text-text text-xl"></i>
                    </div>
                    <div className="w-[70%] h-15 flex flex-col justify-center">
                        <h5 className="text-text font-medium text-xl"> Salary</h5>
                        <small className="text-muted mt-2 font-medium text-md">Dec 1, 2026 . <span>+₦80,000</span></small>
                    </div>
                    <div className="flex w-[20%] h-15 items-center px-2 justify-between">
                        <h3 className="text-accent font-semibold text-lg">+₦80,000 <span className="text-danger">-₦30,000</span></h3>
                    </div>

                </div>
                <div className="flex w-full h-17 gap-6 items-center cursor-pointer mt-3 bg-surface px-3 rounded-xl">
                    <div className="flex w-11 h-11 bg-accent rounded-full items-center justify-center">
                        <i className="fa-solid fa-arrow-up text-text text-xl"></i>
                    </div>
                    <div className="w-[70%] h-15 flex flex-col justify-center">
                        <h5 className="text-text font-medium text-xl"> Salary</h5>
                        <small className="text-muted mt-2 font-medium text-md">Dec 1, 2026 . <span>+₦80,000</span></small>
                    </div>
                    <div className="flex w-[20%] h-15 items-center px-2 justify-between">
                        <h3 className="text-accent font-semibold text-lg">+₦80,000 <span className="text-danger">-₦30,000</span></h3>
                    </div>

                </div>

                <div className="flex w-full h-17 gap-6 items-center cursor-pointer mt-3 bg-surface px-3 rounded-xl">
                    <div className="flex w-11 h-11 bg-accent rounded-full items-center justify-center">
                        <i className="fa-solid fa-arrow-up text-text text-xl"></i>
                    </div>
                    <div className="w-[70%] h-15 flex flex-col justify-center">
                        <h5 className="text-text font-medium text-xl"> Salary</h5>
                        <small className="text-muted mt-2 font-medium text-md">Dec 1, 2026 . <span>+₦80,000</span></small>
                    </div>
                    <div className="flex w-[20%] h-15 items-center px-2 justify-between">
                        <h3 className="text-accent font-semibold text-lg">+₦80,000 <span className="text-danger">+₦80,000</span></h3>
                    </div>

                </div>
            </div>
        </div>

    )
}