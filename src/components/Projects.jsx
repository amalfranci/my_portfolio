import React,{useEffect} from 'react'
import lookup from '../assets/projects/look_up.png'
import ecom from '../assets/projects//E_com.png'
import netflix from '../assets/projects/netflix.png'
import olx from '../assets/projects/olx.png'
import weather from '../assets/projects/weather.png'

import foodrecipe from '../assets/projects/food_recipe.png'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Projects = () => {
  useEffect(()=> {
    AOS.init({duration: 1000})
})

  const Projects = () => [
    {
      id: 1,
      src: lookup,
      desc: "Designed and implemented Look-Up, a dynamic social media platform leveraging a comprehensive tech stack including Node.js, React, JavaScript,MongoDB...",
      demo: "https://www.lookupzone.me/login",
      code: "https://github.com/amalfranci/SocialMedia_project-LookUp"
    },
    {
      id: 2,
      src: ecom,
      desc: "This Full-Stack Organic Vegitable & Fruits e-commerce website is made using Javascript, Node js, Express, Firebase....",
      demo: "https://freshtoohome.shop/",
      code: "https://github.com/amalfranci/Fresh_To_Home_E_commerce"
    },
    {
      id: 3,
      src: netflix,
      desc: "The Netflix-Clone is a mini project developed using the React framework and the TMDB API for dynamic content retrieval.lt seamlessly integrates the ......",
      demo: "https://fabulous-crostata-927137.netlify.app/",
      code: "https://github.com/amalfranci/netflix_clone"
    },
    {
      id: 4,
      src: olx,
      desc: "The Olx-Clone uses Firebase Firestore for backend and data storage, ensuring efficient data handling.",
      demo: "https://660520fa39d4b65b143879d6--ephemeral-donut-4a3d6f.netlify.app/",
      code: "https://github.com/amalfranci/Olx_clone"
    },
    {
      id: 5,
      src: weather,
      desc: "The Weather App uses the MERN stack and Axios for responsive design and data fetching. ",
      demo: "https://cosmic-beijinho-6a929c.netlify.app/",
      code: "https://github.com/amalfranci/Weather_React"
    },
//     {
//       id: 6,
//       src: todo,
//       desc: 
// "The Todo App, built with React, assists users in creating, organizing, prioritizing, and tracking tasks.",
//       demo: "https://660527be7282055e0b0950fa--delightful-toffee-1a0ca8.netlify.app/",
//       code: "https://github.com/amalfranci/Todo_app"
//     },
    {
      id: 6,
      src: foodrecipe,
      desc: 
"This is a Recipe Finder application using React and Redux that allows users to search for recipes based on ingredients they have,and able to browse through search results, view recipe details, and save their favorite recipes.",
      demo: "https://snazzy-moxie-608ca4.netlify.app/",
      code: "https://github.com/amalfranci/food_recipe_app"
    },
  ]


  return (
    <div name="projects" className='h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <h2 className='text-4xl font-bold inline border-b-4 border-gray-400'>Projects</h2>
          <p className='py-6'>Check out some of my work </p>
        </div>
        <div   className='grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0'>
          {
            Projects().map(({ id, src, desc, demo, code }) => (

              <div data-aos="fade-in" data-aos-duration="500" key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} alt="Ai" className='rounded-md duration-200 hover:scale-105' />
                <p className='p-2 text-justify font-extralight'>{desc}</p>
                <div className='flex items-center justify-center'>
                  
                  <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md'>
                    <a href={demo}>Demo</a>
                  </button>
                  <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md'>
                    <a href={code}>Code</a>
                  </button>
                </div>
              </div>

            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Projects