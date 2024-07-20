import "../css/Footer.css"
import {  FaLocationArrow , FaWhatsapp, FaGithub, FaLinkedin} from "react-icons/fa"

const Footer = () => {
  let year = new Date().getFullYear()

  return (
    <div className="Footer">
      <div className="social">
       <a href="https://linkedin.com/in/israel-eze-ab471a305"  rel="norerrer"> <FaLinkedin />  </a>
       <a href="contact" ><FaLocationArrow /></a>
        <a href="https://github.com/Eze-Israel"><FaGithub /></a>
        <a href="https://wa.me/07061033459" rel="norerrer"> <FaWhatsapp /></a>
        
      </div>
      <div className="copyright"> Copyright &copy; {year}  Eze Israel O</div>
    </div>
  )
}

export default Footer