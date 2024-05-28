import React from 'react'
import img from "../assets/hero_image.png"
const Hero = () => {
  return (
    <div>
        <div className="left-top ml-80 mt-40">
            <h1 className='hero-text leading-relaxed font-kalam font-black' >Customised <br/> Printed Tees</h1>
        </div>


        <div className="left-bottom ml-80 mt-7">
            <p className='hero-subtext font-indie-flower font-medium' >
            Show Your Team Spirit: Customize Your Indian Jersey <br/> with Your Name Today!
            </p>
        <button className=' custom-button mt-3' >
            Explore store
        </button>
        </div>



        <div className="right-img flex justify-end mr-24">
            <img src={img} alt="" className='max-h-1/2 max-w-3/12' />
        </div>
    </div>
  )
}

export default Hero