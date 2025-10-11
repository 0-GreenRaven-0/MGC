import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap";
import {FaArrowDown} from 'react-icons/fa'

const Hero = () => {

    useGSAP(() => {
        const heroSplit = new SplitText('.hero-title',{
            type: "lines"
        })

        const tl = gsap.timeline()

        tl.from(heroSplit.lines, {
            yPercent: 150,
            opacity: 0,
            duration: 1,
            ease: "expo.out",
            stagger: 0.1
        }, "+=0.5")
        .from('.hero-content', {
            yPercent: 150,
            opacity: 0,
            duration: 1.5,
            ease: "expo.out",
        })
    },[])


  return (
    <div className='section hero'>
      <p className='hero-title lg:z-100 lg:w-200'>Your Kind of Happy Place Where Passion Meets Results!</p>
      <br/>
      <div className="hero-content">
      <p className="hero-p lg:z-100 lg:w-[55%] ">This is the place where you and your kids can enjoy and learn new physical and educational activities!</p>
      <br/>
      <a href="#activities" className="btn1 hero-btn">See our Activities <FaArrowDown/></a>
      </div>

      <img src="https://ik.imagekit.io/greenraven/MGC/section1.png?updatedAt=1752482518710" className="hero-img"/>
      <img src="https://ik.imagekit.io/greenraven/MGC/dec3.png?updatedAt=1752482521309" className="hero-dec1"/>
      <img src="https://ik.imagekit.io/greenraven/MGC/decor.png?updatedAt=1752482528837" className="hero-dec2"/>
    </div>
  )
}

export default Hero
