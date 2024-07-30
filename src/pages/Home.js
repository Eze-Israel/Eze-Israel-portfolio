import { useLayoutEffect } from "react"
import Hero from "../components/Hero"
import "../css/Home.css"
import Intro from "../components/Intro"
import ExampleComponent from "../components/TypeAnimation"

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (

    <div>
      <ExampleComponent />
  <Hero/>
  <Intro/>
  
  

    </div>
  )
}

export default Home