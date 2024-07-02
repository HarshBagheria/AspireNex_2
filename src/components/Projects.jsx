import React from 'react'
import  react from "../../public/reactjs.png"
import node from "../../public/node.png"

function Projects() {
  const cardItem=[
    {
        id:1,
        logo:react,
        name:"REACTJS",
        title:"GUESS THE TIME",
        link: "https://guess-the-time-db3c6.web.app/",
        code:"https://github.com/HarshBagheria/Guess-the-time"
    },
    {
        id:2,
        logo:node,
        name:"NODEJS",
        title:"BLOG WEBSITE",
        link: "https://drive.google.com/file/d/1omQT7eaAEV5_r9v42qREs77R251FHloQ/view?usp=drivesdk",
        code:"https://github.com/HarshBagheria/Blog-Website"
    }   
  ]

  const handleLinkClick = (link) => {
    window.open(link, "_blank"); 
  };
  const handleCodeClick = (link) => {
    window.open(link, "_blank"); 
  };

  return (
    <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-5">
        <div>
            <h1 className="text-3xl font-bold mb-5">PROJECTS</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3" >
            {
                cardItem.map(({id,logo,name,title,link,code}) =>(
                   <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                      <img src={logo} className="w-[120px] h-[120px] p-1 rounded-full border-[2px]" alt="" />
                      <div>
                         <div className=" px-2 font-bold text-xl mb-2">{name}</div>
                         <p className="px-2 text-gray-700">{title}</p>
                      </div>
                      <div className="px-6 py-4 space-x-4 justify-around">

                        <button  onClick={() => handleLinkClick(link)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">LINK</button>
                        <button onClick={() => handleCodeClick(code)} className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">SOURCE CODE</button>
                      </div>
                   </div>
                ))
            }
            </div>
            <br />
            <br />
            <br />
            <hr />
        </div>
        
    </div>
  
  )
}

export default Projects
