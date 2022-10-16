import React from 'react';
import { motion } from "framer-motion";
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    pageInfo: PageInfo
}

// https://mail.google.com/mail/u/3?ui=2&ik=d74e06cd5b&attid=0.1.1&permmsgid=msg-f:1723771273639750631&th=17ec10d72751ebe7&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8gKfS59PbJGf0UKKR9k79BNVIW3nXS8IaL4Y9kIM9aV1nhLIUZmB7zp5oD6l56UqBjHJ0QwXI6UW8hKK_QVzGmTjxvC18_YPgFm4rp0_-Uor7C25D_IfuHaaU&disp=emb

const About = ({ pageInfo }: Props) => {
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
        className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">

        <h3 className="absolute top-24 uppercase tracking-[15px] text-gray-500 text-2xl">
            About
        </h3>
        <motion.img 
        initial={{
            x: -200,
            opacity: 0,
        }}
        whileInView={{
            x: 0,
            opacity: 1,
        }}
        viewport={{
            once: true,
        }}
        transition={{
            duration: 1,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        />

        <div className="space-y-10 px-0 md:px-10">
            <h4 className="text-4xl font-semibold">
                Here is a <span className="underline decoration-[#F7AB0A]/60">little</span> background
            </h4>
            <p className="text-base">
                {pageInfo.backgroundInformation}
            </p>
        </div>
    </motion.div>
  )
}

export default About