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
                x: -100,
                opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x:0 }}
            src={urlFor(skill?.image).url()}
            className="rounded-full border border-gray-500 object-cover w-20 h-20 xl:w-32 xl:h-32"
        />
    </div>
  )
}

export default Skill