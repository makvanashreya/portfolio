import React, { useState } from 'react';
import {FaBars, FaTimes} from 'react-icons/fa';
import {Link} from 'react-scroll';


const NavBar = () => {

    const [nav,setnav] = useState(false);


    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: "About"
        },
        {
            id: 3,
            link: "Portfolio"
        },
        {
            id: 3,
            link: "Experience"
        },
        {
            id: 4,
            link: "Contact"
        },
    ];
  return (
    <div className='flex justify-between items-center px-4 w-full h-20 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Shreya</h1>
        </div>

        <ul className='hidden md:flex'>
           {links.map(({id,link}) =>( 
           <li 
               key={id}
               className='px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 text-gray-500'>
            <Link to={link} smooth duration={500}>{link}</Link>
           </li>
            ))}   
        </ul>

        <div onClick={()=>setnav(!nav)}
             className='cursor-pointer pr-3 z-10 hover:scale-105 md:hidden text-gray-500'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30}/> }
        </div>

        {nav && (
            <ul className='flex flex-col absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 justify-center items-center'>
            
            {links.map(({id,link}) =>( 
               <li 
               key={id}
               className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                <Link
                onClick={() => setnav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
               </li>
                ))}       
            </ul>
        
        )}
    
    </div>
  );
};

export default NavBar