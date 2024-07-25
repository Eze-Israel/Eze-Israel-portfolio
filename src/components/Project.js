import "../css/Project.css"
import { useLayoutEffect } from "react"
import exam1 from "../Images/CBT EXAM PROJ.jpg"
import exam from "../Images/CBT PROJECT.jpg"
import  markets from "../Images/Corner-Store-E-commerce.jpg"
import  markets2 from "../Images/Electronics-Mart-eCommerce.jpg"
import  logistic from "../Images/logistics service.jpg"
import bank from "../Images/DIGITAL BANK.webp"


const Project = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
        <div className="Project-div">
          <h1 className="Topic">Projects</h1>
          {" "}
         <div className="first-projects"> 
        <div className="bankservices">
        <img src={bank} alt="BANK-PHOTO" className="BANK-PHOTO" />
        <h2>Digital Banking Services Limited </h2>
        {" "}
        <strong className="Tech-Stack">Tech Stack</strong>
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
         <div className="CBT" ><img src={exam} alt="CBT-proj" className="CBTPIX" />
        <img src={exam1} alt="CBT" className="CBTPIX" />
         <h2>Computer Based Exam Site/App </h2>
         {" "}
         <strong className="Tech-Stack">Tech Stack</strong>
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
         
    <div className="second-project">
         <div className="shopcarts">
        <img src={markets2} alt="E-MART" className="E-MARTPIX" /> 
        <img src={markets} alt="E-MART" className="E-MARTPIX" />
         <h2>King Israel E-marts/Commerce Services Limited</h2>
         {" "}
         <strong className="Tech-Stack">Tech Stack</strong>
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
         <h2>King Israel logistics Services Limited</h2>
         {" "}
         <strong class="Tech-Stack">Tech Stack</strong>
         <p>HTML5</p>
         <p>CSS3</p>
         <p>Javascript</p>
         <p>React</p>
         <p>Redux</p>
         <p>Tailwind</p>
         <p>Firebase</p>
         {" "}
         <a href="#"><button class="BTN">View Demo</button></a>

         </div>

        </div>
        


    </div>
  )
}

export default Project