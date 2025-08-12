import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaCog,
} from "react-icons/fa";

const Educationa = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen  px-6 overflow-hidden">
      {/* Floating Elements */}
      <div className="relative max-w-4xl mx-auto">
        {/* Main Title */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
            Educational Journey
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 mt-4">
            Building expertise through academic excellence
          </p>
        </div>

        {/* Enhanced Timeline */}
        <div className="relative">
          {/* Timeline Item */}
          <div
            className={`relative pl-0 md:pl-20 transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            {/* Main Card */}
            <div className="group bg-white/80  p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-blue-200/50 transform hover:-translate-y-2">
              {/* Card Header */}
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                    B.Sc. in Textile Engineering
                  </h3>
                </div>
                <div className="ml-4 p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl group-hover:from-blue-200 group-hover:to-purple-200 transition-all duration-300">
                  <FaCog
                    className="text-blue-600 text-xl animate-spin"
                    style={{ animationDuration: "3s" }}
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="space-y-2">
                <div className="flex items-center text-gray-700 group-hover:text-gray-800 transition-colors duration-300">
                  <FaMapMarkerAlt className="text-blue-500 mr-3 text-lg" />
                  <span className="text-lg font-medium">
                    Rangpur Textile Engineering College Pirganj,Rangpur
                  </span>
                </div>

                <div className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  <FaCalendarAlt className="text-purple-500 mr-3 text-lg" />
                  <span className="text-base">Session: 2021 – Present</span>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border-l-4 border-blue-400">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Specialization
                  </h4>
                  <p className="text-gray-700 font-medium">
                    Yarn Manufacturing
                  </p>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Educationa;
