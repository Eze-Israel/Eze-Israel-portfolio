import "../css/Intro.css"
import webintro from "../Images/web-interfaces-portfolio.jpg"
import { FaWhatsapp } from "react-icons/fa"

const Intro = () => {
  return (
    <div className="intro">
      <div className="div-image">
      <img src={webintro} alt="intoduction part" className="intro-img"></img>
     
      </div>

      <div className="div-text">
      <p className="text-plane">Hi there! 👋🏻 Consider this: over 60% of your potential customers 
        are accessing websites on their mobile devices. if your site isn't optimized for mobile, you're likely losing sales and engagement.
        A responsive design ensures that your website looks and functions perfectly on any device, providing an optimal user experience.</p>

      <p className="text-plane">A responsive website will enhance your brand image, 
        showing that you care about providing an excellent user experience across all devices.
         it's like having a virtual storefront that always open and welcoming to customers, no matter how they choose to acces it.</p>
         
        <p className="text-plane"> Reach out to me directly on whatsApp today to give your 
          business optimum visibility accros all devices <a href="https://wa.me/+2347061033459" rel="norerrer"> <FaWhatsapp  className="WatsBtn"/></a></p>
      </div>
      
    </div>
  )
}

export default Intro