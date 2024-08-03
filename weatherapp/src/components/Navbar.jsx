import React from 'react'

export default function Navbar() {
  return (
   
 <>
 
 <div>
  <nav className="border-gray-200 rounded-xl  p-4">
    <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-center md:justify-between">
      <div className="text-white text-center">
        <p className="text-3xl sm:text-4xl font-bold mb-2">
          <i className="fa-duotone hover:hue-rotate-60 hover:scale-125 ease-linear snap-both fa-solid fa-sun fa-rotate-by fa-2xs mx-3" > </i>
         
         
            PHOTON</p>
        <span className="text-sm sm:text-md">
          Powered by{' '}
          <a
            className="text-blue-300 hover:underline"
            href="https://www.weatherapi.com/"
            target="_blank"
            rel="noopener noreferrer"
            title="Free Weather API"
          >
            WeatherAPI.com
          </a>
        </span>
      </div>
    </div>
  </nav>
</div>


 </>  )
}
