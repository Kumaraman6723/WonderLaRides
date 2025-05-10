import React from "react";
import { motion } from "framer-motion";

const RideCard = ({ ride }) => {
  return (
    <motion.div
      className="ride-card rounded-lg overflow-hidden relative shadow-lg"
      style={{
        width: "250px",
        height: "370px",
      }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 10,
      }}
    >
      {/* Video/Image background taking up the full card */}
      <div className="absolute inset-0 w-full h-full">
        {ride.videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={ride.videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={ride.image}
            alt={`${ride.name} Ride`}
            className="w-full h-full object-cover"
          />
        )}

        {/* Dark overlay gradient for better text visibility at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      {/* Text content positioned at the bottom over the video/image */}
      <div className="absolute inset-x-0 bottom-0 p-4 z-10">
        <h3 className="text-xl font-bold text-white mb-1">{ride.name}</h3>
        <p className="text-sm text-gray-200 mb-1">{ride.location}</p>
        <p className="text-sm text-white mb-4">{ride.description}</p>

        <motion.button
          className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-xs py-2 px-4 rounded-md w-full"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          RIDE DETAILS
        </motion.button>
      </div>
    </motion.div>
  );
};

export default RideCard;
