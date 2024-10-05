"use client"

import React, { use, useEffect, useState } from 'react'
import { CiLight } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

type Theme = 'light' | 'dark'

export default function ThemeSwitch() {

    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = () =>{
        if (theme === 'light'){
            setTheme('dark')
            window.localStorage.setItem("theme","dark")
            document.documentElement.classList.add('dark')
        }else{
            setTheme('light')
            window.localStorage.setItem("theme","light")
            document.documentElement.classList.remove('dark')
        }
    }

    useEffect(()=>{
        const localTheme = window.localStorage.getItem("theme") as Theme | null;
        if (localTheme){
            setTheme(localTheme)
            if(localTheme === 'dark'){
                document.documentElement.classList.add('dark')
            }
        } else if(window.matchMedia("(prefers-color-scheme: dark)").matches){
            setTheme("dark")
            document.documentElement.classList.add('dark')
        }
    },[])

  return (
    <button className='fixed bottom-5 right-5 dark:bg-gray-900 rounded-full bg-white sm:w-[4rem] sm:h-[4rem] w-[3rem] h-[3rem] flex justify-center items-center bg-opacity-75 border border-white/70 dark:border-opacity-40 dark:border-white shadow-2xl shadow-black/90 hover:scale-110 active:scale-105 transition-all ease-in-out mb-4'
        onClick={toggleTheme}>
            {
                theme === 'light' ? ( <CiLight className='w-[4rem] h-[3rem] shadow-2xl'/>) : (<CiDark className='w-[5rem] h-[3rem] ' />)
            }
       
            
    </button>
  )
}
