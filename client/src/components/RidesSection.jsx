import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import CategorySidebar from "./CategorySidebar";
import CarouselControls from "./CarouselControls";
import RideCard from "./RideCard";
import { rides } from "../data/rides";

const RidesSection = () => {
  const [activeCategory, setActiveCategory] = useState("land");
  const [filteredRides, setFilteredRides] = useState([]);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const carouselRef = useRef();
  const autoScrollTimerRef = useRef(null);
  const scrollOffset = 260; // Width per card approx.

  useEffect(() => {
    const filtered = rides.filter((ride) => ride.category === activeCategory);
    setFilteredRides(filtered);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeCategory]);

  useEffect(() => {
    if (isAutoScrolling && filteredRides.length > 0) {
      autoScrollTimerRef.current = setInterval(() => {
        if (carouselRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
          const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;

          if (isAtEnd) {
            carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            carouselRef.current.scrollBy({
              left: scrollOffset,
              behavior: "smooth",
            });
          }
        }
      }, 2500);
    }

    return () => clearInterval(autoScrollTimerRef.current);
  }, [isAutoScrolling, filteredRides]);

  const handleManualScroll = (direction) => {
    setIsAutoScrolling(false);

    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
      const isAtStart = scrollLeft <= 10;

      if (direction === "next") {
        if (isAtEnd) {
          carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          carouselRef.current.scrollBy({
            left: scrollOffset,
            behavior: "smooth",
          });
        }
      } else {
        if (isAtStart) {
          carouselRef.current.scrollTo({
            left: scrollWidth,
            behavior: "smooth",
          });
        } else {
          carouselRef.current.scrollBy({
            left: -scrollOffset,
            behavior: "smooth",
          });
        }
      }
    }

    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
    }
    autoScrollTimerRef.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 6000);
  };

  return (
    <main className="relative bg-[#253251] min-h-[800px] overflow-hidden">
      <div className="flex justify-between">
        <div className="w-80 md:block hidden pt-10">
          <CategorySidebar
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </div>

        <div className="w-full md:w-3/4 p-8">
          <div className="flex justify-between items-center mb-1 pl-3">
            <motion.h2
              className="font-extrabold text-white uppercase"
              style={{
                fontFamily: "Poppins, Inter, Arial, sans-serif",
                fontStyle: "normal",
                fontWeight: 900,
                fontSize: "60px",
                letterSpacing: "-0.03em",
                marginTop: "0.5rem",
                marginBottom: "1.5rem",
                lineHeight: 1.1,
              }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              OUR ICONIC RIDES
            </motion.h2>

            <CarouselControls
              onPrevious={() => handleManualScroll("prev")}
              onNext={() => handleManualScroll("next")}
            />
          </div>

          <div className="relative">
            {/* Remove overflow-hidden from parent container */}
            <motion.div
              className="flex gap-5 px-4 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              ref={carouselRef}
              whileTap={{ cursor: "grabbing" }}
              onDrag={() => setIsAutoScrolling(false)}
              onDragEnd={() => {
                if (autoScrollTimerRef.current) {
                  clearTimeout(autoScrollTimerRef.current);
                }
                autoScrollTimerRef.current = setTimeout(() => {
                  setIsAutoScrolling(true);
                }, 2000);
              }}
              style={{
                // Allow horizontal scrolling
                overflowX: "auto",
                // Hide scrollbars
                scrollbarWidth: "none",
                msOverflowStyle: "none",
              }}
            >
              {/* Hide scrollbar for Webkit browsers */}
              <style jsx>{`
                .flex::-webkit-scrollbar {
                  display: none;
                }
              `}</style>

              {filteredRides.map((ride) => (
                <motion.div
                  key={ride.id}
                  className="min-w-[200px] max-w-[260px] shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <RideCard ride={ride} />
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="flex justify-right mt-10 pl-4">
            <motion.button
              className="bg-[#FFD700] hover:bg-yellow-500 text-black font-medium py-3 px-12 rounded-full text-lg w-64"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span
                style={{
                  color: "#334DCF",
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Explore All Rides!
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RidesSection;
