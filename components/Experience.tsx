import React from 'react'
import { motion } from "framer-motion";
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings';

type Props = {
    experiences: Experience[]
}

const Experience = ({ experiences }: Props) => {
  return (
    <motion.div 
    initial={{
        opacity: 0,
    }}
    whileInView={{
        opacity: 1,
    }}
    transition={{
        duration: 1.5,
    }}
        className="flex flex-wrap overflow-hidden flex-col text-left md:flex-row mt-20 px-10 justify-evenly mx-auto items-center">
        <h3 
        className="uppercase tracking-[15px] text-gray-500 text-2xl">
            Experience
        </h3>

        <div className="w-full flex items-center space-x-5 overflow-x-scroll mt-10 p-10  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
            {experiences?.map((experience) => (
                <ExperienceCard key={experience._id} experience={experience} />
            ))}
        </div>
    </motion.div>
  )
}

export default Experience