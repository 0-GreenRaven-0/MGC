import { useGSAP } from "@gsap/react"
import { SplitText } from "gsap/all"
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";

const Events = () => {

    const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  useGSAP(() => {
    const maskTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#events',
        start: `${isMobile ? 'top 80%' : 'top 60%'}`,
        toggleActions: 'play none none reverse',
      }
    })

    const eventTitle = new SplitText('#event-title', {
      type: 'words'
    })

    const eventText = new SplitText('#event-text', {
      type: 'lines'
    })

    
    maskTimeline
    .from(eventTitle.words, {
      xPercent: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.3,
      ease: "expo.out"
    })
    .from(eventText.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "expo.out"
    })
    .from('.event-grid', {
      yPercent: 100,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "expo.out"
    })
  })

  return (
    <div className='min-h-[80vh] overflow-hidden px-2 py-4 lg:p-15 ' id="events">
       <div className='event-texts'>
        <h1 id="event-title">Events & Summer Camps</h1>
        <p id="event-text">MGC hosts & participates in different kinds of events such as summer camps for kids where they enjoy all sorts kind of fun acitivites, training camps for the taekwondo students, taekwondo tournaments and shows events and more. </p>
       </div>
       <br/>
       <div className='event-grid'>
          <img src='https://ik.imagekit.io/greenraven/MGC/e1?updatedAt=1760115554101' className='event-img' id='img1'/>
          <img src='https://ik.imagekit.io/greenraven/MGC/e2?updatedAt=1760115573313' className='event-img' id='img4'/>
          <img src='https://ik.imagekit.io/greenraven/MGC/e4?updatedAt=1760115625698' className='event-img' id='img3'/>
          <img src='https://ik.imagekit.io/greenraven/MGC/e3?updatedAt=1760115611709' className='event-img' id='img2'/>
          <img src='https://ik.imagekit.io/greenraven/MGC/e5?updatedAt=1760115640078' className='event-img' id='img5'/>
       </div>
    </div>
  )
}

export default Events
