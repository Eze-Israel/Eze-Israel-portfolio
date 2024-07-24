import { useLayoutEffect } from "react"
import "../css/About.css"
import kingPix from "../Images/king photo (2).jpg"

const About = () => {
  useLayoutEffect(() => {
    window.scrollTo = 0
  }, [])

  return (
    <div className="About">
      <img src={kingPix} className="About-Pix" alt="a young web developer dressed in suit standing"></img>
      <div className="About-textDiv">
      <h2> Hey, I'm ISRAEL EZE O</h2>
                👋🏻
                <h1 className="transit">Web Developer</h1>
                <p className="text-content">I am  an ethusiastic young man based in Lagos State Nigeria who loves technology, innovations and creativity.
                I graduated from  Next Imeprial Computer Training  Institute, where i took a course on Website Development with major concentration on HTML,CSS3,Javascript,Bootstrap,
                REACT.JS,JQuery,Redux,Website Hosting and graphic designing.</p>
                
                <p className="text-content">Having gained some years experience in designing user friendly websites, E-COMMERCE,Student Computer based Examination
                websites, Banking services websites for online payments for local clients and foreign clients. I am  currently a freelancer and also
                open for part-time and full time employment for any organization or client willing to indulge my services.
                </p>
                <div className="btn-div">
                <a href="skills"><button className="About-btn">Skills</button></a>
                <a href="contact"><button className="About-btn">Contact</button></a>
                <a href="cv"><button className="About-btn">CV</button></a>
                </div>

      </div>


    </div>
  )
}

export default About