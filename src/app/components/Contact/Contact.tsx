import React from 'react'
import Button from '../Button/Button';

// Formulaire de contact
function Contact() {
    return (
        <section className='mt-30 w-[80%]'>
            <h2 className='text-2xl mb-10 text-center'>Contact Us</h2>
            <form action='' className='flex flex-col items-center gap-4 w-full '>
                <div className='flex flex-col md:flex-row gap-4 w-full'>
                    <input type='text' name='name' placeholder='Your name' className='w-full px-3 py-2 rounded-xs border-b-2 border-b-gray-400 focus:outline-0' />
                    <input type='email' name='email' placeholder='Your Email Address' className='w-full px-3 py-2 rounded-xs border-b-2 border-b-gray-400 focus:outline-0' />
                </div>
                <div className='w-full mt-2'>
                    <select name="subject" id="subject" className='w-full bg-white/8 text-white rounded-xs px-3 py-2.5'>
                        <option value="">Choose a subject</option>
                    </select>
                </div>
                <div className='w-full'>
                    <textarea name="text" id="text" maxLength={200} className='w-full h-36 bg-white/8 text-white rounded-xs resize-none overflow-hidden p-3' placeholder='Your message'></textarea>
                </div>
                <div className='w-full'>
                    <Button className='w-full bg-white text-black rounded-xs'>Submit</Button>
                </div>
            </form>
        </section>
    )
}

export default Contact