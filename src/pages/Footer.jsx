import React from 'react'
import SocialMediaIcons from '../components/SocialMediaIcons'

const Footer = () => {
  return (
        <footer className='h-60 bg-gradient-to-r from-cyan-500 to-blue-500 pt-10'>
            <div className='w-5/6 mx-auto'>
                <SocialMediaIcons/>
                <div>
                    <p className='md:flex justify-center md:justify-between text-center '>
                        ADRIAN APORCARITEI
                    </p>
                    <p className='font-playfair text-md text-yellow'>
                        ©2023 ADRIAN. All Rights Reserved.
                    </p>
                </div>
            </div>

        </footer>
  )
}

export default Footer