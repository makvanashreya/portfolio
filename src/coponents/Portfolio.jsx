import React from 'react'
import food from '../assets/portfolio/food.jfif'


const Portfolio = () => {
    const project= [

        {
          id: 1,
          src: food,
          title:"RecipeBook",
          description: "A RecipeBook Website using MERN stack.You can add your own recipe, search for recipes, Save recipes you like.",
          tecnology: ["React", "Nodejs", "MongoDB", "Express"],
        },
    ];

  return (
    <div name="Portfolio" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 text-white' >
        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-screen text-white '>
      <div className=' mb-20'>
        <p className=' text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Portfolio</p>
      </div>

      <div className=''>


      {
        project.map(({id, src, title,description,tecnology}) =>(

          <div
          key={id}
          className={'flex flex-wrap justify-center mb-8'}>
        <div className=' w-full lg:w-1/4'>
          <img src={src} height={150} width={150} alt="" className=' mb-6 rounded hover:scale-105 duration-500' />
        </div> 

        <div className=' w-full max-w-xl lg:w-3/4'>
            <h6 className=' mb-2 font-semibold'>{title}</h6>
            <p className=' mb-4 text-neutral-400'>{description}</p>
            {tecnology.map((tech,index) => (
                <span key={index} className=' mr-2 rounded bg-neutral-800 text-sm font-medium' >{tech}</span>
            ))}
        </div>
        </div>


        ))
      }



       
      </div>

    </div>
    </div>
  )
}

export default Portfolio