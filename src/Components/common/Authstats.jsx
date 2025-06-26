import React from 'react'
import Images from './Images'

function Authstats() {
  return (
    <div>
      
              <Images
                src="/Images/briefcase.png"
                alt="icon"
                className="h-14 w-14 p-3 rounded-xl bg-gray-400"
              />
              <p className="text-xl pt-2 font-medium">7,532</p>
              <p className="text-sm pt-2 text-gray-300">New Jobs</p>
            
    </div>
  )
}

export default Authstats
