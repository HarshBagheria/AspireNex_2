import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { ReactTyped} from "react-typed";
import pic from "../../public/harsh.jpg"


function Home() {
 
  return (
    <>
    <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1" >
                <span className="text-xl">Welcome In My Feed</span>
                <div className="flex space-x-1 text-2xl md:text-4xl">
                    <h1>Hello, I'm a </h1>
                    {/* <span className="text-red-700 font-bold"> Developer</span>   */}
                    <ReactTyped className="text-red-700 font-bold"
                        strings={["Developer" ,"Programmer","Coder"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}
                    />
                </div>
                <br />
                <p className="text-sm md:text-md text-justify ">
                I'm Harsh, a passionate Web Developer pursuing a B.Tech in Information Technology from NSUT, Delhi (2021-2025). I specialize in creating impactful and visually stunning software solutions using HTML, CSS, JavaScript, and React. As a coder with strong skills in data structures and algorithms (DSA) and a keen interest in cricket, I invite you to check out my projects, including a React-based game. Let's connect and build something amazing!
                </p>
                <br />
                <div className="space-y-2 flex flex-col items-center justify-center ">
                    <h1 className="font-bold">Avialable on</h1>
                    <ul className="flex space-x-5">
                        <li>
                            <a href="https://www.linkedin.com/in/harsh-bagheria-085561249" target="_blank">
                            <FaLinkedin className="text-2xl cursor-pointer"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/HarshBagheria" target="_blank"> 
                            <FaGithub className="text-2xl cursor-pointer"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://leetcode.com/u/harshbagheria3/" target="_blank">
                            <SiLeetcode className="text-2xl cursor-pointer"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/harsh_ba6?igsh=ZXFnMGN3Ymd4Mmlw" target="_blank">
                            <FaSquareInstagram className="text-2xl cursor-pointer"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="md:w-1/2 md:ml-48 md:mr-45  h-screen flex items-center justify-center order-1">
                <img src={pic} className="rounded-full md:w-[400px] md:h-[500px] w-[300px] h-[300px] " alt="" />
            </div>
        </div>
    </div>
    </>

  )
}

export default Home