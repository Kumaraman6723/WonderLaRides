import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Sidebar = ({ isOpen, onClose }) => {
  const [expandedSections, setExpandedSections] = useState({
    parks: false,
    quickLinks: false,
  });

  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <div
      className={`fixed top-0 right-0 w-full md:w-96 h-full bg-white overflow-y-auto z-50 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } hide-scrollbar`}
    >
      {/* Header with logo and close button */}
      <div className="p-4 flex justify-between items-center border-b">
        <div className="logo">
          <img
            src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75"
            alt="Wonderla Logo"
            className="h-20"
          />
        </div>
        <button
          onClick={onClose}
          className="text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full p-2 transition-colors"
          aria-label="Close sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div className="p-4">
        {/* Parks Section with Dropdown */}
        <div className="border-b">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => toggleSection("parks")}
          >
            <div className="flex items-center text-blue-600">
              <img
                src="https://d22pimhl2qmbj7.cloudfront.net/public/playground_e8b25627b1.svg?w=32&q=75"
                className=" mr-3"
                alt="Parks"
              />
              <div>
                <h3 className="font-medium">Parks</h3>
                <p className="text-xs text-gray-600">
                  Explore Your favourite Wonderla Park
                </p>
              </div>
            </div>
            {expandedSections.parks ? (
              <ChevronUp className="h-5 w-5 text-blue-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-blue-600" />
            )}
          </div>

          {/* Parks Dropdown Content */}
          {expandedSections.parks && (
            <div className="grid grid-cols-2 gap-3 p-3 bg-gray-50">
              <div className="bg-white rounded-lg p-3 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                  <img
                    src="https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748.jpg?w=96&q=75"
                    alt="Kochi"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-sm text-center text-black">
                  Kochi
                </span>
              </div>

              <div className="bg-white rounded-lg p-3 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                  <img
                    src="https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c.jpg?w=96&q=75"
                    alt="Bengaluru"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-sm text-center text-black">
                  Bengaluru
                </span>
              </div>

              <div className="bg-white rounded-lg p-3 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                  <img
                    src="https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb.jpg?w=96&q=75"
                    alt="Hyderabad"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-sm text-center text-black">
                  Hyderabad
                </span>
              </div>

              <div className="bg-white rounded-lg p-3 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow cursor-pointer">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-2">
                  <img
                    src="https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac.jpg?w=96&q=75"
                    alt="Bhubaneswar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-medium text-sm text-center text-black">
                  Bhubaneswar
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Resorts Section */}
        <div className="flex items-center justify-between p-4 border-b cursor-pointer">
          <div className="flex items-center text-blue-600">
            <img
              src="https://d22pimhl2qmbj7.cloudfront.net/public/city_45e0a87cc8.svg?w=32&q=75"
              className=" mr-3"
              alt="Resorts"
            />
            <div>
              <h3 className="font-medium">Resorts</h3>
              <p className="text-xs text-gray-600">
                Get a rejuvenating experience at Wonderla Resort
              </p>
            </div>
          </div>
        </div>

        {/* Offers & Combos Section */}
        <div className="flex items-center justify-between p-4 border-b cursor-pointer">
          <div className="flex items-center text-blue-600">
            <img
              src="https://d22pimhl2qmbj7.cloudfront.net/public/discount_e3ac599ad9.svg?w=32&q=75"
              className=" mr-3"
              alt="Offers"
            />
            <div>
              <h3 className="font-medium">Offers & Combos</h3>
              <p className="text-xs text-gray-600">
                Plan the perfect day with exciting offers
              </p>
            </div>
          </div>
        </div>

        {/* Timings Section */}
        <div className="flex items-center justify-between p-4 border-b cursor-pointer">
          <div className="flex items-center text-blue-600">
            <img
              src="https://d22pimhl2qmbj7.cloudfront.net/public/time_68af0a1a84.svg?w=32&q=75"
              className=" mr-3"
              alt="Timings"
            />
            <div>
              <h3 className="font-medium">Timings And Guidelines</h3>
              <p className="text-xs text-gray-600">
                Know the timings and other guidelines
              </p>
            </div>
          </div>
        </div>

        {/* Group Booking - Yellow background */}
        <div className="p-4 border-b bg-[#FFD700] cursor-pointer">
          <div className="flex items-center text-black">
            <img
              src="https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=48&q=75"
              className=" mr-3"
              alt="Group Booking"
            />
            <div>
              <h3 className="font-medium">Group Booking</h3>
              <p className="text-xs">Reach Out To Wonderla Team</p>
            </div>
          </div>
        </div>

        {/* Tour Operator Portal - Blue background */}
        <div className="p-4 border-b bg-blue-600 cursor-pointer">
          <div className="flex items-center text-white">
            <img
              src="https://d22pimhl2qmbj7.cloudfront.net/public/tour_portal_c097403085.svg?w=48&q=75"
              className=" mr-3"
              alt="Tour Operator"
            />
            <div>
              <h3 className="font-medium">Tour Operator Portal</h3>
              <p className="text-xs">Reach Out To Wonderla Team</p>
            </div>
          </div>
        </div>

        {/* Partner With Us - Yellow background */}
        <div className="p-4 border-b bg-[#FFD700] cursor-pointer">
          <div className="flex items-center text-black">
            <img
              src="https://d22pimhl2qmbj7.cloudfront.net/public/group_booking_1adcd0978a.svg?w=48&q=75"
              className=" mr-3"
              alt="Partner"
            />
            <div>
              <h3 className="font-medium">Partner With Us</h3>
              <p className="text-xs">Reach Out To Wonderla Team</p>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="flex items-center justify-between p-4 border-b cursor-pointer">
          <div className="flex items-center text-blue-600">
            <img
              src="https://d22pimhl2qmbj7.cloudfront.net/public/unlink_1_bb57b8aa2f.svg?w=32&q=75"
              className=" mr-3"
              alt="About Us"
            />
            <div>
              <h3 className="font-medium">About Us</h3>
              <p className="text-xs text-gray-600">Know all about Wonderla</p>
            </div>
          </div>
        </div>

        {/* Quick Links Section with Dropdown */}
        <div className="border-b">
          <div
            className="flex items-center justify-between p-4 cursor-pointer"
            onClick={() => toggleSection("quickLinks")}
          >
            <div className="flex items-center text-blue-600">
              <img
                src="https://d22pimhl2qmbj7.cloudfront.net/public/about_us_3ae10e9512.svg?w=32&q=75"
                className=" mr-3"
                alt="Quick Links"
              />
              <div>
                <h3 className="font-medium">Quick Links</h3>
                <p className="text-xs text-gray-600">
                  Explore all other relevant information here
                </p>
              </div>
            </div>
            {expandedSections.quickLinks ? (
              <ChevronUp className="h-5 w-5 text-blue-600" />
            ) : (
              <ChevronDown className="h-5 w-5 text-blue-600" />
            )}
          </div>

          {/* Quick Links Dropdown Content */}
          {expandedSections.quickLinks && (
            <div className="pl-14 pr-4 pb-4">
              <ul className="space-y-3">
                <li className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  Restaurants
                </li>
                <li className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  Merchandise
                </li>
                <li className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  Events
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Contact Us Section */}
        <div className="flex items-center justify-between p-4 border-b cursor-pointer">
          <div className="flex items-center text-blue-600">
            <img
              src="https://d22pimhl2qmbj7.cloudfront.net/public/support_1_f316ee7cce.svg?w=32&q=75"
              className=" mr-3"
              alt="Contact Us"
            />
            <div>
              <h3 className="font-medium">Contact Us</h3>
              <p className="text-xs text-gray-600">
                Get In Touch Wonderla Team
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
