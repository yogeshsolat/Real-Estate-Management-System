import React from "react"

import { awards } from "../../data/Data"
import "./awards.css"
import { Leaf } from "lucide-react"
import Strip from "./Strip"

const Awards = () => {
  return (
    <>
      <section className=' p-4'>
        <Strip title='awards'/>
        <div className=''>
          {/* <h1 className=" text-bold">Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services' subtitle='Our Awards</h1> */}

          <div className='grid sm:grid-cols-4 p-2 gap-4'>
            {awards.map((val, index) => (
              <div className='grid place-items-center p-1 shadow-2xl shadow-grey-300 gap-2' key={index}>
                <img src="https://icon-library.com/images/achievement-icon-png/achievement-icon-png-0.jpg" className="h-36"/>
                <h1 className="text-4xl">{val.num}</h1>
                <p className="text-xl">{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}



export default Awards
