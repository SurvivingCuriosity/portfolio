import { TEMA } from "@components/Inicio/context/AppContext";
import { useAppContext } from "@components/Inicio/context/useAppContext";

interface AnimatedGradientTextProps {
    text: string;
    fontSize?: string;
    className?: string;
    headingOrder?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
}

export const AnimatedGradientText = ({ text, fontSize, className, headingOrder }: AnimatedGradientTextProps) => {
    const HeadingTag = headingOrder || 'div'; // Si no se especifica un tipo de encabezado, se utiliza <div> por defecto
    const { tema } = useAppContext()

    return (
        <span className='animated-text-wrapper block'>
            <HeadingTag className={`font-extrabold leading-snug 2xl:leading-tight animate-text bg-gradient-to-r bg-clip-text text-transparent ${className} 
        ${tema === TEMA.dark
                    ? ' from-yellow-400 via-orange-500 to-yellow-400'
                    : ' from-neutral-700 via-neutral-500 to-neutral-700'
                }`} style={{ fontSize: fontSize }}>
                {text}
            </HeadingTag>
        </span>
    );
};
