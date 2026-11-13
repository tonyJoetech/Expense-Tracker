export default function Analytics() {

    return (
        <section className="w-[79%] border-border border-2 lg:rounded-r-xl px-2 pb-4 max-[1000px]:w-[100%] max-[1000px]:rounded-xl pr-3">
            <header className="h-22 w-full border-border border-b-2 flex px-3 justify-between items-center gap-3">
                <div className="max-[1000px]:flex max-[1000px]:items-center max-[1000px]:justify-center h-10 w-10 rounded-lg bg-sidebar hidden max-[1000px]:block">
                    <i className="fa-solid fa-list text-text text-2xl"></i>
                </div>
                <div className="h-20 flex flex-col items-start justify-center  w-[70%] ">

                    <h1 className="text-text font-semibold text-2xl">Analytics</h1>
                    <p className="text-muted text-sm mt-2">Insight into your spending pattern</p>

                </div>
                <div className="flex h-20 w-2/7 items-center justify-end">
                    <button className="text-muted border-2 border-border h-10 px-2 rounded-xl bg-sidebar cursor-pointer">Last 6 Monnth <i className="fa-solid fa-chevron-down"></i></button>
                </div>
            </header>

            <div className="w-full min-h-60 mt-4 rounded-xl bg-sidebar">

            </div>


            <div className="h-10 flex items-end mt-3">
                <p className="text-text font-semibold text-lg">Your Goals</p>
            </div>

            <div className="flex h-50 w-[100%] gap-3 items-center bg-sidebar rounded-xl mt-4">
                <div className="w-[30%] h-full flex items-center justify-center">
                    <div className="flex items-center justify-center h-40 border-3 w-40 rounded-full bg-[conic-gradient(red,yellow,blue,yellow)]">
                        <div className="h-30 w-30 rounded-full bg-surface flex items-center justify-center">
                            <h2 className="text-text font-semibold text-2xl">70%</h2>
                        </div>
                    </div>
                </div>


                <div className="h-50 w-[50%] flex flex-col justify-center px-4 mt-4">
                    <div className="flex h-10 w-full justify-center gap-2 items-center">
                        <h3 className="text-text font-semibold text-xl">Food</h3>
                        <div className="flex items-center justify-start h-3 w-full bg-surface rounded-xl ">
                            <div className="h-full w-[50%] rounded-xl bg-primary"></div>
                        </div>
                        <h3 className="text-text font-semibold text-md">50%</h3>
                    </div>

                    <div className="flex h-10 w-full justify-center gap-2 items-center">
                        <h3 className="text-text font-semibold text-xl">Food</h3>
                        <div className="flex items-center justify-start h-3 w-full bg-surface rounded-xl ">
                            <div className="h-full w-[50%] rounded-xl bg-primary"></div>
                        </div>
                        <h3 className="text-text font-semibold text-md">50%</h3>
                    </div>

                    <div className="flex h-10 w-full justify-center gap-2 items-center">
                        <h3 className="text-text font-semibold text-xl">Food</h3>
                        <div className="flex items-center justify-start h-3 w-full bg-surface rounded-xl ">
                            <div className="h-full w-[50%] rounded-xl bg-primary"></div>
                        </div>
                        <h3 className="text-text font-semibold text-md">50%</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}