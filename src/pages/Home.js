import { useLayoutEffect } from "react"
import Hero from "../components/Hero"
import "../css/Home.css"
import Intro from "../components/Intro"

const Home = () => {
  useLayoutEffect(() => {
    window.scrollTo = 0
  }, [])

  return (
    <div>
  <Hero/>
  <Intro/>
  

    </div>
  )
}

export default Home