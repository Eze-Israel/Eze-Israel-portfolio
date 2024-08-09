import "../css/Project.css"
import { useLayoutEffect } from "react"
import exam1 from "../Images/CBT EXAM PROJ.jpg"
import exam from "../Images/CBT PROJECT.jpg"
import  markets from "../Images/Corner-Store-E-commerce.jpg"
import  markets2 from "../Images/Electronics-Mart-eCommerce.jpg"
import  logistic from "../Images/logistics service.jpg"
import bank from "../Images/DIGITAL BANK.webp"
import Crud from "../Images/CRUD.jpg"
import CBT from "../Images/CBT-EXAM.jpg"


const Project = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
        <div className="Project-div">
          <h1 className="Topic">PROJECTS</h1>
          {" "}
         <div className="first-projects"> 
        <div className="bankservices">
        <img src={bank} alt="BANK-PHOTO" className="BANK-PHOTO" />
        <h2>Digital Banking Services Limited </h2>
        {" "}
        <p className="Tech-S"><strong className="Tech-Stack">Tech Stack</strong></p>
        <p>HTML5</p>
        <p>CSS3</p>
        <p>Javascript</p>
        <p>React</p>
        <p>Redux</p>
        <p>Tailwind</p>
        <p>Firebase</p>
         {" "}
         <a href="#"><button className="BTN">View Demo</button></a>
        </div>
         <div className="CBT" ><img src={CBT } alt="CBT-proj" className="CBTPIX" />
        
         <h2>Computer Based Exam Site/App </h2>
         {" "}
         <p className="Tech-S"><strong className="Tech-Stack">Tech Stack</strong></p>
         <p>HTML5</p>
         <p>CSS3</p>
         <p>Javascript</p>
         <p>React</p>
         <p>Redux</p>
         <p>Tailwind</p>
         <p>Firebase</p>
         {" "}
         <a href="https://eze-israel.github.io/PGCBT/" target="blank"><button className="BTN">View Demo</button></a>
        </div>
     </div> 
         
    <div className="second-project">
         <div className="shopcarts">
        <img src={markets2} alt="E-MART" className="E-MARTPIX" /> 
        <img src={markets} alt="E-MART" className="E-MARTPIX" />
         <h2> E-Marts/Commerce Services </h2>
         {" "}
         <p className="Tech-S"><strong className="Tech-Stack">Tech Stack</strong></p>
         <p>HTML5</p>
         <p>CSS3</p>
         <p>Javascript</p>
         <p>React</p>
         <p>Redux</p>
         <p>Tailwind</p>
         <p>Firebase</p>
         {" "}
         <a href="#"><button className="BTN">View Demo</button></a>
        </div>
         
         <div className="logistics">
          <img src={logistic} alt="logistics" className="logisticsPIX" />
         <h2> Logistics Courier Services Website </h2>
         {" "}
         <p className="Tech-S"><strong className="Tech-Stack">Tech Stack</strong></p>
         <p>HTML5</p>
         <p>CSS3</p>
         <p>Javascript</p>
         <p>React</p>
         <p>Redux</p>
         <p>Tailwind</p>
         <p>Firebase</p>
         {" "}
         <a href="#"><button className="BTN">View Demo</button></a>

         </div>
         <div className="CRUD">
          <img src={Crud} alt="Crud" className="crudPIX" />
         <h2>A Create, Read, Update and Delete Web App </h2>
         {" "}
         <p className="Tech-S"><strong className="Tech-Stack">Tech Stack</strong></p>
         <p>HTML5</p>
         <p>CSS3</p>
         <p>Javascript</p>
         <p>React</p>
         <p>Redux</p>
         <p>Tailwind</p>
         <p>Firebase</p>
         {" "}
         <a href="#"><button className="BTN">View Demo</button></a>

         </div>

        </div>
        


    </div>
  )
}

export default Project