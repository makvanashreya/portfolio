import React from 'react';
import Myimg from "../assets/Myimg.jpeg";
import { TbArrowNarrowRight } from "react-icons/tb";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name="home" 
        className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 '>

        <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">

            <div className=' flex flex-col justify-center h-full '>
                <h2 className=' text-4xl sm:text-7xl font-bold text-white'>I'm a Web Devloper</h2>
                <p className=' text-gray-500 py-4 max-w-md'>
                    I'm currently Studying in UTU....
                </p>

                <div>
                <Link
              to="Portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-purple-950  cursor-pointer hover:scale-110 duration-300"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <TbArrowNarrowRight size={25} className="ml-1" />
              </span>
            </Link>
                </div>
            </div>
            
            <div>
                <img src={Myimg} alt="my profile" 
                     className=' rounded-2xl mx-auto w-2/3 md:w-full hover:scale-110 duration-200' />
            </div>
        </div>
        
    </div>
  )
}

export default Home;