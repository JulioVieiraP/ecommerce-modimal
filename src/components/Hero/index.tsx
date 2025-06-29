'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

const Hero = () => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 640)
    checkScreen()
    window.addEventListener('resize', checkScreen)
    return () => window.removeEventListener('resize', checkScreen)
  }, [])

  return (
    <div
      className="relative w-full"
      style={{ height: isMobile ? '551px' : '600px' }}
    >
      <Image
        src={isMobile ? '/mobile/Hero-mobile.png' : '/hero-desktop.jpeg'}
        alt="Fashion background"
        fill
        className={`object-cover ${isMobile ? 'object-center' : 'object-top'}`}
        quality={100}
        priority
      />

      <div className="container mx-auto px-4 absolute bottom-10 left-1/2 transform -translate-x-1/2 text-black">
        <p
          className="text-[20px] sm:text-4xl italic mb-8 sm:mb-7"
          style={{
            fontFamily: 'Gill Sans MT'
          }}
        >
          Elegance In Simplicity, <br />
          Earth’s Harmony
        </p>
        <button className="border border-black px-2 sm:px-16 py-2 text-[14px] bg-white text-black hover:bg-black hover:text-white transition">
          New In
        </button>
      </div>
    </div>
  )
}

export default Hero
