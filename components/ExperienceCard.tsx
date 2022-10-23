import React from 'react'
import { motion } from "framer-motion";
import { Experience } from '../typings';
import { urlFor } from '../sanity';


type Props = {
    experience: Experience;
}

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-3 flex-shrink-0 h-[500px] w-[500px] md:h-[700px] md:w-[600px] xl:w-[900px] bg-[#292929]  p-10 opacity-60 hover:opacity-100 transistion-opacity duration-200 cursor-pointer overflow-hidden">
        <motion.img
        initial={{
            y: -100,
            opacity: 0,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{
            opacity: 1,
            y: 0,
        }}
        viewport={{
            once: true,
        }}
        className="w-[100px] h-[100px] rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(experience?.companyImage).url()}
        alt=""
        />

        <div className="px-0 md:px-10 pl-5">
            <h4 className="md:text-4xl text-2xl font-light">
                {experience.jobTitle}
            </h4>
            <p className="font-bold text-2xl mt-1">
                {experience.company}
            </p>
            <div className="flex space-x-2 my-2">
                {experience.technologies.map(technology => (
                        <img
                            key={technology._id}
                            className="h-8 w-8 md:h-10 md:w-10 xl:h-20 xl:w-20 rounded-full object-cover"
                            src={urlFor(technology.image).url()}
                            alt=""
                        />
                ))}
            </div>
            <p className="uppercase py-3 text-gray-300">
                {new Date(experience.dateStarted).toDateString()} -{" "}
                {experience.isCurrentlyWorkingHere
                    ? "Present"
                    : new Date(experience.dateEnded).toDateString()}
            </p>

            <ul className="list-disc w-[80%] space-y-2 md:space-y-4 ml-5 sm:text-lg">
                {experience.points.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard