import React from 'react';

function Button({ className = '', children }: { className?: string; children?: React.ReactNode }) {
    return (
        <>
            <button className={`px-3 py-2 rounded-3xl text-white hover:scale-110 transition-all duration-200 transform-gpu ${className}`} >
                {children}
            </button>
        </>
    );
}

export default Button;