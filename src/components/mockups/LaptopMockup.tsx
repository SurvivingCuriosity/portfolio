export const LaptopMockup = ({children}: {children: React.ReactNode}) => {

    return (


        <div className="aspect-video w-full">
            
            <div className="bg-neutral-9 relative mx-auto w-11/12 rounded-t-xl border-[8px] border-neutral-950 bg-neutral-950 outline outline-neutral-800">
                
                <div className="aspect-video overflow-hidden rounded-lg bg-neutral-950">
                    {children}
                </div>
            </div>
            <div className="relative mx-auto h-[17px] rounded-b-xl rounded-t-sm bg-neutral-950 outline outline-neutral-800 md:h-[21px]">
                <div className="absolute left-1/2 top-0 h-[5px] w-[56px] -translate-x-1/2 rounded-b-xl bg-neutral-800 md:h-[8px]"></div>
            </div>
        </div>
    )
}