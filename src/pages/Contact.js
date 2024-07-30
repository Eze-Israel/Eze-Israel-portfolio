import { useLayoutEffect } from "react"
import "../css/Contact.css"
import { FaEnvelope, FaPhone, FaAddressBook, FaWhatsapp, FaGithub,  FaLinkedin} from "react-icons/fa"

const Contact = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="Contact" >
      
      <div className="Information">
        <p className="header">Contact Information</p>
         <br></br>
        <i className="con-text"><FaEnvelope className="con-icons"/> {" " }  Ezeisraeloluoma123@gmail.com</i>
        <br></br>
        <p className="con-text"><FaPhone className="con-icons"/> {" " }+2347061033459 </p>
        <br></br>
        <p className="website"><FaAddressBook className="con-icons"/> https://eze-israel.github.io/Eze-Israel-portfolio/ {"👋🏻 "}</p>
        <h3 className="follow">CONTACT ME ON</h3>
        <p className="Icons">
        <a href="https://linkedin.com/in/israel-eze-ab471a305"  rel="norerrer"> <FaLinkedin  className="icon-setup"/>  </a>
        <a href="https://github.com/Eze-Israel"><FaGithub className="icon-setup" /></a>
        <a href="https://wa.me/07061033459" rel="noreferrer"> <FaWhatsapp   className="icon-setup"/></a> </p>
      </div>
      


    </div>
  )
}

export default Contact