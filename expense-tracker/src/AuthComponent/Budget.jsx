export default function Budget() {

    return (
        <section className="w-[80%] border-border border-2 lg:rounded-r-xl px-2 pb-4 max-[1000px]:w-[100%] max-[1000px]:rounded-xl">
            <header className="h-22 w-full border-border border-b-2 flex px-3 justify-between items-center gap-3">
                <div className="w-[50%] h-20 flex flex-col justify-center">
                    <h1 className="text-text font-semibold text-2xl">Budget</h1>
                    <p className="text-muted text-sm mt-2">Plan your spending limit</p>
                </div>
                <div className="w-[30%] h-20 flex justify-end items-center">
                    <button className="bg-primary py-2 px-3 rounded-xl text-text font-semibold cursor-pointer hover:bg-secondary">Set Budget</button>
                </div>

            </header>
            <div className="flex w-full min-h-50 mt-4 flex-col justify-center">
                <div className="flex items-center  max-h-55 gap-5 pr-4">

                    <div className="flex h-50 w-[35%] gap-3 items-center bg-sidebar rounded-xl justify-center">
                        <div className="w-[50%] h-full flex items-center justify-center">
                            <div className="flex items-center justify-center h-40 border-3 w-40 rounded-full bg-[conic-gradient(red,yellow,blue,yellow)]">
                                <div className="h-30 w-30 rounded-full bg-surface flex items-center justify-center flex-col">
                                    <h2 className="text-text font-semibold text-2xl">70%</h2>
                                    <small className="text-muted text-md">Used</small>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="h-50 w-[65%]  px-4 bg-sidebar rounded-xl flex flex-col justify-center">
                        <div className="flex h-15 items-center w-full gap-4">
                            <div className="rounded-full h-4 w-4 bg-primary flex items-center justify-center"></div>

                            <div className="flex flex-col ">
                                <h3 className="text-muted font-semibold text-md">Monthly limit</h3>
                                <h2 className="text-text font-semibold text-lg">₦15,000</h2>
                            </div>
                        </div>

                        <div className="flex h-15 items-center w-full gap-4">
                            <div className="rounded-full h-4 w-4 bg-danger flex items-center justify-center"></div>

                            <div className="flex flex-col">
                                <h3 className="text-muted font-semibold text-md">Spent</h3>
                                <h2 className="text-text font-semibold text-lg">₦15,000</h2>
                            </div>
                        </div>

                         <div className="flex h-15 items-center w-full gap-4">
                            <div className="rounded-full h-4 w-4 bg-accent flex items-center justify-center"></div>

                            <div className="flex flex-col">
                                <h3 className="text-muted font-semibold text-md">Remainig</h3>
                                <h2 className="text-text font-semibold text-lg">₦15,000</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-10 flex w-full items-center pr-8 justify-between mt-3">
                    <p className="text-text font-semibold text-lg">Your Goals</p>
                    <button className="text-primary text-md cursor-pointer">View All <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="w-full h-50 pr-3">
                    <div className="flex h-15 w-full items-center rounded-xl bg-sidebar px-3 gap-3 mt-2">
                        <div className="rounded-xl h-10 w-10 bg-blue-900"></div>
                        <div className="w-[30%] ">
                            <h2 className="text-text font-semibold text-lg">Food</h2>
                        </div>

                        <div className="w-[30%] bg-surface h-3 rounded-xl">
                            <div className="h-full w-[50%] bg-primary rounded-xl"></div>
                        </div>
                        <div className="w-[25%] flex justify-end">
                            <h3 className="text-muted font-semibold text-md">₦30,000/₦50,000</h3>
                        </div>
                    </div>

                     <div className="flex h-15 w-full items-center rounded-xl bg-sidebar px-3 gap-3 mt-2">
                        <div className="rounded-xl h-10 w-10 bg-blue-900"></div>
                        <div className="w-[30%] ">
                            <h2 className="text-text font-semibold text-lg">Food</h2>
                        </div>

                        <div className="w-[30%] bg-surface h-3 rounded-xl">
                            <div className="h-full w-[50%] bg-primary rounded-xl"></div>
                        </div>
                        <div className="w-[25%] flex justify-end">
                            <h3 className="text-muted font-semibold text-md">₦30,000/₦50,000</h3>
                        </div>
                    </div>

                     <div className="flex h-15 w-full items-center rounded-xl bg-sidebar px-3 gap-3 mt-2">
                        <div className="rounded-xl h-10 w-10 bg-blue-900"></div>
                        <div className="w-[30%] ">
                            <h2 className="text-text font-semibold text-lg">Food</h2>
                        </div>

                        <div className="w-[30%] bg-surface h-3 rounded-xl">
                            <div className="h-full w-[50%] bg-primary rounded-xl"></div>
                        </div>
                        <div className="w-[25%] flex justify-end">
                            <h3 className="text-muted font-semibold text-md">₦30,000/₦50,000</h3>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}