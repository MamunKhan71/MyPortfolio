"use client"
import { useEffect, useState } from "react"
import axios from 'axios';
import { FaGithub, FaDribbble, FaFacebook } from "react-icons/fa"
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { RiNextjsFill } from "react-icons/ri";
import { SiAxios } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiVite } from "react-icons/si"
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiVercel } from "react-icons/si";
import { IoLogoLinkedin } from "react-icons/io";
import { SiNetlify } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiDaisyui } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiFlask } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion"
import { IoCloseCircle } from "react-icons/io5";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lottie from "lottie-react";
import education from "../components/animate/education.json";
function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    })
  }, [])
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [iframe, setIframe] = useState([])

  const handleViewProjectClick = (proejectId, liveLink) => {
    setIframe(liveLink)
    document.getElementById(`my_modal_2/${proejectId}`).showModal();
  }
  const skillsArray = [
    { name: "HTML5", icon: FaHtml5 },
    { name: "CSS3", icon: FaCss3Alt },
    { name: "JavaScript", icon: DiJavascript },
    { name: "Tailwind CSS", icon: RiTailwindCssFill },
    { name: "Firebase", icon: IoLogoFirebase },
    { name: "Next.js", icon: RiNextjsFill },
    { name: "Axios", icon: SiAxios },
    { name: "Node.js", icon: FaNodeJs },
    { name: "Vite", icon: SiVite },
    { name: "React", icon: FaReact },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Express", icon: SiExpress },
    { name: "Vercel", icon: SiVercel },
    { name: "Netlify", icon: SiNetlify },
    { name: "Postman", icon: SiPostman },
    { name: "DaisyUI", icon: SiDaisyui },
    { name: "Ant Design", icon: SiAntdesign },
    { name: "JSON Web Tokens", icon: SiJsonwebtokens },
    { name: "Python", icon: FaPython },
    { name: "Flask", icon: SiFlask },
    { name: "GitHub", icon: FaGithub }
  ];
  useEffect(() => {
    axios.get('project.json')
      .then(data => setProjects(data.data))
  }, []);
  return (
    <>
      <motion.div className="progress-bar h-0.5 bg-amber-400" style={{ scaleX }} />
      <div className="p-4 lg:p-0 w-full">
        <div className="poppins space-y-16 container mx-auto py-24">
          <div className="w-full flex items-center justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
              <figure className="px-10 pt-10">
                <Image src={'https://res.cloudinary.com/dz3kxnsxr/image/upload/v1718848241/Mamun_Formal_Pic_cu5ewc.png'} width={192} height={192} className="rounded-full shadow-sm"></Image>
              </figure>
              <div className="card-body space-y-3 items-center text-center">
                <h2 className="card-title">Md. Mamun</h2>
                <p className="text-gray-400">Front-End Developer / Designer</p>
                <hr className="w-full" />
                <div className="flex gap-4">
                  <a href="https://github.com/MamunKhan71" className="btn btn-circle hover:text-white transition-all duration-200">
                    <FaGithub className="text-2xl  hover:text-white" />
                  </a>
                  <a href="https://www.linkedin.com/in/mdmamun99/" className="btn btn-circle hover:text-white transition-all duration-200">
                    <IoLogoLinkedin className="text-2xl  hover:text-white" />
                  </a>
                  <a href="https://fb.com/mkmamun111" className="btn btn-circle hover:text-white transition-all duration-200">
                    <FaFacebook className="text-2xl  hover:text-white" />
                  </a>
                  <a href="mailto:mkmamun031@gmail.com" className="btn btn-circle hover:text-white transition-all duration-200">
                    <MdOutlineAttachEmail className="text-2xl  hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex space-y-4 flex-col w-full items-center justify-center">
            <h1 className="font-bold text-3xl text-center">My Background</h1>
            <p className="text-center font-medium text-gray-500 max-w-6xl leading-8">
              Highly motivated Junior Software Developer with a strong foundation in HTML, CSS,
              JavaScript, DOM manipulation, Object-Oriented Programming (OOP), ES6, React, and
              Tailwind CSS. Proficient in utilizing technologies such as Firebase, Next.js, Axios,
              Node.js, Vite, MongoDB, Express, Vercel, Netlify, Postman, DaisyUI, Ant Design, JSON
              Web Tokens, Python, Flask, and GitHub. Seeking an entry-level position to further enhance
              skills and contribute to impactful software projects.
            </p>
          </div>
          <div>
            <div className='my-10'>
              <ul className="flex gap-6 flex-wrap items-center justify-center">
                {skillsArray?.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <li key={index}>
                      <label data-tip={skill.name} htmlFor="router-option" className="tooltip tooltip-top inline-flex items-center justify-center w-full p-5 border rounded-xl hover:bg-gray-200 transition-all">
                        <div className="flex text-gray-700 flex-col gap-2 items-center justify-center w-full text-2xl">
                          <IconComponent />
                        </div>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="space-y-24">
            <h1 className="font-bold text-3xl text-center">My Projects</h1>
            <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {projects?.map((project, index) => (
                <div key={index} className="card card-side flex-col lg:flex-row bg-base-100 shadow-xl p-6">
                  <figure className="rounded-xl shadow-md h-80 w-full lg:w-96"><img className="h-full w-full rounded-xl  object-cover" src={project["Thumbnail URL"]} alt={project['Project Name']} /></figure>
                  <div className="card-body items-center lg:items-start space-y-4 lg:space-y-0">
                    <h2 className="card-title text-center lg:text-left">{project['Project Name']}</h2>
                    <p className="w-full lg:max-w-md text-center lg:text-left">{project["Description"]}</p>
                    <div className="card-actions justify-center lg:justify-end">
                      <button onClick={()=> handleViewProjectClick(project["Project ID"], project["Live Link"])} className="rounded px-5 py-2.5 overflow-hidden group bg-gray-500 relative hover:bg-gradient-to-r hover:from-gray-500 hover:to-gray-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="inline-flex items-center gap-2">View Project <FaExternalLinkAlt /></span>
                      </button>
                      <a href={project["Source Code"]} className="rounded px-5 py-2.5 overflow-hidden group bg-black relative hover:bg-gradient-to-r hover:from-black hover:to-gray-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-gray-400 transition-all ease-out duration-300">
                        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                        <span className="inline-flex items-center gap-2">Source Code <FaExternalLinkAlt /></span>
                      </a>
                      <dialog id={`my_modal_2/${project["Project ID"]}`} className="modal">
                        <div className="modal-box w-11/12 max-w-full" style={{ height: `${window.innerHeight}px` }}>
                          <div className="space-y-4 rounded-xl h-full iframe-scroll overflow-hidden">
                            <div className="flex items-center gap-2 justify-end w-full">
                              <a href={`${project["Live Link"]}`} target="_blank" className="btn rounded-full"><img className="w-6 h-6" src="live.gif"></img>Watch Live</a>
                              <div className="modal-action m-0">
                                <form method="dialog">
                                  <button onClick={()=> setIframe("")} className="btn btn-circle">
                                    <IoCloseCircle className="text-2xl" />
                                  </button>
                                </form>
                              </div>
                            </div>
                            <iframe className="w-full h-full rounded-xl shadow-sm" onLoad={() => setLoading(false)} src={iframe} />
                          </div>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                          <button>close</button>
                        </form>
                      </dialog>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex space-y-16 flex-col w-full items-center justify-center">
            <h1 className="font-bold text-3xl text-center">My Educational Background</h1>
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
              <div className="flex-1 w-full flex items-center justify-start">
                <Lottie animationData={education} loop={true} />
              </div>
              <div className="flex-1 w-full flex items-center justify-center">
                <ol className="relative border-s border-gray-200 dark:border-gray-700 w-full">
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none">2020 - 2024</time>
                    <h3 className="text-lg font-semibold ">BSc. in Computer Science and Engineering</h3>
                    <p className="mb-4 text-base font-normal">Daffodil International University</p>
                    <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">CGPA - 3.64 out of 4.00</a>
                  </li>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none">2017 - 2019</time>
                    <h3 className="text-lg font-semibold ">Higher Secondary School Certificate</h3>
                    <p className="mb-4 text-base font-normal">Uttara High School and College</p>
                    <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">GPA - 3.92 out of 5.00</a>
                  </li>
                  <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none">2015 - 2017</time>
                    <h3 className="text-lg font-semibold ">Secondary School Certificate</h3>
                    <p className="mb-4 text-base font-normal">Chandina Pilot Model High School</p>
                    <a className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">GPA - 5.00 out of 5.00</a>
                  </li>
                </ol>
              </div>
            </div>
          </div>

        </div>
        <footer className="mb-12">
          <h1 className="poppins text-center text-gray-400 font-semibold">All rights reserved by &copy; <a href="https://www.fb.com/mkmamun111">Md. Mamun</a></h1>
        </footer>
      </div>
    </>

  );
}

export default HomePage;
