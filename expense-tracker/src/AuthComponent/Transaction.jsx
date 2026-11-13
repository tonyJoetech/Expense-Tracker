export default function Transaction() {


    return (
        <section className="w-[80%] border-border border-2 lg:rounded-r-xl px-2 pb-4 max-[1000px]:w-[100%] max-[1000px]:rounded-xl">
            <header className="h-22 w-full border-border border-b-2 flex px-3 justify-between items-center gap-3">
                <div className="w-[50%] h-20 flex flex-col justify-center">
                    <h1 className="text-text font-semibold text-2xl">Transactions</h1>
                    <p className="text-muted text-sm mt-2">View and manange all transactions</p>
                </div>
                <div className="w-[30%] h-20 flex justify-end items-center">
                    <button className="bg-primary py-2 px-3 rounded-xl text-text font-semibold cursor-pointer hover:bg-secondary">+ Add Transactions</button>
                </div>

            </header>
            <div className="flex h-20 mt-4 items-center flex-wrap justify-between px-3">
                <div className="w-[40%] flex items-center justify-start gap-2 ">
                    <button className="px-3 py-2 bg-primary border-border border-1 rounded-xl px-6 text-text font-semibold cursor-pointer  hover:bg-secondary">All</button>
                    <button className="px-3 py-2 rounded-xl px-6 text-text font-semibold cursor-pointer hover:bg-secondary bg-surface border-border border-1">Income</button>
                    <button className="px-3 py-2 rounded-xl bg-surface px-6 text-text font-semibold cursor-pointer hover:bg-secondary border-border border-1">Expenses</button>
                </div>

                <div className="w-[40%] flex items-center justify-start">
                    <div className="flex w-full h-12 items-center focus-within:border-border focus-within:border-2 bg-surface rounded-xl px-3 justify-between">
                        <i className="fa-solid fa-search text-muted text-lg "></i>
                        <input type="search" name="search" id="search" className="w-[90%] outline-none text-text" placeholder="Search transactions..." />
                    </div>
                </div>
            </div>

            <div className="w-full mt-2 min-h-50 px-3">
                <div className="flex w-full h-17 gap-6 items-center cursor-pointer mt-3 bg-surface px-3 rounded-xl">
                    <div className="flex w-11 h-11 bg-accent rounded-full items-center justify-center">
                        <i className="fa-solid fa-arrow-up text-text text-xl"></i>
                    </div>
                    <div className="w-[70%] h-15 flex flex-col justify-center">
                        <h5 className="text-text font-medium text-xl"> Salary</h5>
                        <small className="text-muted mt-2 font-medium text-md">Dec 1, 2026 . <span>Income</span></small>
                    </div>
                    <div className="flex w-[20%] h-15 items-center px-2 justify-between">
                        <h3 className="text-accent font-semibold text-lg">+₦80,000</h3>
                        <i className="fa-solid fa-trash text-muted text-2xl hover:text-red-300 max-[100px]:text-red-300"></i>
                    </div>

                </div>
            </div>
        </section>
    )
}