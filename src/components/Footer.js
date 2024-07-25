import "../css/Footer.css"
import {  FaLocationArrow , FaWhatsapp, FaGithub, FaLinkedin, FaEnvelope, FaPhone} from "react-icons/fa"

const Footer = () => {
  let year = new Date().getFullYear()

  return (
    <div className="Footer">
      <div className="cont-icon">
        <i><FaEnvelope className="mycontact"/>  Ezeisraeloluoma123@gmail.com</i>
        <p><FaPhone className="mycontact"/> +2347061033459</p>
      </div>
      <div className="social">
       <a href="https://linkedin.com/in/israel-eze-ab471a305"  rel="norerrer"> <FaLinkedin />  </a>
       <a href="contact" ><FaLocationArrow /></a>
        <a href="https://github.com/Eze-Israel"><FaGithub /></a>
        <a href="https://wa.me/+2347061033459" rel="norerrer"> <FaWhatsapp /></a>
        
      </div>
      <div className="copyright"> Copyright &copy; {year}  Eze Israel O</div>
      
    </div>
  )
}

export default Footer