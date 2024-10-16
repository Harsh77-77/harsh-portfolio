import React from 'react'
import sundown from "../assets/sundown.png";
import fleava from "../assets/fleava.png";
import UM from "../assets/UM.png";
import pop from "../assets/pop rock.png";
const Projects = () => {
  return ( 
    <section id="Projects" className="bg-slate-100 p-0 ">
      <div className=" w-full h-full">
           <h1 className="text-4xl font-bold pt-12 lg:text-7xl lg:pt-24 text-center ">Projects</h1>
         </div>
         <br></br>
         <p className="text-xl text-center text-slate-600">Recent Works</p>
         <p className="text-xl text-center  text-blue-500">
           Personal projects that demonstrate my skills and creativity
         </p>
         <br />
         <br />
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  max-w-6xl w-full">
        <div className="flex flex-col items-center text-center">
          <a href="https://harsh77-77.github.io/Sundown-/" target="_blank" rel="noopener noreferrer">
            <img
            // src={`${import.meta.env.BASE_URL}/assets/sundown.png`}
            src={sundown}
              alt="Sundown"
              className="h-72 w-auto rounded-xl transition-transform hover:scale-105 duration-300 hover:shadow-2xl"
            />
          </a>
          <h1 className="pt-6 text-3xl font-semibold">Sundown</h1>
          <p className="pt-3 max-w-md">
            Built a visually appealing website of Sundown studios, using HTML, CSS, JS. Featuring smooth scrolling animations & dynamic content.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <a href="https://harsh-assignment-pop-rock-crystal.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img 
            // src={`${import.meta.env.BASE_URL}/assets/pop rock.png`}
            src={pop}
            alt="pop rock crystal" className="h-72 w-auto rounded-xl transition-transform hover:scale-105 duration-300 hover:shadow-2xl" />
          </a>
          <h1 className="pt-6 text-3xl font-semibold">Pop Rock Crystal</h1>
          <p className="pt-3 max-w-md">
            Using Reactjs & TailwindCss build a responsive Landing Page
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <a href="https://fleava-psi.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img
            // src={`${import.meta.env.BASE_URL}/assets/fleava.png`}
            src={fleava}
              alt="Fleava"
              className="h-72 w-auto rounded-xl transition-transform hover:scale-105 duration-300 hover:shadow-2xl"
            />
          </a>
          <h1 className="pt-6 text-3xl font-semibold">Fleava</h1>
          <p className="pt-3 max-w-md">
            Built a Dynamic website using Locomotive JS, TailwindCss & ReactJS.
          </p>
        </div>

        <div className="flex flex-col items-center text-center">
          <a href="https://harsh-s-user-management-application.vercel.app/" target="_blank" rel="noopener noreferrer">
            <img
            // src={`${import.meta.env.BASE_URL}/assets/UM.png`}
            src={UM}
              alt="User Management App"
              className="h-72 w-auto rounded-xl transition-transform hover:scale-105 duration-300 hover:shadow-2xl"
            />
          </a>
          <h1 className="pt-6 text-3xl font-semibold">User Management App</h1>
          <p className="pt-3 max-w-md">
            This CRUD-based user management application allows for creating, reading, updating, and deleting users by interacting with the JSONPlaceholder API
          </p>
        </div>
      </div>
    </div></section>
  )
}

export default Projects