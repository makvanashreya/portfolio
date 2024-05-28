import React from 'react'

const About = () => {
  return (
    <div 
         name="About" 
         className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        
        <div className='pb-8'>
            <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>About</p>  
        </div>

        <p className=' text-xl mt-20'>
             My Name is Shreya Makvana. I am currently studying in CGPIT, Uka Tarsadiya University.I want to be web developer.
        </p>
        <br/>
        <p className=' text-xl '>
             I created MyRecipe Book website using MERN stack. I am currently intern at MindNova Infotech.I also Created Pregacare & Baby nurishment App using java and PHP.
        </p>
        </div>
    </div>
  )
}

export default About