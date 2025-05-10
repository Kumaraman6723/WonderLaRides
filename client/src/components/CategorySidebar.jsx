import React, { useState } from "react";
import { motion } from "framer-motion";

// Arc utility for animation offset
const getArcOffset = (angleDeg, radius = 15) => {
  const rad = (angleDeg * Math.PI) / 180;
  return {
    x: radius * Math.cos(rad),
    y: radius * Math.sin(rad),
  };
};

const rotateSelection = {
  land : 'rotate-[-45deg]',
  water: 'rotate-none',
  kids: 'rotate-[45deg]'
}

const CategorySidebar = ({ activeCategory, setActiveCategory }) => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: "land",
      name: "Land",
      icon: "https://wonderla.vercel.app/icons/landRides.svg",
      count: 74,
      position: { top: "90px", right: "150px" },
    },
    {
      id: "water",
      name: "Water",
      icon: "https://wonderla.vercel.app/icons/waterRides.svg",
      count: 55,
      position: { top: "265px", right: "85px" },
    },
    {
      id: "kids",
      name: "Kids",
      icon: "https://wonderla.vercel.app/icons/kidsRides.svg",
      count: 36,
      position: { top: "440px", right: "165px" },
    },
  ];

  
  return (
    <div className="relative hidden md:block overflow-visible">

    <div className={`size-[600px] bg-white absolute  origin-center transition-all duration-500   rounded-full right-[20%] ${ rotateSelection[activeCategory] } `}     style={{
          background: `conic-gradient(
            from 0deg,
            rgb(232, 233, 241) -5deg,
            rgb(250, 213, 0) 65deg,
            rgb(250, 213, 0) 115deg,
            rgb(232, 233, 241) 185deg,
            rgb(232, 233, 241)
          )`,
        }} >
      <div className="size-[420px] bg-[#1E293B] absolute transition-all duration-300 rounded-full top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 " >
        <div className="size-[160px]  bg-yellow-400 absolute flex right-[-27%] rounded-full top-1/2 -translate-y-1/2 " >
          <div className="size-[140px] bg-white rounded-full m-auto" >

          </div>
        </div>
      </div>
      </div>  
     

      {/* Category Items */}
      <div className="relative z-10">
        {categories.map((category) => {
          const isActive = category.id === activeCategory;
          // const isActive = false;
          return (
            <motion.div
              key={category.id}
              className="absolute  "
              style={{
                top: category.position.top,
                right: category.position.right,
                zIndex: 2,
              }}
            >
        
              <div className="flex  ">
                <motion.div
                  className={`rounded-full flex items-center justify-center cursor-pointer transition-all overflow-visible relative
                    ${ isActive? '' : '' }
                    `}
                  
                  onClick={() => setActiveCategory(category.id)}
                 
                >
                  <img
                    src={category.icon}
                    alt={`${category.name} Rides`}
                    className={`transition-all  duration-300  ${ isActive ? 'scale-[1.4]' : '' }`}
                  />
                </motion.div>
                <div className=" absolute translate-x-[150%]">
                  <h3 className="text-white font-semibold text-lg drop-shadow-md uppercase">
                    {category.name}
                  </h3>
                  <span className="bg-[#93C5FD] text-[#0F172A] px-3 py-1 block flex w-20 border  rounded-full text-xs font-medium shadow-md uppercase mt-3">
                    {category.count} Rides
                  </span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div> 
    </div>
  );

};

export default CategorySidebar;