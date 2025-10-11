import React, { useState, useEffect, useRef } from 'react'
import AppearOnScroll from '../Utility/AppearOnScroll'

const Theatre = ({ leftCurtainColor = '#3b82f6', rightCurtainColor = '#22c55e' }) => {
  const [curtainsOpen, setCurtainsOpen] = useState(false)
  const sectionRef = useRef(null)

  // Curtain reveal logic
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !curtainsOpen) setCurtainsOpen(true)
        })
      },
      { threshold: 0.5, rootMargin: '0px' }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [curtainsOpen])

  return (
    <div 
    id='theater'
      ref={sectionRef}
      style={{
        backgroundImage: "url('https://ik.imagekit.io/greenraven/MGC/cinema.png?updatedAt=1752482642467')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      className="pb-10 md:py-20 min-h-screen relative overflow-hidden"
    >
      {/* ---------------- Curtains ---------------- */}
      {/* Left Curtain */}
      <div
        className={`absolute top-0 left-0 h-full transition-all duration-[2000ms] ease-in-out ${
          curtainsOpen ? '-translate-x-3/4 scale-x-75' : 'translate-x-0 scale-x-100'
        }`}
        style={{
          width: '50%',
          background: `linear-gradient(90deg, ${leftCurtainColor} 0%, ${leftCurtainColor}CC 50%, ${leftCurtainColor} 100%)`,
          transformOrigin: 'left center',
          borderRadius: curtainsOpen ? '0 50px 50px 0' : '0',
          boxShadow: 'inset -15px 0 30px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Pleats */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-1 opacity-20 bg-black"
              style={{
                left: `${(100 / 12) * i + 4}%`,
                transform: curtainsOpen
                  ? `translateX(-${i * 8}px) scaleY(0.95)`
                  : 'translateX(0) scaleY(1)',
                transition: 'transform 8s ease-in-out',
                transitionDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>

        {/* Texture */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              background:
                'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.1) 8px, rgba(0,0,0,0.1) 16px)',
            }}
          />
        </div>
      </div>

      {/* Right Curtain */}
      <div
        className={`absolute top-0 right-0 h-full transition-all duration-[2000ms] ease-in-out ${
          curtainsOpen ? 'translate-x-3/4 scale-x-75' : 'translate-x-0 scale-x-100'
        }`}
        style={{
          width: '50%',
          background: `linear-gradient(270deg, ${rightCurtainColor} 0%, ${rightCurtainColor}CC 50%, ${rightCurtainColor} 100%)`,
          transformOrigin: 'right center',
          borderRadius: curtainsOpen ? '50px 0 0 50px' : '0',
          boxShadow: 'inset 15px 0 30px rgba(0, 0, 0, 0.2)',
        }}
      >
        {/* Pleats */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute h-full w-1 opacity-20 bg-black"
              style={{
                left: `${(100 / 12) * i + 4}%`,
                transform: curtainsOpen
                  ? `translateX(${i * 8}px) scaleY(0.95)`
                  : 'translateX(0) scaleY(1)',
                transition: 'transform 8s ease-in-out',
                transitionDelay: `${i * 0.05}s`,
              }}
            />
          ))}
        </div>

        {/* Texture */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              background:
                'repeating-linear-gradient(90deg, transparent, transparent 8px, rgba(0,0,0,0.1) 8px, rgba(0,0,0,0.1) 16px)',
            }}
          />
        </div>
      </div>

      {/* Curtain Rod + Brackets */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-amber-700 to-amber-900 shadow-lg z-20" />
      <div className="absolute top-0 left-4 w-6 h-8 bg-gradient-to-b from-amber-600 to-amber-800 rounded-b-lg z-20" />
      <div className="absolute top-0 right-4 w-6 h-8 bg-gradient-to-b from-amber-600 to-amber-800 rounded-b-lg z-20" />

      {/* ---------------- Content ---------------- */}
      <div className="lg:h-screen pt-20 lg:pt-0  flex flex-col justify-center items-center text-white">
        {/* Title */}
        <AppearOnScroll animationClass="shiftUp" delay={600}>
          <div className="flex items-center">
            <img
              src="https://ik.imagekit.io/greenraven/MGC/ChatGPT%20Image%20Sep%2024,%202025,%2002_03_14%20PM.png"
              className="w-35 md:w-55 lg:w-45"
            />
            <h1 className="text-[2rem] md:text-5xl lg:text-[2.5rem] font-bold">
              <span className="text-color1">Theatre</span> <br /> &{' '}
              <span className="text-color2">Cinema</span>
            </h1>
          </div>
        </AppearOnScroll>

        <br />

        {/* Cards */}
        <div className="flex flex-col gap-5 md:gap-20  lg:flex-row lg:gap-20">
          {/* Card 1 */}
          <AppearOnScroll animationClass="shiftUp" delay={1000}>
            <div className="bg-color1 w-70 md:w-120 h-66 md:h-110 rotate-4 p-3 lg:w-80 lg:h-80">
              <img src="https://ik.imagekit.io/greenraven/MGC/pexels-tima-miroshnichenko-7991158.jpg?updatedAt=1758657641665" />
              <div className="text-center">
                <h1 className="font-bold text-2xl md:text-4xl lg:pb-2">Cinema Movies</h1>
                <p className="font-bold lg:text-sm">Nostalgic Movies to enjoy with friends & familiy</p>
              </div>
            </div>
          </AppearOnScroll>

          {/* Card 2 */}
          <AppearOnScroll animationClass="shiftUp" delay={1500}>
            <div className="bg-color2 w-70 md:w-120 h-66 md:h-110 rotate-4 p-3 lg:w-80 lg:h-80">
              <img src="https://ik.imagekit.io/greenraven/MGC/musical-theatre-wallpaper-3ci9o4mk4ygl321z.jpg?updatedAt=1758713853867" />
              <div className="text-center">
                <h1 className="font-bold text-2xl md:text-4xl lg:pb-2">Theatre Shows</h1>
                <p className="font-bold lg:text-sm">Comdey & educational theatrical shows for everyone</p>
              </div>
            </div>
          </AppearOnScroll>
        </div>
      </div>
    </div>
  )
}

export default Theatre
