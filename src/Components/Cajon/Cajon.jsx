import React from 'react'

export const Cajon = () => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-r from-gray-800 to-yellow-500 rounded-lg p-8 text-white">
      <div className="flex-1 text-left">
        <h2 className="text-2xl font-bold">Take this questionnaire</h2>
        <p className="mt-2 text-lg">And we will suggest a Cajon for you</p>
        <button className="mt-4 px-6 py-2 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600">
          Check it Out →
        </button>
      </div>
      <div className="flex-1 flex justify-evenly items-center">
        {/* Replace these divs with actual SVGs or images */}
        <div className="w-40 h-50  flex items-center justify-center">
            <img src="public\Cajon.png" alt="" />
        </div>
        <div className="w-40 h-50   flex items-center justify-center">
            <img src="public\Cajon3.png" alt="" />
        </div>
        <div className="w-40 h-50 flex items-center justify-center">
            <img src="public\Cajon1.png" alt="" />
        </div>
      </div>
    </div>
  )
}
