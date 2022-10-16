import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import { urlFor } from '../sanity';
import { PageInfo } from '../typings';
import BackgroundCircles from './BackgroundCircles';

type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
    {/* Below is the use of the react typewriter library. */}
    const [text, count] = useTypewriter({
        words: [
            `Hi, The Name's ${pageInfo?.name}`,
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore />",
        ],
        loop: true,
        delaySpeed: 2000,
    });

    {/* Below is the start of the hero section. */}
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <picture>   
                <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src={urlFor(pageInfo?.heroImage).url()} alt="Alex Copley and his cat Buca" />
            </picture>
            
            <div className="z-20">
                <h2 className="text-md uppercase text-gray-500 pb-2 tracking-[10px]">
                    {pageInfo?.role}
                </h2>
                <h1 className="text-2xl md:text-5xl lg:text-6xl font-semibold px-5">
                    <span className="">{text}</span>
                    <Cursor cursorColor="#F7AB0A"/>
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>                
            </div>
        </div>
  )
}

export default Hero