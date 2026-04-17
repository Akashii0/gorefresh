import React from 'react'
import { PRODUCTS } from '../data/marketData'; 

const StarRating = ({ stars, max = 5 }) => {
  const count = parseInt(stars, 10);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }, (_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-[#F76319]' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
        </svg>
      ))}
    </div>
  );
};

const ProductCard = ({ image, label, stars, price }) => (
  <div className="flex flex-col rounded-lg overflow-hidden border-2 border-gray-200 bg-white 
    transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl cursor-pointer">
    <div className="bg-gray-100 flex items-center justify-center p-4 aspect-square">
      <img src={image} alt={label} className="object-contain w-full h-full" />
    </div>
    <div className="p-3 flex flex-col gap-1.5">
      <p className="text-[#404040] font-medium text-sm leading-tight">{label}</p>
      <StarRating stars={stars} />
      <div className="flex items-center justify-between mt-1 flex-wrap gap-2">
        <p className="text-[#404040] font-bold text-base">₦{price.toLocaleString()}</p>
        <button className="btn-green text-xs px-3 py-1.5">Add to cart</button>
      </div>
    </div>
  </div>
);
const Marketplace = () => {
  return (
     <section className="bg-white py-16 px-6 md:px-12 font-geist">
        <p className="text-[#0C850C] font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-10">
          MarketPlace
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {PRODUCTS.map((item, index) => (
            <ProductCard key={item.label} {...item} featured={index === 0} />
          ))}
        </div>
      </section>

  )
}

export default Marketplace
