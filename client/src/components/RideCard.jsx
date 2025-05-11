import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types"; // Add this import

const RideCard = ({ ride = {} }) => {
  // Provide default empty object
  // Provide default values for all required properties
  const {
    videoSrc = null,
    image = "",
    name = "Ride Name",
    location = "Location not specified",
    description = "No description available",
  } = ride;

  return (
    <motion.div
      className="ride-card rounded-3xl overflow-hidden relative shadow-lg"
      style={{
        width: "250px",
        height: "380px",
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
      <div className="absolute inset-0 w-full h-full">
        {videoSrc ? (
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={image || "default-ride-image.jpg"} // Provide a fallback image
            alt={`${name} Ride`}
            className="w-full h-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-4 z-10">
        <h3 className="text-xl font-bold text-white mb-1">{name}</h3>
        <p className="text-sm text-gray-200 mb-1">{location}</p>
        <p className="text-sm text-white mb-4">{description}</p>

        <div className="relative">
          <motion.button
            className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium text-xs rounded-lg w-[150px] h-[40px] text-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <span
              style={{
                color: "#334DCF",
                fontFamily: "Poppins, sans-serif",
                fontWeight: 600,
                fontSize: "0.75rem",
              }}
            >
              RIDE DETAILS
            </span>
          </motion.button>
         
        </div>
      </div>
    </motion.div>
  );
};

// Add prop validation
RideCard.propTypes = {
  ride: PropTypes.shape({
    videoSrc: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    location: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default RideCard;
