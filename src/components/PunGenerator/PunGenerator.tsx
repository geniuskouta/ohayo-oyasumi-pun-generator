import React from 'react';

interface ChildrenProps {
    children?: React.ReactNode
}

export function PunGenerator ({children}: ChildrenProps) {
    return (
        <div className="pungenerator">
            {children}
        </div>
    );
}
