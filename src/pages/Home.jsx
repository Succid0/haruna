import React from 'react'
import Navbar from '../component/Navbar'
import Vector13 from '../assets/Vector 13.svg'
import Services from './Service'
import Project from './Project'
import Page from './Page'
import Contact from './Contact'
import Footer from './Footer'

function Home() {
  return (
    <div>
      <Navbar />
      

      <div className="flex flex-col md:flex-row items-center justify-between bg-black px-6 md:px-20 py-16">
        

        <div className="max-w-lg text-center md:text-left">
          <h1 className="font-bold text-5xl md:text-6xl text-white leading-tight">
            Make your <br /> business <br />
            <span className="text-[#55E6A5]">more powerful</span> <br /> with us
          </h1>

          <p className="mt-6 text-gray-300 text-base leading-relaxed">
            Lorem Ipsum is a dummy text used in the printing and typesetting industry. 
            It has been the industry's standard placeholder text since the 1500s, 
            originating from a scrambled version of a work by the Roman philosopher Cicero.
          </p>

          <button className="mt-8 px-6 py-3 border border-[#55E6A5] text-[#55E6A5] rounded-md font-medium hover:bg-[#55E6A5] hover:text-black transition">
            View more
          </button>
        </div>


        <div className="mt-10 md:mt-0">
          <img src={Vector13} alt="Illustration" className="w-[400px] md:w-[500px]" />
        </div>

      </div>
      <Services/>
      <Project/>
      <Page/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home