import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CarouselControls = ({ onPrevious, onNext }) => {
  return (
    <div className="flex justify-end mb-4">
      <button
        onClick={onPrevious}
        className="bg-[#FFD700] hover:bg-yellow-500 rounded-full h-10 w-10 flex items-center justify-center mr-2"
      >
        <ChevronLeft className="h-6 w-6 text-[#334DCF]" />
      </button>
      <button
        onClick={onNext}
        className="bg-[#FFD700] hover:bg-yellow-500 rounded-full h-10 w-10 flex items-center justify-center"
      >
        <ChevronRight className="h-6 w-6 text-[#334DCF]" />
      </button>
    </div>
  );
};

export default CarouselControls;
