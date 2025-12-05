import React from 'react'
import Button from '../Button/Button';

// FORMULAIRE
function Contact() {
    return (
        <section className=' p-10'>
            <h2 className='text-2xl mb-10 text-center'>Contact Us</h2>
            <form action='' className='flex flex-col items-center gap-3 w-[80vw] [&_div]:p-2 [&_input]:focus:outline-0 [&_input]:border-b-2 [&_input]:border-b-gray-400 [&_textarea]:focus:outline-0'>
                <div className='flex gap-10'>
                    <input type='text' name='name' placeholder='Your name' className='w-38' />
                    <input type='email' name='email' placeholder='Your Email Address' className='w-38' />
                </div>
                <div>
                </div>
                <div>
                    <select name="subject" id="subject" className='w-[50vw] bg-white/8 text-white rounded-2xl px-5 py-2.5 '>
                        <option value="">Choose a subject</option>
                    </select>
                </div>
                <div >
                    <textarea name="text" id="text" maxLength={200} className='w-[75vw] h-36 bg-white/8 text-white rounded-sm resize-none overflow-hidden p-3 ' placeholder='Your message' >

                    </textarea>
                </div>
                <div>
                    <Button className=' bg-white text-black rounded'>Submit</Button>
                </div>
            </form>
        </section>
    )
}

export default Contact