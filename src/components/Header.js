import { useState } from "react";
import "../css/Header.css"
import { FaBars, FaTimes , FaPhone} from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobile, setMobile] = useState(true)

  const handleMobileChange = () => {
    setMobile(!mobile)
    
  }
  const handlelogoname = () => {
    setMobile(mobile)
    
  }
  
  

 
  return (
    <div className="Header">
      <span><Link to="/" className="name" onClick={handlelogoname}> Eze Israel O</Link></span> 
      <p className="phone"><FaPhone className="phone"/> {" " }{ " "}+2347061033459</p>
      <div className="mobile-icon" onClick={handleMobileChange}>
        {mobile ? <FaBars /> : <FaTimes />}
      </div>
      <ul className={mobile ? 'nav-menu' : 'nav-menu show'}>
        <li> <Link to="/" className="nav-item" onClick={handleMobileChange}>Home</Link></li>
        <li><Link to="about" className="nav-item" onClick={handleMobileChange}>About</Link></li>
        <li><Link to="skills" className="nav-item" onClick={handleMobileChange}>Skills & Projects</Link></li>
        <li><Link to="contact" className="nav-item" onClick={handleMobileChange}>Contact</Link></li>
        <li><Link to="cv" className="nav-item" onClick={handleMobileChange}>MyCV</Link></li>
      </ul>
    </div>
  )
}

export default Header