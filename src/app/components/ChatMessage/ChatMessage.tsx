import React from 'react'

function ChatMessage({ onChat }: { onChat?: boolean }) {
    return (
        <section className='my-25 w-full h-full flex flex-col gap-3 px-5'>
            {/* Bulle user me */}
            <div className='flex flex-col items-end'>
                <div className='  max-w-[70%] bg-white/20 rounded-3xl px-3 py-2'>
                    <span>Lorem ipsum dolor sit amet riatur commodi esse. Dolorum doloremque laborum delectus sed! 😉</span>
                </div>
                <span className='text-xs pt-2 px-2'>Today 21:32</span>
            </div>
            {/* Bulle user other */}
            <div className='flex flex-col items-start'>
                <div className=' max-w-[70%] bg-white/10 rounded-3xl px-3 py-2'>
                    <span>Lorem ipsum dolor sit amet riatur sed! 😊</span>
                </div>
                <span className='text-xs pt-2 px-2'>Today 22:33</span>
            </div>
            {/* Bulle user me */}
            <div className='flex flex-col items-end'>
                <div className='  max-w-[70%] bg-white/20 rounded-3xl px-3 py-2'>
                    <span>Lorem ipsum dolor sit amet riatur commodi esse. Dolorum doloremque laborum delectus sed! 😉</span>
                </div>
                <span className='text-xs pt-2 px-2'>Today 21:32</span>
            </div>
            {/* Bulle user other */}
            <div className='flex flex-col items-start'>
                <div className=' max-w-[70%] bg-white/10 rounded-3xl px-3 py-2'>
                    <span>Lorem ipsum dolor sit amet riatur sed! 😊</span>
                </div>
                <span className='text-xs pt-2 px-2'>Today 22:33</span>
            </div>
            {/* Bulle user me */}
            <div className='flex flex-col items-end'>
                <div className='  max-w-[70%] bg-white/20 rounded-3xl px-3 py-2'>
                    <span>Lorem ipsum dolor sit amet riatur commodi esse. Dolorum doloremque laborum delectus sed! 😉</span>
                </div>
                <span className='text-xs pt-2 px-2'>Today 21:32</span>
            </div>
            {/* Bulle user other */}
            <div className='flex flex-col items-start'>
                <div className=' max-w-[70%] bg-white/10 rounded-3xl px-3 py-2'>
                    <span>Lorem ipsum dolor sit amet riatur sed! 😊</span>
                </div>
                <span className='text-xs pt-2 px-2'>Today 22:33</span>
            </div>
            {/* Bulle user me */}
            <div className='flex flex-col items-end'>
                <div className='  max-w-[70%] bg-white/20 rounded-3xl px-3 py-2'>
                    <span>Lorem ipsum dolor sit amet riatur commodi esse. Dolorum doloremque laborum delectus sed! 😉</span>
                </div>
                <span className='text-xs pt-2 px-2'>Today 21:32</span>
            </div>
            {/* Bulle user other */}
            <div className='flex flex-col items-start'>
                <div className=' max-w-[70%] bg-white/10 rounded-3xl px-3 py-2'>
                    <span>Lorem ipsum dolor sit amet riatur sed! 😊</span>
                </div>
                <span className='text-xs pt-2 px-2'>Today 22:33</span>
            </div>
            {/* Bulle user me */}
            <div className='flex flex-col items-end'>
                <div className='  max-w-[70%] bg-white/20 rounded-3xl px-3 py-2'>
                    <span>Lorem ipsum dolor sit amet riatur commodi esse. Dolorum doloremque laborum delectus sed! 😉</span>
                </div>
                <span className='text-xs pt-2 px-2'>Today 21:32</span>
            </div>
            {/* Bulle user other */}
            <div className='flex flex-col items-start'>
                <div className=' max-w-[70%] bg-white/10 rounded-3xl px-3 py-2'>
                    <span>Lorem ipsum dolor sit amet riatur sed! 😊</span>
                </div>
                <span className='text-xs pt-2 px-2'>Today 22:33</span>
            </div>
        </section>
    )
}

export default ChatMessage