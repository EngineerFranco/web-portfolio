"use client";

import { projectsData } from "@/lib/data";
import {motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Link from "next/link";

type ProjectProps = (typeof projectsData)[number]

export default function Project({title, description, tags, imageUrl, href}: ProjectProps) {
    
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
       offset: ["0 1","1.33 1"] 
    })
    const scaleProgress = useTransform(scrollYProgress,[0,1], [.8,1])
    return (
    <motion.div
    className="group "
    ref={ref} 
    style={{scale:scaleProgress,
        opacity:scaleProgress,

    }}>
         <Link href={href} target="_blank" rel="noopener noreferrer">
        <section className=' bg-gray-100 dark:bg-gray-800/90  dark:border-opacity-20 hover:bg-gray-200 transition max-w-[45rem] min-w-[25rem] border border-gray-200 overflow-hidden relative my-5 sm:my-10 rounded-md h-[21rem] sm:h-[24rem] mb-3 sm:mb-8 last:mb-0'
        >  
            <div className='py-4  sm:pl-10 sm:pt-10 w-1/2 text-left flex flex-col gap-2 h-full justify-center pb-8 group-even:ml-auto group-even:mr-8'>
                <h3 className='text-xl font-semibold sm:text-2xl group-even:ml-auto'>{title}</h3>
                <p className=' sm:font-light text-sm sm:leading-relaxed mt-2 text-gray-700 dark:text-gray-400 group-even:ml-auto group-even:text-right'>{description}</p>
                <ul className='flex flex-col gap-1 sm:gap-2 mt-auto '>
                    {tags.map((tag, index) =>(
                        <li className='bg-gray-800 shadow-sm group-even:ml-auto shadow-black text-gray-50 tracking-wider rounded-full px-3 sm:w-1/2 w-full text-sm uppercase' key={index}>{tag}</li>
                    ))}
                </ul>
            </div> 
            <Image className='group-even:group-hover:translate-x-12 group-even:group-hover:rotate-2 group-even:-left-[30%] absolute top-8 -right-[30%] rounded-xl w-3/4 shadow-lg shadow-black  ease-in-out transition group-hover:-translate-x-12 group-hover:-translate-y-2 group-hover:-rotate-2 group-hover:scale-105' src={imageUrl} alt={title} quality={90}/>
        </section> 
        </Link>
    </motion.div>
    )
}