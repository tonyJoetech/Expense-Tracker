export default function Goals() {

    return (
        <section className="w-[80%] border-border border-2 lg:rounded-r-xl px-2 pb-4 max-[1000px]:w-[100%] max-[1000px]:rounded-xl">
            <header className="h-22 w-full border-border border-b-2 flex px-3 justify-between items-center gap-3">
                <div className="w-[50%] h-20 flex flex-col justify-center">
                    <h1 className="text-text font-semibold text-2xl">Goals</h1>
                    <p className="text-muted text-sm mt-2">Set and track your financial goals</p>
                </div>
                <div className="w-[30%] h-20 flex justify-end items-center">
                    <button className="bg-primary py-2 px-3 rounded-xl text-text font-semibold cursor-pointer hover:bg-secondary">+ New Goals</button>
                </div>

            </header>
            <div className="flex w-full min-h-50 mt-4 flex-col justify-center">
                <div className="flex items-center  max-h-55 gap-5 pr-4">

                    <div className="flex h-50 w-[60%] gap-3 items-center bg-sidebar rounded-xl">
                        <div className="w-[40%] h-full flex items-center justify-center">
                            <div className="flex items-center justify-center h-40 border-3 w-40 rounded-full bg-[conic-gradient(red,yellow,blue,yellow)]">
                                <div className="h-30 w-30 rounded-full bg-surface flex items-center justify-center">
                                    <h2 className="text-text font-semibold text-2xl">70%</h2>
                                </div>
                            </div>
                        </div>

                        <div className="h-50 w-[58%] flex flex-col justify-center px-4">
                            <h3 className="text-text font-semibold text-xl">Travel Fund</h3>
                            <h2 className="font-bold text-text text-xl">₦30,00<span className="text-muted">/50,000</span></h2>
                            <div className="flex items-center justify-start h-3 w-full bg-surface rounded-xl mt-5">
                                <div className="h-full w-[50%] rounded-xl bg-primary"></div>
                            </div>

                        </div>
                    </div>
                    <div className="h-50 w-[39%]  px-4 bg-sidebar rounded-xl flex flex-col justify-center">
                        <div className="flex h-17 items-center w-full gap-4">
                            <div className="rounded-full h-10 w-10 bg-primary flex items-center justify-center">
                                <i className="fa-solid fa-calendar text-xl text-muted"></i>
                            </div>

                            <div className="flex flex-col ">
                                <h3 className="text-muted font-semibold text-md">Target date</h3>
                                <h2 className="text-text font-semibold text-lg">Dec 12, 2026</h2>
                            </div>
                        </div>

                        <div className="flex h-17 items-center w-full gap-4">
                            <div className="rounded-full h-10 w-10 bg-primary flex items-center justify-center">
                                <i className="fa-solid fa-scale-balanced text-xl text-muted"></i>
                            </div>

                            <div className="flex flex-col ">
                                <h3 className="text-muted font-semibold text-md">Remaing</h3>
                                <h2 className="text-text font-semibold text-lg">₦15,000</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-10 flex items-end mt-3">
                    <p className="text-text font-semibold text-lg">Your Goals</p>
                </div>
                <div className="w-full h-50 pr-3">
                    <div className="flex h-20 w-full items-center rounded-xl bg-sidebar px-3 gap-3 mt-2">
                        <div className="rounded-xl h-14 w-14 bg-blue-900"></div>
                        <div className="w-[30%] ">
                            <h2 className="text-text font-semibold text-lg">Travel Fund</h2>
                            <h3 className="text-muted font-semibold text-md">₦30,000/₦50,000</h3>
                        </div>

                        <div className="w-[30%] bg-surface h-3 rounded-xl">
                            <div className="h-full w-[50%] bg-primary rounded-xl"></div>
                        </div>
                        <div className="w-[25%] flex justify-end">
                            <i className="fa-solid fa-ellipsis-vertical text-text cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}