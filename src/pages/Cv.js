import "../css/Cv.css"
import myCV from "../MyCv-Pdf/ISRAEL_RESUME.pdf"

const Cv = () => {
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