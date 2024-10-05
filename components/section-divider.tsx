"use client"

import React from 'react'
import {motion} from 'framer-motion'

export default function SectionDivider() {
  return (
    <motion.div
    className='bg-gray-200 py-24 h-full w-2  rounded-lg hidden sm:block dark:bg-gray-300 dark:bg-opacity-60'
    initial={{ opacity: 0 , y: 100 }}
    animate={{ opacity: 1, y:0 }}
    transition={{
        type: "spring",
        stiffness: 200,
        damping: 40,
      }}
      >
    </motion.div>
  )
}
