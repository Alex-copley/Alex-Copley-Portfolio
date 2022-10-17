import React from 'react'
import { motion } from "framer-motion";
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
  skill: Skill
}

const Skill = ({ skill }: Props) => {
  return (
    <div className="">
        <motion.img
            initial={{
                opacity: 0,
            }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x:0 }}
            src={urlFor(skill?.image).url()}
            className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-32 md:h-32"
        />
    </div>
  )
}

export default Skill