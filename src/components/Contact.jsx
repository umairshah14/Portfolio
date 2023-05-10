import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className='w-full h-screen bg-black text-gray-200 flex justify-center items-center p-4'>
         <form method='POST' action="https://getform.io/f/c4ebe523-bd44-4000-8ed4-3aa933c8446c" className='flex flex-col max-w[600px]'>
            <div className='pb-4'>
                <p className='text-5xl font-bold inline border-b-4 border-yellow-600'>Contact</p>
                <p className='text-gray-400 py-4'>Submit the form below or send me an email - umairshah14@hotmail.com</p>
            </div>
            <input className='p-2 bg-gray-600' type="text" placeholder='Name' name='name' />
            <input className='p-2 my-4  bg-gray-600' type="email" placeholder='Email' name='email' />
            <textarea  className='p-2 min-h-[100px] bg-gray-600'name="message"  placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-yellow-600 hover:border-yellow-600 px-4 py-3 my-4 mx-auto flex items-center rounded-md'>Let's Connect!</button>
         </form>
    </div>
  )
}

export default Contact