import { useLayoutEffect } from "react"
import "../css/Cv.css"
import myCV from "../MyCv-Pdf/ISRAEL_RESUME1.pdf"

const Cv = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <a href={myCV} target="blank" rel="noopener noreferrer" className="DOWN-BTN" download> Download CV</a>
      <div className="pdf-container">
        <iframe 
          src={myCV + '#toolbar=0'}  type="application/pdf" 
          title="pdf"
          className="frame-pdf"
        />
      </div>
    </>
    )
}

export default Cv