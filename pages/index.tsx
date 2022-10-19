import type { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import About from '../components/About';
import ContactMe from '../components/ContactMe';
import WorkExperience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import { sanityClient } from "../sanity"
import { groq } from "next-sanity"
import { Experience, PageInfo, Project, Skill, Social } from "../typings"
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}


const Home = ({ pageInfo, experiences, projects, skills, socials }: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>

      <Header socials={socials}/>
      

      <section id="hero">
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about">
        <About pageInfo={pageInfo}/>
      </section>

      <section id="experience">
        <WorkExperience experiences={experiences}/>
      </section>

      <section id="skills">
        <Skills skills={skills}/>
      </section>

      <section id="projects">
        <Projects projects={projects}/>
      </section>

      <section id="contact">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
          <picture> 
            <img 
            className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
            src="https://media-exp1.licdn.com/dms/image/C4E03AQF3LTCXBHrpjw/profile-displayphoto-shrink_400_400/0/1646153695438?e=1671062400&v=beta&t=Swsiikzy6fdIs0oeftirN9X9TkM0r4uhYd-j5LJSgR0" alt="return to top" />
          </picture>
          </div>
        </footer>
      </Link>

    </div>
  );
};

export default Home

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await sanityClient.fetch(groq`*[_type == "pageInfo"][0]`)
  const experiences: Experience[] = await sanityClient.fetch(groq`*[_type == "experience"] {...,technologies[]->}`)
  const skills: Skill[] = await sanityClient.fetch(groq`*[_type == "skill"]`)
  const projects: Project[] = await sanityClient.fetch(groq`*[_type == "project"] {...,technologies[]->}`)
  const socials: Social[] = await sanityClient.fetch(groq`*[_type == "social"]`)
 
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  }
}