import React from 'react'
import b1_pic from "../assets/b1_pic.svg";
import b2_pic from "../assets/b2_pic.svg";
import b3_pic from "../assets/b3_pic.svg";
import b6_pic from "../assets/b6_pic.svg";
import pap_pic from "../assets/pap_pic.svg";

const PapNutrients = () => {
  return (
    <section className='flex flex-col bg-white items-center text-center justify-center py-12 md:py-24 px-6 gap-5 font-geist'>
      <p className='text-[#000000] max-w-3xl font-normal text-lg md:text-xl mb-6 md:mb-12'>
        Introducing our pap, packed with 4 essential vitamins and minerals, specially formulated to support your physical and mental growth and development.
      </p>

      {/* Grid: 1 column on mobile, 3 columns on medium screens and up */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 items-center max-w-6xl mx-auto'>

        {/* Left Column: Centered on mobile, Right-aligned on Desktop */}
        <div className='flex flex-col gap-10 md:gap-24 order-2 md:order-1'>
          <div className='flex flex-col gap-2 items-center md:items-end text-center md:text-right'>
            <img className='w-12 md:w-10' src={b1_pic} alt="Vitamin B1" />
            <p className='font-bold text-xl text-[#404040]'>Vitamin B1 (Thiamine)</p>
            <p className='font-light text-base md:text-lg text-gray-600 leading-relaxed max-w-xs md:max-w-none'>
              Helps the body use carbohydrates for energy, supports the brain.
            </p>
          </div>

          <div className='flex flex-col gap-2 items-center md:items-end text-center md:text-right'>
            <img className='w-12 md:w-10' src={b3_pic} alt="Vitamin B3" />
            <p className='font-bold text-xl text-[#404040]'>Vitamin B3 (Niacin)</p>
            <p className='font-light text-base md:text-lg text-gray-600 leading-relaxed max-w-xs md:max-w-none'>
              Aids digestion, helps improve energy levels, supports healthy skin.
            </p>
          </div>
        </div>

        {/* Middle Column: The Main Image */}
        <div className='flex justify-center order-1 md:order-2 mb-8 md:mb-0'>
          <img 
            src={pap_pic} 
            alt="Pap Bowl" 
            className='w-2/3 md:w-full max-w-sm transform md:scale-100 transition-transform duration-500' 
          />
        </div>

        {/* Right Column: Centered on mobile, Left-aligned on Desktop */}
        <div className='flex flex-col gap-10 md:gap-24 order-3'>
          <div className='flex flex-col gap-2 items-center md:items-start text-center md:text-left'>
            <img className='w-12 md:w-10' src={b2_pic} alt="Vitamin B2" />
            <p className='font-bold text-xl text-[#404040]'>Vitamin B2 (Riboflavin)</p>
            <p className='font-light text-base md:text-lg text-gray-600 leading-relaxed max-w-xs md:max-w-none'>
              Helps with growth, supports healthy skin and eyes.
            </p>
          </div>

          <div className='flex flex-col gap-2 items-center md:items-start text-center md:text-left'>
            <img className='w-12 md:w-10' src={b6_pic} alt="Vitamin B6" />
            <p className='font-bold text-xl text-[#404040]'>Vitamin B6 (Pyridoxine)</p>
            <p className='font-light text-base md:text-lg text-gray-600 leading-relaxed max-w-xs md:max-w-none'>
              Important for brain development, helps the body make mood-related hormones.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default PapNutrients