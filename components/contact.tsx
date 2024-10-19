"use client"

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from '@/lib/hooks'
import {motion} from 'framer-motion'
import { sendEmail } from '@/actions/sendEmail';
import SubmitButton from './submit-btn'
import toast from 'react-hot-toast'

export default function Contact() {

    const {ref} = useSectionInView('Contact', .9)




  return (
    <motion.section id='contact' className="scroll-mt-28 mb-28 sm:mb-40 mx-1 mt-16 sm:min-w-[40rem] min-w-[25rem] " ref={ref} 
    initial = {{
        opacity: 0,
    }} 
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1,

    }}
    viewport={{
        once:true
    }}
    >
        <SectionHeading>Contact me</SectionHeading>
        <p className='mt-14 text-center text-gray-700 dark:text-gray-50'>Please contact me directly at <a href="mailto:engr.franco26@gmail.com" className='underline font-semibold'>engr.franco26@gmail.com</a> or through this <span className=' font-semibold'>form</span> </p>
        <form action={ async formData =>{
            const {data, error} = await sendEmail(formData)

            if(error){
                toast.error(error.toString())
            }
            
            toast.success('Email sent succesfully!')
            
        }} className='flex flex-col gap-5 mt-10  mx-3 dark:text-gray-900 dark:border-white'>
            <input type="email" name='senderEmail' maxLength={500} required placeholder='Your email' className='px-4 py-2 bg-white dark:bg-gray-100 border border-black/20 rounded-md' />
            <textarea name="message" id="message"  maxLength={1000} required placeholder='Your message' className='px-4 py-2 h-[10rem] bg-white dark:bg-gray-100 border border-black/20 rounded-md'></textarea>
            <SubmitButton/>  
        </form>

    </motion.section>
  )
}
