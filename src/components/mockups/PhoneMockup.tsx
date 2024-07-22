
export const PhoneMockup = ({ children }: { children: React.ReactNode }) => {
    return (

        <div className="relative z-20 h-full w-full overflow-hidden rounded-[1em] border border-neutral-950 bg-neutral-950 p-2 outline outline-neutral-800">
            <div className="absolute left-1/2 top-0.5 h-2 w-3 -translate-x-1/2 rounded-b-[1rem] bg-neutral-950">
                <div className="mx-auto flex aspect-square w-min items-center justify-center rounded-full bg-neutral-800 p-0.5">
                    <div className="mx-auto flex aspect-square w-min items-center justify-center rounded-full bg-neutral-700 p-0.5"></div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 mx-auto flex aspect-square h-[19%] w-full bg-neutral-950 p-2">
                <div className="absolute left-1/2 aspect-square w-min -translate-x-1/2 items-center justify-center rounded-full border border-neutral-700 bg-neutral-950 p-1.5">
                </div>
            </div>
            <span className="absolute left-1/2 top-[10%] h-[75%] w-11/12 -translate-x-1/2 overflow-hidden rounded-sm">
                {children}
            </span>
        </div>


    )
}