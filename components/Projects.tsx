import React from 'react'
import { motion } from "framer-motion";
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duraction: 1.5,
            }}
            className="relative flex flex-wrap flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="uppercase tracking-[15px] text-gray-500 text-2xl">
                projects
            </h3>

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin">
                {/* This map will reflect each individual project */}
                {projects.map((project, i) => (
                    <div
                        key={project._id}
                        className="w-screen flex-shrink-0 flex flex-col space-y-5 items-center justify-center p-20">
                        <a href={project?.linkToBuild}>
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={urlFor(project?.image).url()}
                            className="max-h-[500px]" alt=""
                        />
                        </a>

                        <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                            <a href={project?.linkToBuild}>
                            <h4 className="text-3xl font-semibold text-center">
                                Project {i + 1} of {projects.length}: {project?.title}
                            </h4>
                            </a>
                            <div className="flex items-center space-x-2 justify-center">
                                {project?.technologies.map(technology => (
                                    <img
                                        className="h-10 w-10 rounded-full object-cover"
                                        key={technology._id}
                                        src={urlFor(technology.image).url()} alt="" />
                                ))}
                            </div>

                            <p className="text-1xl text-center md:text-left">
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12">

            </div>
        </motion.div>
    )
}

export default Projects