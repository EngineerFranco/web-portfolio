"use client"

import React from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion'
import { useSectionInView } from '@/lib/hooks'

export default function About() {

    const {ref} = useSectionInView('About', 1)
    
    return (
        <motion.section className='mb-20 mt-16 max-w-[45rem] text-left font-light sm:mb-16 sm:text-center scroll-mt-28 leading-7 mx-3'
        ref={ref}
        id='about'
        initial={{opacity:0, y:100}}
        animate={{opacity:1, y:0}}
        transition={{delay:0.175}}>
            <SectionHeading>About me</SectionHeading>
            <p className='mb-3'>I am a passionate and self-driven web developer with a focus on building efficient, user-friendly applications. I have experience working with a wide range of technologies, including JavaScript, Node.js, Express, and modern frontend frameworks like React and Next.js. I enjoy designing intuitive user interfaces with Tailwind CSS and constantly strive to create seamless user experiences. My journey in web development has allowed me to work on dynamic backend systems, REST APIs, and database management, which has strengthened my problem-solving and technical skills.</p>
            <p>In addition to my web development expertise, I am always eager to learn and expand my skill set, whether it is exploring new technologies like AWS for file storage or diving into hardware projects with Arduino. I love collaborating on projects that challenge me to think creatively and solve complex problems. When I am not coding, I enjoy experimenting with new tech, exploring interactive designs, and contributing to exciting new projects. I am excited to continue growing as a developer and bringing fresh ideas to every project I work on.</p>
        </motion.section>
    )
}

function setActiveSection(arg0: string) {
    throw new Error('Function not implemented.')
}

