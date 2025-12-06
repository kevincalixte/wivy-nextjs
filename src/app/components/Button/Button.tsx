import React from 'react';

type ButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    className?: string;
    children?: React.ReactNode;
}
    ;
function Button({ onClick, className = '', children }: ButtonProps) {
    return (
        <>
            <button onClick={onClick} className={`${className} px-8 py-2 rounded-3xl  hover:bg-white hover:text-black hover:scale-110 transition-all duration-200 transform-gpu`}>
                {children}
            </button>
        </>
    );
}

export default Button;