import React from 'react'
import {useState} from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import useMediaQuery  from '../hooks/useMediaQuery';
import menuIcon from "../assets/menu-icon.svg"
import closeIcon from "../assets/close-icon.svg"

const Link = ({page, selectedPage, setSelectedPage}) =>{
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink 
            className={`${selectedPage === lowerCasePage ? "text-white" : ""} hover:text-blue transition duration-500`}
            href={`#${lowerCasePage}`}
            onClick={()=> setSelectedPage(lowerCasePage)}

        >
            {page}
        </AnchorLink>
    )
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveSmallScreens = useMediaQuery("(min-width: 768px)");
    const navbarBackground = isTopOfPage ? "" : "bg-gradient-to-r from-cyan-400 to-blue-500"


  return (
    <div className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
        <div className='flex items-center justify-between mx-auto w-5/6'>
            <h4 className='font-playfair text-3xl font-bold'>AA</h4>
            {}
            {isAboveSmallScreens ? (
                <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
                    <Link
                        page="Home"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Skills"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Projects"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Contact"
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                    />
                </div>
            ) : (<button
                    className='rounded-full bg-blue p-2'
                    onClick={()=> setIsMenuToggled(!isMenuToggled)}
                >
                    <img alt='menu-icon' src={menuIcon}/>
                </button>
            )}
            {/*MOBILE MENU */}
            {!isAboveSmallScreens && isMenuToggled &&(
                <div className='fixed right-0 bottom-0 h-full bg-blue w-[220px]'>
                    {/*CLOSE ICON 8*/}
                    <div className='flex justify-end  p-12'>
                        <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                            <img alt='close-icon' className='' src={closeIcon}/>
                        </button>
                    </div>
                    {/*MENU ITEMES */}
                    <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                        <Link
                            page="Home"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Skills"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Projects"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                        <Link
                            page="Contact"
                            selectedPage={selectedPage}
                            setSelectedPage={setSelectedPage}
                        />
                    </div>
                </div>
            )}
        </div>
    
    </div>
  )
}

export default Navbar