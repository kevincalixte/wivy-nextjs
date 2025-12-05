import React from 'react';

function Button({ className = '', children }: { className?: string; children?: React.ReactNode }) {
    return (
        <>
            <button className={`${className} px-8 py-2 rounded-3xl  hover:bg-white hover:text-black hover:scale-110 transition-all duration-200 transform-gpu`}>
                {children}
            </button>
        </>
    );
}

export default Button;