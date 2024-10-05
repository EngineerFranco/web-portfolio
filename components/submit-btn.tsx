import React from 'react'
import { useFormStatus } from 'react-dom'
import { FaPaperPlane } from 'react-icons/fa'

export default function SubmitButton() {

  const {pending} = useFormStatus()

  return (
    <button type='submit' className=' flex gap-4 justify-center items-center py-2 dark:border-white dark:border-opacity-40 border hover:scale-110 transition ease-in-out focus:scale-105 px-5 bg-gray-900 text-gray-50 rounded-full  mx-auto mt-10 hover:font-medium disabled:scale-100 '
    disabled={pending}
    >
    
    {
        pending? <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div> : (<>Submit <FaPaperPlane/></>)
    }
        
   
    </button>
  )
}
