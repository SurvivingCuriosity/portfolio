import { useNavigate } from 'react-router-dom';


export interface ButtonScrollToProps {
    path: string;
    text?: string;
}

export const ButtonScrollTo = ({ path, text }: ButtonScrollToProps) => {
    const navigate = useNavigate()
    
    const handleArrowClick = () => {
        navigate(path)
    }
    return (
        <button aria-label="Desplazarse hasta experiencia" onClick={handleArrowClick} className='flex items-center justify-center gap-2 rounded-full p-2 px-4 hover:bg-neutral-200 dark:hover:bg-neutral-700'>
            <span className='m-1 block -translate-y-1 rotate-45 border-b border-r border-neutral-800 p-2 dark:border-neutral-300'></span>
            <p className='text-neutral-800 dark:text-neutral-300'>{text}</p>
        </button>
    )
}
