import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as HaithemDjeddai } from './assets/haithem-djeddai.svg'
import { ReactComponent as WavyLine } from './assets/wavy-line.svg'

import img1 from './assets/img-1.jpg'
import img2 from './assets/img-2.jpg'



function App() {

  return (
    <div className="max-w-[1000px] mx-auto">

      <header className='flex justify-between items-center mt-1'>
        <a href="#"><Logo className='' /></a>

        <nav>
          <ul className='flex gap-12'>
            <li><a className='text-[1.7rem]' href="#">Gallery</a></li>
            <li><a className='text-[1.7rem]' href="#">Contact Me</a></li>
          </ul>
        </nav>
      </header>

      <main className=''>
        <div className='flex justify-between'>
          <div className='w-[55%]'>
            <HaithemDjeddai className='w-[80%] h-[25%]' />
            <h1 className='text-[5rem] ml-12' >Photography</h1>
            <p className='text-[2.5rem]'>Capturing life's moments, <br /> one click at a time</p>
            <WavyLine className='w-[70%] h-fit ml-auto mr-[8em]' />
          </div>

          <div className='w-[45%]'>
            <img className='h-[90%] w-[100%] shadow-1' src={img1} alt="" />
          </div>
        </div>

        <img className='w-[80%] mx-auto' src={img2} alt="" />

      </main>

    </div>
  )
}

export default App