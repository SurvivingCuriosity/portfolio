interface AnimatedGradientTextProps {
    text: string;
    fontSize?: string;
    className?: string;
    headingOrder?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const AnimatedGradientText = ({ text, fontSize, className, headingOrder }: AnimatedGradientTextProps) => {
    const HeadingTag = headingOrder || 'div'; // Si no se especifica un tipo de encabezado, se utiliza <div> por defecto

    return (
        <HeadingTag className={`block animate-text bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text font-extrabold leading-snug text-transparent 2xl:leading-tight ${className}`} style={{ fontSize: fontSize }}>
            {text}
        </HeadingTag>
    );
};
