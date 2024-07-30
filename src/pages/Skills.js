import { useLayoutEffect } from "react"
import "../css/Skills.css"
import Languages from "../components/Languages"




const Skills = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="skills">
       
<div className="write">
   <h1>.Technical Skills:</h1>
   {" "}
   <h2>-Programming:</h2>
   {" "}
   <h4> Familiarity with React.Js,Javascript,
     tailwind, CSS3,JQuery,Redux,Html:5 and Firebase. </h4>
     {" "}
   <h1>.Soft Skills:</h1>
   {" "}
   <h2>-Communication:</h2>
   {" "}
   <p>Ability to Communicate technical information in non-technical terms to non-technical people</p>
   {" "}
   <h2>-Critical Thinking:</h2>
   {" "}
   <p>Ability to identify clients imaginery requests,design and Develop Users friendly websites, evaluate risks,and propose effective solutions</p>
   {" "}
   <h2>-Attention to Detail:</h2>
   {" "}
   <p>Careful observation and analysis of screen sizes to develop websites adaptable to any screen sizes </p>
   {" "}
   <h2>-Problem-Solving:</h2>
   {" "}
   <p>Quick and creative thinking to respond clients to demands.</p>
   {" "}
   <h2>Teamwork:</h2>
   {" "}
   <p>Collaborating effectively with colleagues to achieve common creative goals.</p>
   </div>
   
   
   
      
   <Languages/>
    </div>
    
    
  )
}

export default Skills