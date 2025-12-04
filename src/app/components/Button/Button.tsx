import React from 'react';

function Button({ className = '', children }: { className?: string; children?: React.ReactNode }) {
    return (
        <div className={className}>
            <button className='px-8 py-2 rounded-3xl text-black bg-white/90 hover:bg-white hover:scale-110 transition-all duration-200 transform-gpu' >
                {children}
            </button>
        </div>
    );
}

export default Button;