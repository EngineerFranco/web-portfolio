"use client"

import { useSectionInView } from '@/lib/hooks'
import React from 'react'
import SectionHeading from './section-heading'
import { experiencesData } from '@/lib/data'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {motion} from 'framer-motion'

export default function Experiences() {

    const {ref} = useSectionInView('Experience', .7)

    return (
        <motion.section id="experience" ref={ref} className="scroll-mt-28 mx-3 "  
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
        <SectionHeading>My experience</SectionHeading>
        <VerticalTimeline lineColor="">
          {experiencesData.map((item, index) => (
            <React.Fragment key={index}>
              <VerticalTimelineElement
                visible={true}
                contentStyle={{
                    background: "#d9d9d9"
                }}
                contentArrowStyle={{
                    borderRight:"10px solid #343434"
                }}
                date={item.date}
                icon={item.icon}
                
                iconStyle={{
                    background: "#FFFFFF",
                    fontSize: "3.0rem",
                    
                }}
                
              >
                <h3 className="text-[#161616] font-bold uppercase px-3 py-2 shadow-md bg-white rounded-md dark:text-gray-50 dark:bg-gray-900 w-fit ">{item.title}</h3>
                <p className="text-[#161616] font-semibold ">{item.location}</p>
                <p className="text-[#161616] font-extralight text-sm">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          ))}
        </VerticalTimeline>
      </motion.section>
    
  )
}
