import { motion, useTransform, useScroll } from 'framer-motion'
import { useRef, createRef, useEffect } from 'react'

import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as HaithemDjeddai } from './assets/haithem-djeddai.svg'
import { ReactComponent as WavyLine } from './assets/wavy-line.svg'

import img1 from './assets/img-1.jpg'
import img2 from './assets/img-2.jpg'
import img3 from './assets/img-3.jpg'
import img4 from './assets/img-4.jpg'
import img5 from './assets/img-5.jpg'
import img6 from './assets/img-6.jpg'
import img7 from './assets/img-7.jpg'



function App() {
  const ref = useRef(null)
  const { scrollY } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const rotate = useTransform(scrollY, [0, 1], [0, -8.50]);



  return (
    <div className="max-w-[1000px] mx-auto">

      <header className='flex justify-between items-center mt-1'>
        <a href="#"><Logo className='w-[100px] h-[100px]' /></a>

        <nav>
          <ul className='flex gap-5 mr-5 lg:mr-0 lg:gap-12'>
            <li><a className='text-[1.3rem] lg:text-[1.7rem]' href="#">Gallery</a></li>
            <li><a className='text-[1.3rem] lg:text-[1.7rem]' href="#">Contact Me</a></li>
          </ul>
        </nav>
      </header>

      <main className=''>
        <div className='flex flex-col md:flex-row md:justify-between'>
          <div className='w-full md:w-[55%] mb-[3.5rem] md:mb-0 md:mr-8'>
            <HaithemDjeddai className='animate mx-auto w-[85%] h-[23vw] md:h-[15vw] lg:h-[22%] lg:mx-0' />
            <h1 className='text-[2.4rem] ml-12 md:text-[3rem] lg:text-[4.3rem]' >Photography</h1>
            <p className='text-[1.5rem] ml-7 lg:ml-0 md:text-[1.5rem] lg:text-[2.3rem] lg:leading-10 mt-3'>Capturing life's moments, <br /> one click at a time</p>
            <WavyLine className='w-[70%] h-fit mx-auto lg:ml-auto ' />
          </div>

          <div className='w-full md:w-[60%]'>
            <img className='h-[90%] w-[90%] mx-auto lg:h-[80%] lg:w-[100%] shadow-1' src={img1} alt="" />
          </div>
        </div>

        <img className='w-[80%] mx-auto shadow-3 mt-12 md:mt-12' src={img2} alt="" />

        <div className='flex flex-col md:flex-row md:justify-between mt-12'>
          <div className='w-full md:w-[48%]'>
            <p className='text-[1.6rem] lg:text-[2.1rem] mb-[3.5rem] ml-10 lg:leading-10'>“A good photography is knowing where to stand.” <br /> - Ansel Adams</p>
            <img className='h-[70%] w-[80%] mx-auto lg:w-full shadow-2' src={img3} alt="" />
          </div>

          <img className='w-[80%] mx-auto md:w-[48%] h-[90%] shadow-4 mt-12 md:mt-0' src={img4} alt="" />
        </div>


        <div className='flex'>

          <p className='sticky top-[10rem] z-0 h-[65vh] mb-[6rem] text-[3rem]' >Capture <br /> the <br /> essence</p>

          <motion.div ref={ref} style={{ rotate }} className="flex-col justify-between  mx-auto min-h-[450vh] max-w-[48vw]">
            <motion.img className='sticky top-[7rem] z-0 w-[45vw] shadow-3 rotate-[4deg] h-[58vh] mb-[6rem]' src={img5} alt="" />
            <motion.img className='sticky top-[7rem] z-1 w-[45vw] shadow-3 rotate-[11deg] h-[58vh] mb-[6rem]' src={img6} alt="" />
            <motion.img className='sticky top-[7rem] z-2 w-[45vw] shadow-3 rotate-[-2.5deg] h-[58vh] mb-[6rem]' src={img7} alt="" />
          </motion.div>
        </div>


      </main>

    </div>
  )
}

export default App
