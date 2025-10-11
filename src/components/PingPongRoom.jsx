import PingPong from '../Utility/PingPong';
import AppearOnScroll from '../Utility/AppearOnScroll';

const PingPongRoom = () => {
  return (
    <div  id="pingpong"
    style={{
        backgroundImage: 'url(https://ik.imagekit.io/greenraven/MGC/wood.jpg?updatedAt=1752482651257)',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    }}
    className=' my-auto relative'>
      <img src='https://ik.imagekit.io/greenraven/MGC/ping%20pong.png?updatedAt=1758725869048' className=' hidden absolute top-10 z-50 w-30 sm:w-45 sm:top-20'/>
      <img src='https://ik.imagekit.io/greenraven/MGC/ping%20pong.png?updatedAt=1758725869048' className='hidden sm:block absolute  z-50 w-30 sm:w-45 sm:bottom-10 sm:right-0'/>

     <AppearOnScroll animationClass={'slideUp'} delay={300}>
      <h1 
      style={{textShadow:" 2px 2px 2px rgba(0,0,0,1)"}}
      className='text-2xl md:text-5xl font-extrabold text-green-500 text-center py-5'>Ping Pong Room For Resevation!</h1>
     </AppearOnScroll>
     <div className='flex justify-center pb-10'>
      <PingPong/>
     </div>
    </div>
  )
}

export default PingPongRoom
