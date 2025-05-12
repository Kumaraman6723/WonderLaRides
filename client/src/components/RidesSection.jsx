import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
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
  const scrollOffset = 249;
  const dragX = useMotionValue(0);
  const [constraint, setConstraint] = useState(0);
  const startX = useRef(0);

  useEffect(() => {
    const filtered = rides.filter((ride) => ride.category === activeCategory);
    setFilteredRides(filtered);
    if (carouselRef.current) {
      carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
      dragX.set(0);
    }
  }, [activeCategory]);

  useEffect(() => {
    // Update constraints when filtered rides change
    if (filteredRides.length > 0) {
      const containerWidth = carouselRef.current?.clientWidth || 0;
      const contentWidth = filteredRides.length * scrollOffset;
      setConstraint(contentWidth - containerWidth + scrollOffset);
    }
  }, [filteredRides]);

  useEffect(() => {
    if (isAutoScrolling && filteredRides.length > 0) {
      autoScrollTimerRef.current = setInterval(() => {
        const currentX = dragX.get();
        const containerWidth = carouselRef.current?.clientWidth || 0;
        const contentWidth = filteredRides.length * scrollOffset;
        const maxScroll = contentWidth - containerWidth + scrollOffset;

        if (currentX <= -maxScroll + 11) {
          animate(dragX, 0, { duration: 0.7 });
        } else {
          animate(dragX, currentX - scrollOffset, { duration: 0.7 });
        }
      }, 2500);
    }

    return () => clearInterval(autoScrollTimerRef.current);
  }, [isAutoScrolling, filteredRides]);

  const handleManualScroll = (direction) => {
    setIsAutoScrolling(false);

    const currentX = dragX.get();
    const containerWidth = carouselRef.current?.clientWidth || 0;
    const contentWidth = filteredRides.length * scrollOffset;
    const maxScroll = contentWidth - containerWidth + scrollOffset;

    if (direction === "next") {
      if (currentX <= -maxScroll + 11) {
        animate(dragX, 0, { duration: 0.7 });
      } else {
        animate(dragX, currentX - scrollOffset, { duration: 0.7 });
      }
    } else {
      if (currentX >= -10) {
        animate(dragX, -maxScroll, { duration: 0.7 });
      } else {
        animate(dragX, currentX + scrollOffset, { duration: 0.7 });
      }
    }

    if (autoScrollTimerRef.current) {
      clearTimeout(autoScrollTimerRef.current);
    }
    autoScrollTimerRef.current = setTimeout(() => {
      setIsAutoScrolling(true);
    }, 5000);
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

          <div className="relative overflow-hidden">
            <motion.div
              className="flex gap-5 px-4 cursor-grab active:cursor-grabbing"
              drag="x"
              dragConstraints={{
                left: -constraint,
                right: 0,
              }}
              ref={carouselRef}
              style={{
                x: dragX,
                display: "flex",
                gap: "1.25rem",
                padding: "1rem",
              }}
              whileTap={{ cursor: "grabbing" }}
              onDragStart={() => {
                setIsAutoScrolling(false);
                startX.current = dragX.get();
              }}
              onDragEnd={(_, info) => {
                const threshold = 50; // Minimum drag distance to consider as intentional swipe
                const velocityThreshold = 500; // Minimum velocity to consider as swipe

                if (
                  Math.abs(info.offset.x) < threshold &&
                  Math.abs(info.velocity.x) < velocityThreshold
                ) {
                  // Return to original position if not dragged significantly
                  animate(dragX, startX.current, {
                    type: "spring",
                    bounce: 0.5,
                  });
                }

                if (autoScrollTimerRef.current) {
                  clearTimeout(autoScrollTimerRef.current);
                }
                autoScrollTimerRef.current = setTimeout(() => {
                  setIsAutoScrolling(true);
                }, 2000);
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
                  className="min-w-[260px] max-w-[260px] shrink-0"
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
