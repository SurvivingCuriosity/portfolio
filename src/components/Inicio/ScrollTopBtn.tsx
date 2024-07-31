import { useScrollThreshold } from "@hooks/useScrollThreshold";

export const ScrollTopBtn = () => {

    const showButton = useScrollThreshold(100)

    return (
        <a href="#top" id="scroll-top-btn" aria-label="Scroll top" className={`z-50 fixed right-4 flex items-center justify-center size-12 bg-neutral-400 rounded-full ${showButton ? 'bottom-4 opacity-100' : 'bottom-[-100px] opacity-0' } transition-all duration-500 ease-in-out dark:bg-neutral-800`}>
            <span className="aspect-square translate-y-[3px] rotate-45 border-2 border-b-0 border-r-0 border-neutral-800 p-1.5 dark:border-neutral-400"></span> 
        </a>
    )
}
