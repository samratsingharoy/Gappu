import React from 'react'

const Artist = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[transparent] rounded-xl shadow-lg p-6 md:p-10 text-gray-800 w-[80%] ml-[150px]">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 mb-6 md:mb-0">
        <h3 className="text-3xl font-bold text-orange-500">What is GAPPU?</h3>
        <p className="mt-4 text-base leading-relaxed">
          Voila! We’ve come to you to get your passion for music a percussive treatment with our wide range of percussion instruments: Cajon, <a href="#" className="text-orange-500 underline">Wooden Shaker</a>, Wooden Bongo, <a href="#" className="text-orange-500 underline">Foot Tambourine</a>, Cajon Drum, Octa Snare Cajon, Tilt Cajon, Travel Cajon, Small Cajon and Impulse Cajon are our prime creations to feed your soul. The proficient craftsmen devise them with care and compassion in our workshop while making productivity and longevity the priorities. All our instruments produce quality sound with unparalleled excellence.
        </p>
        <p className="mt-4 text-base leading-relaxed">
          We maintain a standard of ½ inch or 12mm thick multi-ply hardwood plywood which is more resilient than 5 ply cabinet grade plywood. <a href="#" className="text-orange-500 underline">Gappu Cajon</a> recommended by many renowned percussionists in India, wants to help the seed of music grow into a tree of solace within you. We ensure worldclass standard among the other leading brands. Gappu Cajon is reaching you with a wholesome array of cajon instruments in Kolkata and all over India, for we know music beats in your heart and pumps life in you.
        </p>
      </div>

      {/* Right Side - Image */}
      <div className="md:w-1/2 flex justify-center relative">
        <img
          src="public\Artist.png"
          alt="About Us"
          className="w-full h-auto rounded-lg shadow-md"
        />
        {/* Gappu Logo in the corner */}
        <div className="absolute top-4 right-4">
          <img src="/path/to/gappu-logo.png" alt="Gappu Logo" className="w-12 h-12" />
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex mt-4 md:mt-0 space-x-2 justify-center md:absolute bottom-4 right-4">
        <button className="w-10 h-10 flex items-center justify-center border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition">
          ←
        </button>
        <button className="w-10 h-10 flex items-center justify-center border border-orange-500 rounded-full text-orange-500 hover:bg-orange-500 hover:text-white transition">
          →
        </button>
      </div>
    </div>
  )
}

export default Artist
