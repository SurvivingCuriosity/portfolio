import React from 'react'

export interface FlexRowProps {
    className?: string;
    children: React.ReactElement[]
}

export const FlexRow = ({ children, className = '' }: FlexRowProps) => {
    return (
        <div className={`flex flex-row ${className}`}>
            {children}
        </div>
    )
}
