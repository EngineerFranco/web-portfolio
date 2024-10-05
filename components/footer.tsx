import React from 'react'

export default function Footer() {
  return (
    <footer className='flex justify-center text-center flex-col mb-4 px-5 py-4 font-medium text-gray-700 gap-2 dark:text-gray-300'>
        <small>
        © 2024 Franco. All rights reserved.
        </small>
        <p className='text-sm font-light'>
            <span className='font-medium'>About this website:</span> ReactJS & NextJS, App Router & Server Actions, Typescript, Tailwind CSS, Framer, Toaster, React Email & Resend, Vercel.
        </p>
    </footer>
  )
}
