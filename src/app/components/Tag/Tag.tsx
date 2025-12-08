import React from 'react'

function Tag({ children }: { children: string }) {
    return (
        <div className='text-xs inline-block px-3 py-1 rounded-full bg-black/50  '>{children}</div>
    )
}

export default Tag