"use client"

import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'
import { LuHandMetal } from "react-icons/lu";
import { GrLinkedin } from "react-icons/gr";
import { IoLogoGithub } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Link from 'next/link';
import { useSectionInView } from '@/lib/hooks';

export default function Intro() {
  
  const {ref} = useSectionInView('Home', 1)

  return (
    <section className='text-gray-900 scroll-mt-36 mx-1' id='home' ref={ref}>
        <div className='flex items-center justify-center mx-1'>
            <motion.div
                className='relative'
                initial={{opacity:0, scale:0}}
                animate={{opacity:1, scale:1}}
                transition={{
                    type:"tween",
                    duration: 0.3
                }}>
                  <Image src="https://i.pinimg.com/originals/f9/17/11/f91711371c45910f4e56f7bda4b7e946.jpg" 
                  alt='Intro image' 
                  width= {200} 
                  height={200} 
                  quality={100} 
                  priority={true}
                  className='h-24 w-24 rounded-full object-cover shadow-xl border-white border dark:border-opacity-40'/>

                <span><LuHandMetal className='text-4xl absolute bottom-0 right-0 bg-white border-2 border-gray-100 rounded-full p-1 hover:scale-110 hover:p-0 ease-in-out transition'/></span>
            </motion.div>
        </div>
        <motion.div
        className='w-full'
         initial={{y:100, opacity: 0}}
         animate={{y: 0, opacity: 1}}>
          <h1 className=' flex items-center justify-center text-1xl font-medium sm:text-1xl  rounded-3xl mx-auto max-w-5xl min-w-72 w-3/4 border-gray-50 p-5 '>
            <p className='sm:text-xl mb-6 mt-2 mx-1 p-4 text-center font-light dark:text-gray-50'>
            My name is <span className="font-bold text-2xl ">Franco Santos</span>. I am a <span className="font-semibold">Full-stack Developer</span> with 4 years of experience building web applications. I specialize in crafting responsive UIs, creating scalable APIs, and integrating third-party services. I am passionate about solving problems and delivering high-performance solutions.
            </p>
          </h1>
          <div className='flex flex-col justify-center items-center gap-5 sm:gap-17 sm:flex-row'>
            <Link href="#contact">
              <button className='bg-gray-900 text-white p-3 border border-gray-100  border-opacity-50 rounded-3xl  flex items-center justify-center gap-3 hover:scale-110 focus:scale-105 transition ease-in-out hover:border-gray-200'>Contact me here <FaLongArrowAltRight /></button>
            </Link>

            <a href="/cv-franco-santos.docx" download>
              <button className=' hover:text-gray-950 p-3 rounded-3xl bg-white border-2 border-gray-200 border-opacity-50 flex items-center justify-center gap-3 hover:scale-110 focus:scale-105 transition ease-in-out hover:border-gray-200'>Download CV <IoCloudDownloadOutline /></button>
            </a>

            <div className='flex justify-center items-center gap-5'>
              <a href="https://www.linkedin.com/in/jenes-franco-santos/" target="_blank">
                <button className='text-gray-800 hover:text-gray-950 p-3 text-xl rounded-3xl bg-white border-2 border-gray-200 border-opacity-50 hover:border-gray-200 hover:scale-125 focus:scale-110 transition ease-in-out'> 
                  <GrLinkedin />
                </button>
              </a>
              <a href="https://github.com/EngineerFranco" target="_blank">
                <button className='text-gray-800 hover:text-gray-950 p-3 text-xl rounded-3xl bg-white border-2 border-gray-200 border-opacity-50 hover:border-gray-200 hover:scale-125 focus:scale-110 transition ease-in-out'>
                  <IoLogoGithub />
                </button>
              </a>
            </div>
          </div>

        </motion.div>
       
    </section>
  )
}
