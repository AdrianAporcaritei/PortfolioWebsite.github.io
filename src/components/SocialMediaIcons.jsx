import React from 'react'
import linkedIn from "../assets/linkedin.png"
import github from "../assets/github-mark-white.png"

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a 
        className='hover:opacity-50 transition duration-500'      
        href="https://www.linkedin.com/in/adrian-aporcaritei-0023851a8/"
        target='_blank'
        rel='noreferrer'
      >
        <img alt='linkedin-link' src={linkedIn}/>
      </a>
      <a 
        className='hover:opacity-50 transition duration-500'      
        href="https://github.com/AdrianAporcaritei"
        target='_blank'
        rel='noreferrer'
      >
        <img className='class="object-cover h-8 w-9' alt='github-link' src={github}/>
      </a>
    </div>
    
  )
}

export default SocialMediaIcons