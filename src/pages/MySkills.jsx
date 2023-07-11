import React from 'react'
import LineGradient from  "../components/LineGradient"
import useMediaQuery from '../hooks/useMediaQuery'
import {motion} from "framer-motion"
import skillsImg from "../assets/skills-image.png"
import nodeImg from "../assets/node.png"
import reactImg from "../assets/react.png"
import gitImg from "../assets/git.png"
import javaImg from "../assets/javascript.png"
import sassImg from "../assets/sass.png"
import nextJsImg from "../assets/nextjs.png"
import tailwindImg from "../assets/Tailwind.png"
import typeScriptImg from "../assets/typescript.png"
import sql from "../assets/sql.png"
import mongoDbImg from "../assets/mongoDB.png"
import reduxImg from "../assets/Redux.png"
import graphSQl from "../assets/graphql.png"


const MySkills = () => {
    const isAboveLarge = useMediaQuery("(min-width:1060px)");


  return (
    <section id="skills" className="pt-10 pb-30">
    {/* HEADER AND IMAGE SECTION */}
    <div className="md:flex md:justify-between md:gap-16 mt-32">
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5">
          MY <span className="text-red">SKILLS</span>
        </p>
        <LineGradient width="w-1/3" />
        <p className="mt-10 mb-7">
          I'm very passionate about FrontEnd development and I want to develop myself in this branch and improve my skills.
        </p>
      </motion.div>

      <div className="mt-16 md:mt-0">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
            before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="skills"
              className="z-10"
              src={skillsImg}
            />
          </div>
        ) : (
          <img alt="skills" className="z-10" src={skillsImg} />
        )}
      </div>
    </div>

    {/* SKILLS */}
    <div className="md:flex md:justify-between mt-16 gap-32">
      {/* EXPERIENCE */}
      <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="relative h-32">
          <div className="z-10">
            <p className="font-playfair font-semibold text-5xl">01</p>
            <p className="font-playfair font-semibold text-3xl mt-3">
              Experience
            </p>
          </div>
          <div className="w-1/2 md:w-3/4 h-32 content-experience object-fit absolute right-0 top-0 z-[-1]" />
        </div>
        <p className="mt-5">
        Over time I have accumulated experience working in multinational companies with different teams and projects,
          but in the last 3 years I started to study programming and discover my passion for FrontEnd development.
        </p>
      </motion.div>

      {/* INNOVATIVE */}
      <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="relative h-32">
          <div className="z-10">
            <p className="font-playfair font-semibold text-5xl">02</p>
            <p className="font-playfair font-semibold text-3xl mt-3">
              Innovative
            </p>
          </div>
          <div className="w-1/2 md:w-3/4 h-32 content-innovative object-fit absolute right-0 top-0 z-[-1]" />
        </div>
        <p className="mt-5">
        I am a truly innovative individual, constantly pushing the boundaries of what is possible and inspiring those around me with my creative thinking. Trying to train my mind to be a wellspring of original ideas, always brimming with 
        fresh perspectives and unique approaches to problem-solving.
        </p>
      </motion.div>
      {/* IMAGINATIVE */}
      <motion.div
        className="md:w-1/3 mt-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="relative h-32">
          <div className="z-10">
            <p className="font-playfair font-semibold text-5xl">03</p>
            <p className="font-playfair font-semibold text-3xl mt-3">
              Imaginative
            </p>
          </div>
          <div className="w-1/2 md:w-3/4 h-32 content-creativity object-fit absolute right-0 top-0 z-[-1]" />
        </div>
        <p className="mt-5">
        With my imaginative prowess, I effortlessly weave together ideas, concepts, and perspectives, creating innovative solutions and fresh approaches.
        I always can think outside the box, connecting seemingly unrelated dots and generating unique insights 
        that spark creativity and drive progress.
        </p>
      </motion.div>
    </div>
    {/*Tehnologies*/}
    <p className="font-playfair font-semibold text-4xl mb-5 mt-10">
          Tech<span className="text-blue">nologies</span>
        </p>
    <div className="mt-12 sm:grid-cols-3 gap-10 grid grid-cols-4">
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-16 md:mt-0  w-16 md:w-20 lg:w-30 gap-8">
        <ul>
          <li>
            <img alt="tehnologies" className="bg-contain bg-center w-18" src={nodeImg} />
          </li>
        </ul>
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-16 md:mt-0  w-16 md:w-20 lg:w-30 gap-8">
        <ul>
          <li>
            <img alt="tehnologies" className="bg-contain bg-center w-18" src={reactImg} />
          </li>
        </ul>
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-16 md:mt-0 w-16 md:w-20 lg:w-30">
        <ul>
          <li>
            <img alt="tehnologies" className="bg-contain bg-center w-18" src={gitImg} />
          </li>
        </ul>
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-16 md:mt-0 w-16 md:w-20 lg:w-30">
        <ul>
          <li>
            <img alt="tehnologies" className="bg-contain bg-center w-18" src={javaImg} />
          </li>
        </ul>
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-16 md:mt-0  w-16 md:w-20 lg:w-30">
        <ul>
          <li>
            <img alt="tehnologies" className="bg-contain bg-center w-18" src={sassImg} />
          </li>
        </ul>
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-16 md:mt-0  w-16 md:w-20 lg:w-30">
        <ul>
          <li>
            <img alt="tehnologies" className="bg-contain bg-center w-18" src={tailwindImg} />
          </li>
        </ul>
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-16 md:mt-0 w-16 md:w-20 lg:w-30">
        <ul>
          <li>
            <img alt="tehnologies" className="bg-contain bg-center w-18 md:w-32" src={nextJsImg} />
          </li>
        </ul>
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-16 md:mt-0 w-16 md:w-20 lg:w-30">
        <ul>
          <li>
            <img alt="tehnologies" className="bg-contain bg-center w-18 md:w-32" src={typeScriptImg} />
          </li>
        </ul>
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-16 md:mt-0  w-16 md:w-20 lg:w-30">
        <ul>
          <li>
            <img alt="tehnologies" className="bg-contain bg-center w-18" src={sql} />
          </li>
        </ul>
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-16 md:mt-0  w-16 md:w-20 lg:w-30">
        <ul>
          <li>
            <img alt="tehnologies" className="bg-contain bg-center w-18" src={mongoDbImg} />
          </li>
        </ul>
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-16 md:mt-0  w-16 md:w-20 lg:w-30">
        <ul>
          <li>
            <img alt="tehnologies" className="bg-contain bg-center w-18" src={graphSQl} />
          </li>
        </ul>
        </div>
      </motion.div>
      <motion.div
        className="md:w-1/3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="mt-16 md:mt-0  w-16 md:w-20 lg:w-30">
        <ul>
          <li>
            <img alt="tehnologies" className="bg-contain bg-center w-18" src={reduxImg} />
          </li>
        </ul>
        </div>
      </motion.div>
    </div>
  </section>
  )
}

export default MySkills