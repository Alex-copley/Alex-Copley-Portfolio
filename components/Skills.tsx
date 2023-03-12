import React from 'react';
import { motion } from "framer-motion";
import Skill from './Skill';
import { Skill as SkillType} from '../typings';

type Props = {
  skills: SkillType[];
}

const Skills = ({ skills }: Props) => {
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
      className="mt-10 flex flex-col max-w-[2000px] xl:px-10 min-h-[800px] xl:space-y-0 items-center">
      <h3 className="mb-10 text-center uppercase tracking-[15px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="max-w-[800px] grid grid-cols-4 gap-5">
        {skills?.map(skill => (
          <Skill 
            key= {skill._id}
            skill={skill}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default Skills