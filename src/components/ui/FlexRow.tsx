import React from 'react'

export interface FlexRowProps {
    className?: string;
    children: React.ReactElement[];
    justifyBetween?:boolean;
}

export const FlexRow = ({ children, className = '', justifyBetween = false }: FlexRowProps) => {
    return (
        <div className={`flex flex-row ${className} ${justifyBetween && 'justify-between'}`}>
            {children}
        </div>
    )
}
