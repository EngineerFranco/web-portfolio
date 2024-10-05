"use client"

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import {motion} from 'framer-motion'

export default function Skills() {

    const {ref} = useSectionInView('Skills', 1)

  return (
    <motion.section ref={ref} className='scroll-mt-28 mt-20 ' id='skills'
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
    }}>
        <SectionHeading>Skills</SectionHeading>
        <div className=''>
            <ul className='flex justify-center items-center  gap-2 sm:gap-5 mb-5 w-full min-w-[25rem] max-w-[45rem] h-full p-4 py-5 mx-auto flex-wrap text-sm sm:text-lg'>
                {
                    skillsData.map((skill, index) =>(
                        <motion.li
                        className='px-4 py-2 bg-white border border-gray-200  dark:bg-gray-800/90 dark:border-opacity-10 dark:text-gray-200 rounded-2xl cursor-pointer'
                        key={index}
                        whileHover={{ scale: 1.1, rotate: 360, boxShadow: '0px 2px 10px rgba(0, 0, .3, 0.3)' }}
                        whileTap={{ scale: 0.9, rotate:1 }}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ }}
                    >
                        {skill}
                    </motion.li>
                    ))
                }
            </ul>
        </div>
    </motion.section>
  )
}
