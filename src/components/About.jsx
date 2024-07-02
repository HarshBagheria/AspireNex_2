import React from 'react'

function About() {
  return (
    <div  name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-5"> 
       <div>
          <h1 className="text-3xl font-bold mb-5">ABOUT</h1>
          <p>I'm Harsh, currently pursuing B.Tech in Information Technology at NSUT, Delhi (2021-2025). With a strong foundation from Kendriya Vidyalaya, where I scored 91.8% in Class XII CBSE, I specialize in creating impactful software solutions using HTML, CSS, JavaScript, React JS, and Node.js. My expertise extends to databases like MongoDB and SQL, alongside proficiency in C++ and Data Structures and Algorithms. Passionate about cricket and eager to connect on building innovative projects!</p>
          <br />
          <h1 className="text-red-500 font-semibold text-xl">Education</h1>
          <p  > CLASS XII | KENDRIYA VIDYALAYA   |   91.8 %   |  CBSE</p>
          <p >BTECH IN INFORMATION TECHNOLOGY |  2021-2025  |  NSUT , DELHI </p>
          <br />
          <h1 className="text-red-500 font-semibold text-xl">SKILLS </h1>
          <p  > HTML | CSS |   JAVASCRIPT  |   REACT JS  |   NODE JS   |  EXPRESSjs  |   MONGO DB  |  SQL  |   CPP  | DATA STRUCTURE AND ALGORITM</p>
          <p  >Core Subjects : OPERATING SYSTEM  |    OOPS    | COMPUTER NETWORK    |     DBMS</p>
       </div> 
       <br />
       <hr />
     </div>
  )
}

export default About