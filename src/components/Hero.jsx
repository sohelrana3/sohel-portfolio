import React from 'react'
import heroImg from '../assets/hero.jpg'

const Hero = () => {
  return (
    <div className='w-full h-screen bg-fixed bg-no-repeat bg-cover relative -z-50' style={{backgroundImage: "url('https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"}}>
        <div className='color w-full h-full flex flex-col justify-center items-center text-white '>
          <h4>welcome</h4>
          <h2>I'm developer</h2>
          <h4>based in Los Angeles, California.</h4>
        </div>
    </div>
  )
}

export default Hero