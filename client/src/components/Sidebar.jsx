import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Users,
  Info,
  Link2,
  PhoneCall,
  Clock,
  Building,
} from "lucide-react";

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
      }`}
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
        <button onClick={onClose} className="text-gray-700">
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
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
            <Building className="h-6 w-6 mr-3" />
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
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
            <Clock className="h-6 w-6 mr-3" />
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
            <Users className="h-6 w-6 mr-3" />
            <div>
              <h3 className="font-medium">Group Booking</h3>
              <p className="text-xs">Reach Out To Wonderla Team</p>
            </div>
          </div>
        </div>

        {/* Tour Operator Portal - Blue background */}
        <div className="p-4 border-b bg-blue-600 cursor-pointer">
          <div className="flex items-center text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mr-3"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
            <div>
              <h3 className="font-medium">Tour Operator Portal</h3>
              <p className="text-xs">Reach Out To Wonderla Team</p>
            </div>
          </div>
        </div>

        {/* Partner With Us - Yellow background */}
        <div className="p-4 border-b bg-[#FFD700] cursor-pointer">
          <div className="flex items-center text-black">
            <Users className="h-6 w-6 mr-3" />
            <div>
              <h3 className="font-medium">Partner With Us</h3>
              <p className="text-xs">Reach Out To Wonderla Team</p>
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <div className="flex items-center justify-between p-4 border-b cursor-pointer">
          <div className="flex items-center text-blue-600">
            <Info className="h-6 w-6 mr-3" />
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
              <Link2 className="h-6 w-6 mr-3" />
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
            <PhoneCall className="h-6 w-6 mr-3" />
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
