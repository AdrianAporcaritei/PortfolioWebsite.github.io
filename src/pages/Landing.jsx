import React from 'react'
import SocialMediaIcons from "../components/SocialMediaIcons"
import useMediaQuery from '../hooks/useMediaQuery'
import { motion } from "framer-motion"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import profileImg from "../assets/Profile.JPG"

const Landing = ({setSelectedPage}) => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  
  return (
    <section id='home' className='md:flex md:justify-between md:items-center md:h-full gap-16 py-10 mt-40'>
        {/*image section */}
        <div className='md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32'>
          {isAboveMediumScreens ? (
          <div
            className='relative z-0 ml-20 before:absolute 
            before:-top-10 before:-left-10 before:rounded-t-[400px] before:w-full before:max-w-[400px]
            before:h-full before:border-2 before:border-blue before:z-[-1]'
          >
            <img
              alt='profile'
              src={profileImg}
              className='rounded-t-[400px] hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                max-w-[400px] md:max-w-[600px]
              '
              />
          </div>
          ) : (
            <img
              alt='profile'
              src={profileImg}
              className='rounded-t-[400px] hover:filter hover:saturate-200 transition duration-500 z-10 w-full
                max-w-[400px] md:max-w-[600px]
              '
              />
          )}
          </div>
          <div className='z-30 basis-2/5 mt-12 md:mt-12'>
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, amount: 0.5}}
            transition={{duration: 0.5}}
            variants={{
              hidden: {opacity:0 , x: -50},
              visible: {opacity: 1, x: 0}
          }}
            >
              <p className='text-6xl font-playfair z-10 text-center md:text-start'>
                 Adrian {""}
                  <span 
                  className='xs:relative xs:font-semibold z-20
                  before:absolute before:-left-[10px] before:-top-[40px] before:z-[-1]
                  '
                  > Aporcaritei
                  </span>
              </p>
             
              <p className='mt-20 mb-7 text-md text-center md:text-start'>
                Hello, My name is Adrian, I'm a software developer who wants to evolve in this branch, I am an avid learner and believe in the power of continuous growth and I actively seek out opportunities to expand my knowledge.
                Thank you for visiting my portfolio and taking the time to learn more about me and my work. Please feel free to reach out to me with any inquiries or opportunities.
              </p>
            </motion.div>
            {/* Call to Actions*/}
            <motion.div
              className='flex mt-5 justify-center md:justify-center'
              initial="hidden"
              whileInView="visible"
              viewport={{once: true, amount: 0.5}}
              transition={{delay :0.2, duration: 0.5}}
              variants={{
                hidden: {opacity:0 , x: -50},
                visible: {opacity: 1, x: 0}
              }}
            >
              <AnchorLink
                className='bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transizion duration-500'
                onClick={()=> setSelectedPage("contact")}
                href='#contact'
              >
                Contact Me
              </AnchorLink>
              <AnchorLink
                classID='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
                onClick={()=> setSelectedPage("contact")}
                href='#contact'
              >
                <div
                  className='bg-deep-blue hover:text-sky-700 transition duration-500 w-full h-full flex items-center justity-center font-playfair px-10'
                >
                  Let's talk
                </div>
              </AnchorLink>
            </motion.div>
            <motion.div
                 className='flex mt-5 justify-center md:justify-center'
                 initial="hidden"
                 whileInView="visible"
                 viewport={{once: true, amount: 0.5}}
                 transition={{delay :0.4, duration: 0.5}}
                 variants={{
                   hidden: {opacity:0 , x: -50},
                   visible: {opacity: 1, x: 0}
                 }}
            >
              <SocialMediaIcons/>
            </motion.div>
          </div>
    </section>
  )
}

export default Landing