import { ScrollTrigger, SplitText } from 'gsap/all';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Activities from './components/Activities'
import Theatre from './components/Theatre';
import Events from './components/Events';
import PingPongRoom from './components/PingPongRoom';
import Contact from './components/Contact';



gsap.registerPlugin(ScrollTrigger, SplitText)

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About />
      <Activities/>
      <Theatre/>
      <Events/>
      <PingPongRoom/>
      <Contact/>
    </main>
  )
}

export default App
