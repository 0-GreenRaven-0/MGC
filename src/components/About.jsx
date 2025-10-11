import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { SplitText } from 'gsap/all'

const About = () => {

    useGSAP(() => {
        const maskTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top top',
                end: 'bottom center',
                scrub: 1.2,
                pin: true
            }
        })

        const aboutTitle = new SplitText('.about-title', {
            type: "lines",
        })
        const aboutText = new SplitText('.about-text', {
            type: "lines",
        })

        maskTimeline
            .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
            .to('.masked-img', { scale: 1, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut' })
            .from(aboutTitle.lines, {
                yPercent: 150,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "expo.out"
            })
            .from(aboutText.lines, {
                yPercent: 150,
                opacity: 0,
                duration: 1,
                stagger: 0.3,
                ease: "expo.out"
            })

    })

    return (
        <div id='about' className='min-h-screen p-0 pt-20 bg-gradient-to-tr from-background relative flex-center-col'>
            <h1 className='will-fade absolute top-50 max-md:top-40 lg:top-20'>What is MGC?</h1>
            <div className='content about-bg masked-img sm:[mask-size:31%] lg:[mask-size:25%] lg:[mask-position:center_30%] w-full'>
                {/* mask image */}
                <img src='https://ik.imagekit.io/greenraven/MGC/logo.png?updatedAt=1752482482251' className='abs-center lg:top-69 w-50 md:w-60 will-fade   lg:w-90'/>
                {/* the hidden content */}
                <h2 className=' about-title'>Physical & Educational Center</h2>
                <img src='https://ik.imagekit.io/greenraven/MGC/section2.png?updatedAt=1752482526764' className='max-md:w-130 lg:w-150 max-md:pt-5'/>
                <p className='about-text lg:w-200'>Miled El Ghazel Center (MGC) is a vibrant hub welcoming people of all ages. This dynamic center offers a wide range of activities that keep you active, entertained, and engaged.This establishment been up and running since 2003.</p>
            </div>
        </div>
    )
}

export default About